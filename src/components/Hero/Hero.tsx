import InfiniteScrollPage from "../infinite-scroll/InfiniteScroll";



const HeroCompnent = () => {
    return <>
    <div className="h-auto w-full flex items-center justify-center  md:h-auto md:w-full md:items-center md:justify-center">

     <div className="h-[500px] w-[70%] flex flex-col items-center ">

     <div className="w-full h-[80%]">
        {/* home text holder */}
        <div className="relative w-full max-w-lg">
<div className="absolute top-0 -left-4 h-72 w-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70
blob"></div>
<div className="absolute top-0 -right-4 h-72 w-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 blob"></div> 
<div className="absolute -bottom-8 left-20 h-72 w-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 blob"></div>
 </div>

 <div className="w-full h-full flex flex-col justify-center">
 <div className="h-auto w-[50%]">
  <div className="w-full h-auto"><h1 className="text_animation300 !text-5xl text-black text-center">LET'S MAKE <span> &#123;&#125;</span> </h1></div>
  <div className="w-full h-auto"><h2 className="text_animation500 !text-5xl text-black text-center">SOFTWARE FOR YOU</h2></div>
  </div>
  <div className="h-auto w-[50%]">
  <p className="text_animation700 text-center text-black !p-2.5">
                 We help businesses design ,market, and build custom softwares,covering everything from financial instituiton & medical companies all the way to tech companies and government organizations.
                </p>
                </div>
 </div>

    </div>

     <div className="w-full h-[20%] flex items-center">
        {/* infinite scroll holder */}
        <InfiniteScrollPage />
     </div>
     </div>

     <div className="h-[500px] w-[30%] relative flex justify-center items-center overflow-hidden ">
        {/* ball holder */}
       <div className="h-96 w-96 bg-orange-500 rounded-full absolute right-[-40%] box-shadow-circle rotate-center"></div>
     </div>

    </div>
    </>
}

export default HeroCompnent;

// https://www.figma.com/design/a9hPlZvMmciBDZ8AZ0UT7E/Modern-IT-Solutions-Website-UI-Kit--Community-?node-id=1-1553&t=dJHNnLse3YQ76pAp-0