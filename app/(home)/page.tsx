import Services from "@/components/Services";
import PositiveReviews from "@/components/about/PositiveReviews";
import Explore from "@/components/explore/Explore-more";
import FeatureSection from "@/components/features/Features";
import HeroSection from "@/components/hero/heroSection";
import Offer from "@/components/offers/Offer";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Offer />
      <FeatureSection />
      <Services />
      <PositiveReviews/>
      <Explore />
    </main>
  );
};

export default HomePage;
