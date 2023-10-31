import Services from "@/components/Services";
import Explore from "@/components/explore/Explore-more";
import TarmsSection from "@/components/explore/trams/TarmsSection";
import Feature from "@/components/features/Features";
import HeroSection from "@/components/hero/heroSection";
import Offer from "@/components/offers/Offer";


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Offer />
      <Feature />
      <Services/>
      <TarmsSection/>
      <Explore/>
    </>
  );
};

export default HomePage;
