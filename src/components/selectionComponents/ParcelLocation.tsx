import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

interface ParcelLocationProps {
    parcelLocation: {
        hallway: string;
        district: string;
        parcelNumber: string;
        postcode: string;
    };
    setParcelLocation: React.Dispatch<React.SetStateAction<{
        hallway: string;
        district: string;
        parcelNumber: string;
        postcode: string;
    }>>;
}

function ParcelLocation({ parcelLocation, setParcelLocation }: ParcelLocationProps) {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [coordinates, setCoordinates] = useState<[number, number] | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setParcelLocation({
            ...parcelLocation,
            [name]: value
        });

        if (name === 'postcode' && value.length > 2) {
            fetchSuggestions(value);
        }
    };

    const fetchSuggestions = async (query: string) => {
        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
                params: {
                    q: query,
                    format: 'json',
                    addressdetails: 1,
                    countrycodes: 'de', // Adjust the country code as needed
                    limit: 5
                }
            });

            const postcodes = response.data.map((item: any) => item.address.postcode).filter((value: string, index: number, self: string[]) => self.indexOf(value) === index);
            setSuggestions(postcodes);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    const handleSuggestionClick = async (postcode: string) => {
        setParcelLocation({
            ...parcelLocation,
            postcode
        });
        setSuggestions([]);

        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
                params: {
                    q: postcode,
                    format: 'json',
                    addressdetails: 1,
                    countrycodes: 'de', // Adjust the country code as needed
                    limit: 1
                }
            });

            if (response.data.length > 0) {
                const { lat, lon } = response.data[0];
                setCoordinates([parseFloat(lat), parseFloat(lon)]);
            }
        } catch (error) {
            console.error('Error fetching coordinates:', error);
        }
    };

    return (
        <div className="duration-100 animate-appearance-in">
            <h2 className="text-2xl font-bold mb-4 text-center">Wo liegt das Flurstück?</h2>
            <p className="text-center mb-8">
                Sollten Sie mehrere Flurstücke haben, geben Sie hier bitte das Größte an.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 relative">
                <input
                    type="text"
                    name="postcode"
                    placeholder="Postcode"
                    value={parcelLocation.postcode}
                    onChange={handleChange}
                    className="border p-2 rounded-md mb-4"
                />
                {suggestions.length > 0 && (
                    <ul className="border p-2 rounded-md mb-4 top-10 bg-white absolute">
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                className="cursor-pointer hover:bg-gray-200 p-2"
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
                <input
                    type="text"
                    name="hallway"
                    placeholder="Flur"
                    value={parcelLocation.hallway}
                    onChange={handleChange}
                    className="border p-2 rounded-md mb-4"
                />
                <input
                    type="text"
                    name="district"
                    placeholder="Gemarkung oder Gemeinde"
                    value={parcelLocation.district}
                    onChange={handleChange}
                    className="border p-2 rounded-md mb-4"
                />
                <input
                    type="text"
                    name="parcelNumber"
                    placeholder="Flurstücksnummer"
                    value={parcelLocation.parcelNumber}
                    onChange={handleChange}
                    className="border p-2 rounded-md mb-4"
                />
            </div>
            {coordinates && (
                <MapContainer center={coordinates} zoom={13} style={{ height: '400px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={coordinates}>
                        <Popup>
                            Postcode: {parcelLocation.postcode}
                        </Popup>
                    </Marker>
                </MapContainer>
            )}
        </div>
    );
}

export default ParcelLocation;