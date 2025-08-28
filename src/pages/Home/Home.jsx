import UseTitle from "../../hooks/UseTitle";
import Faq from "./components/Faq";
import FeaturedProduct from "./components/FeaturedProduct";
import HeroSection from "./components/HeroSection";
import Testimonial from "./components/Testimonial";

const Home = () => {
  UseTitle("access latest computer books")
  return (
    <main>
      <HeroSection />
      <FeaturedProduct />
      <Testimonial />
      <Faq />
    </main>
  );
};

export default Home;
