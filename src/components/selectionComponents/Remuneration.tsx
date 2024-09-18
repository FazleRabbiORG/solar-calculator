'use client'

import { FaHandHoldingUsd } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { MdSell } from "react-icons/md";

interface LandType {
    name: string;
    icon: string | JSX.Element;
}

export default function Remuneration({
    remuneration,
    setRemuneration,
}: {
    remuneration: string | null;
    setRemuneration: (type: string) => void;
}) {
    const landTypes: LandType[] = [
        { name: 'Annual lease', icon: <FaHandHoldingUsd /> },
        { name: 'One time payment', icon: <FaSackDollar /> },
        { name: 'sell', icon: <MdSell /> },
    ]

    return (
        <div className="relative">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">What remuneration do you want for the area?</h2>
                <p className="text-center mb-8">
                    Please select an option.
                </p>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 -4 ">
                        {landTypes.map((type) => (
                            <button
                                onClick={() => setRemuneration(type.name)}
                                key={type.name}
                                className={`flex flex-col items-center p-6 border  rounded-lg duration-500 ${type.name === remuneration ? "bg-teal text-white" : " hover:bg-teal bg-lightTeal"}`}
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














