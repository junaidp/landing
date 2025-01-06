import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import Services from "@/app/components/Services";
import StatsGrid from "@/app/components/StatsGrid";
import Pricing from "@/app/components/Pricing";
import ContactUs from "./components/ContactUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <StatsGrid />
      <Pricing />
      <ContactUs />
    </>
  );
};

export default Home;
