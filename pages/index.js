import NavBar from "../components/Navbar";
import { Hero } from "../components/Hero";


const UltiverseDemo = () => {
  return (
    <div className="relative bg-gray-100 w-full h-[1080px] overflow-hidden text-left text-5xl text-gray-500 font-terminus-ttf">
      <NavBar />
      <Hero />
      
    </div>
  );
};

export default UltiverseDemo;
