import { FaHandshake, FaMailBulk } from "react-icons/fa";
import { FaLocationPinLock } from "react-icons/fa6";
import { TbCalendarDollar } from "react-icons/tb";

// File: components/Benefits.tsx
interface Benefit {
    title: string;
    icon: string | JSX.Element;
  }
  
  export default function Benefits() {
    const benefits: Benefit[] = [
      { title: 'Starker Firmenverbund mit Expertise in der Nutzung von Pachtflächen für eigene Projekte.', icon: <FaHandshake /> },
      { title: 'Optimierung durch direkte Zusammenarbeit im Unternehmensverbund.', icon: <FaMailBulk /> },
      { title: 'Attraktive Pachteinnahmen von bis zu 4.500 € pro Hektar jährlich.', icon: <TbCalendarDollar /> },
      { title: 'Professionelle und diskrete Abwicklung Ihrer Pachtangelegenheiten.', icon: <FaLocationPinLock /> },
    ]
  
    return (
      <div className="bg-gray-100  py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-darkGray text-center">Gute Gründe für den W Power Pachtpreisrechner</h2>
          <p className="text-center mb-12 text-gray-600">Mit unserer Expertise in der Nutzung von <br /> Pachtflächen für eigene Projekte und die unserer Tochtergesellschaften sind wir Ihr idealer Partner.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex justify-center flex-col items-center">
                <span className=" mb-4 block mx-auto text-teal text-6xl bg-lightTeal h-24 w-24 flex justify-center items-center rounded-full">{benefit.icon}</span>
                <h3 className=" text-darkGray text-center">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  