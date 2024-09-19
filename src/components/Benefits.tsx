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
      { title: 'Free mediation for owners', icon: <FaHandshake /> },
      { title: 'Up to 3 non-binding offers from tenants', icon: <FaMailBulk /> },
      { title: 'Up to 4,500 € each new lease', icon: <TbCalendarDollar /> },
      { title: 'Discrete mediation of your lease area', icon: <FaLocationPinLock /> },
    ]
  
    return (
      <div className="bg-gray-100  py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-darkGray text-center">Good reason for the area broker</h2>
          <p className="text-center mb-12 text-gray-600">With our large network of industry and competence in the mediation of leasehold areas, we are your ideal partner.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex justify-center flex-col items-center">
                <span className="text-4xl mb-4 block mx-auto text-teal text-6xl bg-lightTeal h-24 w-24 flex justify-center items-center rounded-full">{benefit.icon}</span>
                <h3 className=" text-darkGray">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  