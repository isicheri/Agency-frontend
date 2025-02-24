import React from "react";
import { Link } from "react-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavBarButtonComponent } from "../button/Button";

const NavbarComponent = () => {
    const [openNav,setOpenNav] = React.useState(false);
    const [openMbNav,setOpenMbNav] = React.useState(false);
    window.addEventListener( "resize",() =>{if(window.innerWidth >=960) {setOpenNav(false)}else {setOpenNav(true)}});
    const UlList = [{to: "/",text: "About",},{to: "/",text: "Services"},{to: "/",text: "Portfolio"}]
    function onClickEventNav() {
      setOpenMbNav(!openMbNav)
    }
    return <>
     <div className="rounded-lg h-[80px] bg-slate-950 text-white w-[70%] py-2 lg:px-8 lg:py-4 flex justify-center items-center moving_border">
     {
     !openNav ? (
        <div className="w-full h-full flex justify-between items-center">
        <div className=" h-full w-[20%] flex justify-center items-center">
          <h2 className="!text-2xl hover_li">
            <Link to={'/'}>.Dara's</Link>
          </h2>
        </div>
        <div className=" h-full w-[40%]">
          <ul className="w-full h-full flex justify-center items-center">
            {
            UlList.map((li,index) => {
              return (<li key={index} className="!p-2.5 text-[18px] hover_li"><Link to={li.to}>{li.text}</Link></li>)
            })
           }
          </ul>
        </div>
        <div className=" h-full w-[30%] flex justify-center items-center">
          <NavBarButtonComponent textValue={"Get In Touch"} btnHeight={""} btnWidth={""} lghidden={""} mdhidden={""} />
        </div>
        </div>
      ) : (

        <div className="w-full h-full flex justify-between items-center relative">
            <div className=" h-full w-[40%] flex justify-center items-start">
        <h2 className="!text-5xl hover_li !pt-3">
          <Link to={'/'}>.D</Link>
        </h2>
      </div>

     
      
      <div className={`absolute top-[100px] height_trans bg-slate-950 w-full ${openMbNav ? "h-[450px] flex" : "max-h-0 hidden"} flex-col justify-center items-center rounded-lg !transition-all !duration-500 !ease-in-out !overflow-hidden`}>
      <div className="">
          <ul className="">
            {
            UlList.map((li,index) => {
              return (<li key={index} className="!p-4.5 text-[18px] hover_li"><Link to={li.to}>{li.text}</Link></li>)
            })
           }
          </ul>
        </div>
        <div className="w-full !h-auto flex justify-center items-center !p-4">
          <NavBarButtonComponent textValue={"Get In Touch"} btnHeight={""} btnWidth={""} lghidden={""} mdhidden={""} />
        </div>
      </div>

      <div className="h-full w-[40%]  flex justify-center items-center cursor-pointer"> 
        {
          !openMbNav ? <Bars3Icon className="h-[50px] w-[50px]" onClick={onClickEventNav}/> : <XMarkIcon   className="h-[50px] w-[50px] icon_transition" onClick={onClickEventNav}/>
        }
      </div>
        </div>      

      )
     }
     </div>
    </>
}


export default NavbarComponent;