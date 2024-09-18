
// File: components/CO2Info.tsx
import Image from 'next/image'
import solarImage from '../images/solar_works.jpg'

export default function CO2Info() {
  return (
    <div className="relative bg-teal text-white md:h-[400px] md:flex md:justify-between">
      <div className=" md:flex md:flex-col md:justify-center items-center mx-auto p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Your lease area saves CO₂</h2>
            <p className="mb-4 text-center">
              {"Every year in Germany alone, 858 million tons of CO₂ are emitted into the atmosphere. This amount of CO ₂ emissions corresponds to a volume of 434 billion m³. It's as much as if you filled Lake Constance 7 times with a CO₂ bubble."}
            </p>
            <button className="bg-white text-teal text-center px-6 py-2 mx-auto flex justify-center items-center rounded-full font-bold">
              Offer your lease area now
            </button>
      </div>
        <div className="relative w-full md:h-full h-[250px] ">
          <Image src={solarImage} alt="Solar panels" layout="fill" className=" object-cover" />
        </div>
    </div>
  )
}
