import Hero from "@/components/Hero/Hero";
import AdditionalServices from "@/components/Services/servicesBoxes/Services";
import Services from "@/components/Services/Services";
import MainServices from "@/components/Services/MainServices/MainServices";
import CallBack from "@/components/Callback/CallBack";
import WhyUs from "@/components/WhyUs/WhyUs";
import Review from "@/components/Review/Reviews";
import Blog from "@/components/Blog/BlogModule";

export default function Home() {
  return (
    <main>
      <Hero langEn={true} />
      <AdditionalServices />
      <Services />
      <MainServices />
      <WhyUs />
      <Review />
      <Blog />
    </main>
  );
}
