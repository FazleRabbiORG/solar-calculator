// File: components/LandTypeSelector.tsx
'use client'

interface LandType {
  name: string;
  icon: string;
}

export default function LandTypeSelector({
  selectedLandType,
  setSelectedLandType,
}: {
  selectedLandType: string | null;
  setSelectedLandType: (type: string) => void;
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
    <div  className="relative  ">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">What kind of area is it?</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          Please select the type of area you want to lease.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {landTypes.map((type) => (
            <button onClick={
              () => {
                setSelectedLandType(type.name);
              }
            } key={type.name} className={`flex flex-col items-center p-4 border rounded  ${type.name === selectedLandType ? "bg-teal" :"hover:bg-black/30" }`}>
              <span className="text-4xl mb-2">{type.icon}</span>
              <span>{type.name}</span>
            </button>
          ))}
        </div>
        
      </div>
    </div>
  )
}