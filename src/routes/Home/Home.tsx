import HeroCompnent from "../../components/Hero/Hero";
import NavbarComponent from "../../components/navbar/Navbar";


const Home = () => {
    return <>
     <div className="h-full w-full flex flex-col">
        <div className="container-nav sticky top-0 z-10 w-[100%] h-[120px] flex justify-center items-center">
            <NavbarComponent /></div>
            <HeroCompnent />
     </div>
    </>
}


export default Home;