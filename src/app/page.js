import Hero from '@/components/Hero/Hero'
import AdditionalServices from '@/components/Services/servicesBoxes/Services'
import WhyUs from '@/components/Services/Services'
import Team from '@/components/Team/Team'
import MainServices from '@/components/Services/MainServices/MainServices'
import CallBack from "@/components/Callback/CallBack";
import Reviews from '@/components/Review/Reviews'

export default function Home() {
  return (
   <main>
    <Hero />
    <AdditionalServices />
    <WhyUs />
    <MainServices />
   </main>
  )
}
