import bg from '@/images/epower-bg.webp';
import Image from 'next/image';
import Header from './Header';

export default function Hero() {
  return (
    <div className=" relative min-h-[500px] lg:min-h-[400px]">
      <Header />
      <Image
        src={bg}
        alt="ePower"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        objectFit="cover"
        objectPosition="top"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal to-transparent -z-10"></div>
      <div className="text-white py-16 relative h-full">
        <div className="container mx-auto text-center relative z-10 h-full flex flex-col justify-center">
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