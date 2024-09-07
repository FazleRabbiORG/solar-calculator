"use client"
import { useState } from "react";
import LandTypeSelector from "@/components/LandTypeSelector";

function Calculator() {
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
    const [selectedLandType, setSelectedLandType] = useState<string | null>(null);

    console.log("selectedLandType", selectedLandType);
    return (
        <div className='bg-darkGray p-8 lg:p-12 rounded-md'>
            <LandTypeSelector selectedLandType={selectedLandType} setSelectedLandType={setSelectedLandType} />

            <div className="text-center mt-8">
          <button disabled={buttonDisabled} className={`${buttonDisabled ? "bg-lightGray" : "bg-teal"} text-white px-6 py-2 rounded-full font-bold`}>
            Continue
          </button>
        </div>
        </div>
    );
}
 
export default Calculator;