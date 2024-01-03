import Services from "@/components/Services";
import Explore from "@/components/explore/Explore-more";
import FeatureSection from "@/components/features/Features";
import HeroSection from "@/components/hero/heroSection";
import Offer from "@/components/offers/Offer";


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Offer />
      <FeatureSection />
      <Services/>
      <Explore/>
    </>
  );
};

export default HomePage;
