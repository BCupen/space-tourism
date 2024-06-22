import { HeroSection } from "../components/HeroSection";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="w-full h-screen bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-no-repeat bg-cover">
        <NavBar />
        <HeroSection />
    </div>
  )
}

export default Home