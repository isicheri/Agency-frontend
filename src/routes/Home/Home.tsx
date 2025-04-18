import AboutComponent from "../../components/aboutComponent/About";
import HeroCompnent from "../../components/Hero/Hero";
import NavbarComponent from "../../components/navbar/Navbar";


const Home = () => {
    return <>
     <div className="h-full w-full flex flex-col">
        <div className="relative z-50! w-full h-auto">
      <NavbarComponent />
        </div>
      <HeroCompnent />
      <AboutComponent />
     </div>
    </>
}


export default Home;