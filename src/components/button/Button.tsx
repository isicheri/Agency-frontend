import { motion } from "framer-motion"

interface IButtonProps {
    textValue: string;
    btnHeight: string;
    btnWidth:string;
    lghidden: string;
    mdhidden: string;
}

export const ButtonComponent = ({textValue,mdhidden}:IButtonProps) => {

 return (
    <motion.button
     className={`px-6 py-2 !rounded-3xl relative radial-gradient h-[50px] w-[30%] m-2 !text-center !text-amber-50 cursor-pointer`}
     initial={{"--x": "100%"}}
     animate={{"--x": "-100%"}}
     transition={{repeat: Infinity,repeatType:"loop"}}
    >
        <span
        className="text-neutral-100 tracking-wide font-[15px] h-full w-full block relative linear-mask !text-center"
        >
        {textValue}
        </span>
    </motion.button>
 )
}


export const NavBarButtonComponent = ({textValue,mdhidden}:IButtonProps) => {

    return (
       <motion.button
        className={`px-6 py-2 !rounded-3xl relative radial-gradient h-[50px] w-[60%] m-2 !text-center !text-amber-50 cursor-pointer`}
        initial={{"--x": "100%"}}
        animate={{"--x": "-100%"}}
        transition={{repeat: Infinity,repeatType:"loop"}}
       >
           <span
           className="text-neutral-100 tracking-wide font-[15px] h-full w-full block relative linear-mask !text-center"
           >
           {textValue}
           </span>
       </motion.button>
    )
   }