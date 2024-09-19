// File: components/LandTypeSelector.tsx
'use client'

import { motion } from 'framer-motion';

interface LandType {
  name: string;
  icon: string;
}

export default function LandTypeSelector({
  selectedLandType,
  setSelectedLandType,
  handleNextStep
}: {
  selectedLandType: string | null;
  setSelectedLandType: (type: string) => void;
  handleNextStep : () => void;
}) {
  const landTypes: LandType[] = [
    { name: 'Grassland', icon: '🌿' },
    { name: 'Arable land', icon: '🌾' },
    { name: 'Industrial area', icon: '🏭' },
    { name: 'Mixed are', icon: '🏘️' },
    { name: 'Day reduction', icon: '⛏️' },
    { name: 'Landfill', icon: '♻️' },
  ]

  return (
    <div  className="relative duration-100 animate-appearance-in ">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">What kind of area is it?</h2>
        <p className="text-center mb-8">
          Please select the type of area you want to lease.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {landTypes.map((type) => (
            <button onClick={
              () => {
                setSelectedLandType(type.name);
                handleNextStep();
              }
            } key={type.name} 
              className={`flex flex-col items-center p-6 border rounded-lg duration-500 ${type.name === selectedLandType ? "bg-teal text-white" : " hover:bg-teal bg-lightTeal"}`}
            
            >
              <span className="text-5xl mb-2">{type.icon}</span>
              <span className="mt-4">{type.name}</span>
            </button>
          ))}
        </div>
        
      </div>
    </div>
  )
}