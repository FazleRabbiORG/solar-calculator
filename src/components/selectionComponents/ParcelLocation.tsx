interface ParcelLocationProps {
    parcelLocation: {
        hallway: string;
        district: string;
        parcelNumber: string;
        postcode: string;
    };
    setParcelLocation: (address: {
        hallway: string;
        district: string;
        parcelNumber: string;
        postcode: string;
    }) => void;
}

function ParcelLocation({ parcelLocation, setParcelLocation }: ParcelLocationProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setParcelLocation({
            ...parcelLocation,
            [name]: value
        });
    };

    return (
        <div className="duration-100 animate-appearance-in">
            <h2 className="text-2xl font-bold mb-4 text-center">Where is the parcel located?</h2>
            <p className="text-center mb-8">
            If you have several parcels, please indicate the largest here.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <input
                    type="text"
                    name="postcode"
                    placeholder="Postcode"
                    value={parcelLocation.postcode}
                    onChange={handleChange}
                    className="border p-2 rounded-md mb-4"
                />
                <input
                    type="text"
                    name="hallway"
                    placeholder="Hallway"
                    value={parcelLocation.hallway}
                    onChange={handleChange}
                    className="border p-2 rounded-md mb-4"
                />
                <input
                    type="text"
                    name="district"
                    placeholder="District or Community"
                    value={parcelLocation.district}
                    onChange={handleChange}
                    className="border p-2 rounded-md mb-4"
                />
                <input
                    type="text"
                    name="parcelNumber"
                    placeholder="Parcel Number"
                    value={parcelLocation.parcelNumber}
                    onChange={handleChange}
                    className="border p-2 rounded-md mb-4"
                />
                
            </div>
        </div>
    );
}

export default ParcelLocation;