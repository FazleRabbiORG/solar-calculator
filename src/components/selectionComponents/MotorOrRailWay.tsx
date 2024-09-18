'use client'

import { FaRegTimesCircle } from "react-icons/fa";
import { GiHorizonRoad, GiRailRoad } from "react-icons/gi";

interface LandType {
    name: string;
    icon: string | JSX.Element;
}

export default function MotorOrRailway({
    motorOrRail,
    setMotorOrRail
}: {
    motorOrRail: string | null;
    setMotorOrRail: (type: string) => void;
}) {
    const landTypes: LandType[] = [
        { name: 'Highway', icon: <GiHorizonRoad /> },
        { name: 'Railway line', icon: <GiRailRoad /> },
        { name: 'No', icon: <FaRegTimesCircle /> }
    ]

    return (
        <div className="relative">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">Is the area on a motorway or railway line?</h2>
                <p className="text-center mb-8">
                    Please only select the option if your area is directly adjacent.
                </p>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-3xl ">
                        {landTypes.map((type) => (
                            <button
                                onClick={() => setMotorOrRail(type.name)}
                                key={type.name}
                                className={`flex flex-col items-center p-6 border  rounded-lg duration-500 ${type.name === motorOrRail ? "bg-teal text-white" : " hover:bg-teal bg-lightTeal"}`}
                            >
                                <span className="text-5xl mb-2">{type.icon}</span>
                                <span className="mt-4">{type.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}














