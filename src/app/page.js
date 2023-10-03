import Hero from '@/components/Hero/Hero'
import Services from '@/components/Services/servicesBoxes/Services'
import Services2 from '@/components/Services/Services'
import Team from '@/components/Team/Team'
import Spinner from '@/components/Spinner/Spinner'

export default function Home() {
  return (
   <main>
    <Hero />
    <Services />
    <Services2 />
    <Spinner />
    <Team />
   </main>
  )
}
