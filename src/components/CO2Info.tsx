
// File: components/CO2Info.tsx
import Image from 'next/image'

export default function CO2Info() {
  return (
    <div className="bg-green-500 dark:bg-green-700 text-white py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Ihre Pachtfläche spart CO₂</h2>
            <p className="mb-4">
              Jedes Jahr werden allein in Deutschland 858 Millionen Tonnen CO₂ in die Atmosphäre emittiert. Diese Menge an CO₂-Emissionen entspricht einem Volumen von 434 Milliarden m³. Das ist so viel, wie wenn man den gesamten Bodensee 7-mal mit einer CO₂-Blase füllen würde.
            </p>
            <button className="bg-white text-green-500 px-6 py-2 rounded-full font-bold">
              Bieten Sie Ihre Pachtfläche an
            </button>
          </div>
          <div className="md:w-1/2">
            <Image src="/images/solar-panels.webp" alt="Solar panels" width={500} height={300} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  )
}
