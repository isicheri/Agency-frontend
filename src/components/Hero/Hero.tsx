import { ButtonComponent } from "../button/Button";



const HeroCompnent = () => {
    return <>
    <div id="hero" className="w-full h-full flex justify-center items-center">
        <div className=" h-[80%] w-[70%] flex justify-center items-center flex-col">
            <div className="h-auto w-full flex justify-center items-center flex-col">
         <div className="w-full h-auto"><h1 className="text_animation300 !text-6xl text-amber-50 text-center">LET'S MAKE <span> &#123;&#125;</span> </h1></div>
          <div className="w-full h-auto"><h2 className="text_animation500 !text-6xl text-amber-50 text-center">SOFTWARE FOR YOU</h2></div>
            </div>
            <div className="h-auto">
                <p className="text_animation700 text-center text-amber-50 !p-2.5">
                 We help businesses design ,market, and build custom softwares,covering everything from financial instituiton & medical companies all the way to tech companies and government organizations.
                </p>
            </div>
            <div className="text_animation800 w-full h-16 flex justify-center items-center">
                <ButtonComponent textValue={"Get In Touch"} btnHeight={""} btnWidth={""} lghidden={""} mdhidden={""} />
            </div>
        </div>
    </div>
    </>
}

export default HeroCompnent;