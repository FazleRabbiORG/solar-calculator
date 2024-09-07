import Hero from '@/components/Hero'
import LandTypeSelector from '@/components/LandTypeSelector'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import CO2Info from '@/components/CO2Info'
import FAQ from '@/components/FAQ'
import Calculator from '@/components/Calculator'

export default function Home() {
  return (
    <>
        <Hero />
        <div className='-mt-[250px] lg:p-20 p-5'>
          <Calculator />
        </div>
      <Benefits />
      <HowItWorks />
      <CO2Info />
      <FAQ />
    </>
  )
}