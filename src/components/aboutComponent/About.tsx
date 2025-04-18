import {PaperAirplaneIcon} from "@heroicons/react/24/outline";
import teamPicture from "../../assets/images/teampicture.png";

const serviceArray = ["Software","Mobile Apps","Web Design","Front-end","Backend-End"];

const AboutComponent = () => {
    return <>
    <div className="w-full h-auto flex flex-col">

    <div className="w-full h-auto flex flex-col items-center justify-center">

        <div className="h-auto w-[80%] flex flex-col items-center justify-center p-2">
     
     <div className="w-[60%] bg-black h-[400px] m-[20px]! relative rounded-tl-[100px] rounded-b-xs rounded-tr-xs">
        <img src={teamPicture} className="absolute w-full h-full rounded-tl-[100px] rounded-b-xs rounded-tr-xs opacity-30"/>
     <div className="h-[270px] w-[70%] second_glass_css rounded-tl-[100px] rounded-b-xs rounded-tr-xs absolute top-[60%] left-[55%] flex flex-col items-center justify-center">``
        <div className="w-full h-[20%]">
            <h3 className="text-white text-3xl! pl-2!">WE'RE DARA'S SOFTWARK</h3>
        </div>
        <div className="w-full h-auto flex items-center justify-center flex-col">
          <p className="text-white text-lg pl-2!"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, saepe illum perspiciatis molestiae maxime laboriosam.</p>
          <p className="text-black pl-2!">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vero doloribus sed praesentium porro nostrum at laboriosam magnam delectus. Necessitatibus laboriosam nemo reiciendis cupiditate praesentium quae veniam fugiat sunt a.</p>
        </div>
     </div>
     </div>

     <div className="w-full h-[100px] flex items-center justify-start">
     <div className="bg-black h-[55px] w-[20%] m-3! flex items-center justify-center rounded-sm">
        <span className="text-[15px] text-gray-50">Get In Touch</span>
        <div className="w-[30%] h-full flex items-center justify-center">
            <PaperAirplaneIcon className="text-amber-50 w-[25px] shake-horizontal"/>
        </div>
     </div>
     </div>
        </div>

        <div className="h-auto w-full flex items-center justify-between flex-col">
        {/* technology holder div */}
        <div className="w-[85%] h-[100px]! flex items-center">
         <div className="bg-orange-400 w-[40px] h-[50px] rounded-s-3xl rounded-b-3xl"></div>
         <div className="h-[50px] w-[30%] flex items-center"><h2 className="text-black text-4xl!">Techcnology</h2><p className="text-orange-500">We use</p></div>
        </div>


        <div className="w-[85%] h-auto flex justify-center items-center">

            <div className="w-[50%] h-[350px] flex flex-col">

             <div className="w-full h-[100px] flex items-center">
             <div className="bg-blue-400 w-[40px] h-[50px] rounded-s-3xl rounded-b-3xl"></div>
             <div className="h-[50px] w-[30%] flex items-center"><h2 className="text-black text-4xl!">Services</h2></div>
             </div>

           <div className=" w-[50%] h-[300px] flex flex-col justify-start">
            {/* service array holder */}
           {
            serviceArray.map((data) => (
                <div className="w-full h-[30px]">
                        <p className="text-lg">
                            {data}
                        </p>
                </div>
            ))
           }
           </div>

            </div>

            <div className="w-[50%] h-[300px] bg-amber-700"></div>

        </div>

        </div>

    </div>
    </div>
    </>
}



export default AboutComponent;