import bg from '@/images/solar-panels.webp'
import Image from 'next/image';
import Header from './Header';

export default function Hero() {
  return (
    <div className="relative min-h-[500px] lg:min-h-[400px]">
      <Image
        src={bg}
        height={500}
        width={1000}
        alt="ePower"
        className="absolute top-0 left-0 w-full h-full object-cover object-top "
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal to-transparent "></div>
      <div className="text-white pb-16 relative h-full">
      <Header />
        <div className="container mx-auto pt-16 relative h-full flex flex-col  p-5 m-5">
          <h1 className="text-4xl font-bold mb-4">Online lease price calculator</h1>
          <p className="mb-8">Fill in the lease price calculator now and receive your individual lease estimate by email within 10 minutes.</p>
          {/* <button className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-full font-bold">
            Start the lease price calculator
          </button> */}
        </div>
      </div>
    </div>
  );
}