// File: components/LandTypeSelector.tsx
'use client'

import { FaRegTimesCircle } from "react-icons/fa";
import { GiSolarPower } from "react-icons/gi";
import { MdBatteryChargingFull, MdOutlineWindPower } from "react-icons/md";

interface LandType {
    name: string;
    icon: string | JSX.Element;
}

export default function InterestedToLease({
    interestedToLease,
    setInterestedToLease
}: {
    interestedToLease: string | null;
    setInterestedToLease: (type: string) => void;
}) {
    const landTypes: LandType[] = [
        { name: 'Solar', icon: <GiSolarPower /> },
        { name: 'Wind power', icon: <MdOutlineWindPower /> },
        { name: 'Battery storage', icon: <MdBatteryChargingFull /> },
        { name: 'no', icon: <FaRegTimesCircle /> }
    ]

    return (
        <div className="relative  ">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">What kind of area is it?</h2>
                <p className="text-center mb-8">
                    Please select the type of area you want to lease.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-center items-center ">
                    {landTypes.map((type) => (
                        <button onClick={
                            () => {
                                setInterestedToLease(type.name);
                            }
                        } key={type.name} className={`flex flex-col items-center p-4 border rounded  ${type.name === interestedToLease ? "bg-teal" : "hover:bg-black/30"}`}>
                            <span className="text-4xl mb-2">{type.icon}</span>
                            <span>{type.name}</span>
                        </button>
                    ))}
                </div>

            </div>
        </div>
    )
}