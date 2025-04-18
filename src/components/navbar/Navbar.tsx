import React, { useEffect } from "react";
import { Link } from "react-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


const NavbarComponent = () => {
    const [openNav,setOpenNav] = React.useState(false);
    const [openMbNav,setOpenMbNav] = React.useState(false);
    useEffect(() => {
      window.addEventListener( "resize",() =>{if(window.innerWidth >=960) {setOpenNav(false)}else {setOpenNav(true)}});
    },[openMbNav,openNav])
    const UlList = [{to: "/",text: "About",},{to: "/",text: "Services"},{to: "/",text: "Portfolio"}]
    function onClickEventNav() {
      setOpenMbNav(!openMbNav)
    }
    return <>
      <div className="w-full h-[100px] flex items-center justify-center">

      <div className=" w-[80%] relative h-full flex items-center justify-between">

        <div className="h-full w-[20%] flex items-center justify-center cursor-pointer">
         <p className="text-5xl text-purple-400 flex">.D<p className="text-2xl text-black">ara's</p></p>
         </div>
         {
         !openNav ? (
           <div className="w-[65%] h-full flex items-center justify-center">
          <div className="h-full w-[75%]">
            <ul className="w-full h-full flex items-center justify-around">
              {
                UlList.map((data) => (
                  <Link to={data.to}>
                  <li className="text-lg text-black cursor-pointer">{data.text}</li>
                  </Link>
                ))
              }
            </ul>
          </div>
          <div className="h-full w-[25%] flex items-center justify-center">
            <div className="h-[60px] w-full bg-black flex items-center justify-center cursor-pointer">
              <span className="h-3 w-3 bg-orange-500 rounded-full mr-1"></span>
              <p className="text-[16px] text-white">Hire Us, Now</p>
            </div>
          </div>
        </div> 
         ) : (
          <>
           <div className={`w-[80%] ${openMbNav ? "h-[450px]" : "accordion-content"} absolute top-[100px] left-[50px] navbar-glass flex flex-col z-50`}>
           <div className="h-[70%] w-full">
            <ul className="w-full h-full flex flex-col items-center justify-around">
              {
                UlList.map((data) => (
                  <Link to={data.to}>
                  <li className="text-lg text-black cursor-pointer">{data.text}</li>
                  </Link>
                ))
              }
            </ul>
          </div>
          <div className="h-[30%] w-full flex items-center justify-center">
            <div className="h-[60px] w-[80%] bg-black flex items-center justify-center cursor-pointer">
              <span className="h-3 w-3 bg-orange-500 rounded-full mr-1"></span>
              <p className="text-[16px] text-white">Hire Us, Now</p>
            </div>
          </div>
          </div>
          <div className="h-full w-[30%] flex items-center justify-center">
          {
          !openMbNav ? <Bars3Icon className="h-[50px] w-[50px]" onClick={onClickEventNav}/> : <XMarkIcon   className="h-[50px] w-[50px] icon_transition" onClick={onClickEventNav}/>
        }
          </div>
          </>
         )
         }
        </div> 
      </div>
    </>
}




export default NavbarComponent;