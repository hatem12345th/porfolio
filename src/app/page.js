import { MoveDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="py-20  px-28 flex justify-between items-start ">
      
      <div className="flex gap-4  mt-16 ">
          <Image src={"/Vector 187.png"} 
            width={95}
            height={220}
            alt="ddd"
            className=" glassmorphism2 mt-5 "
          />
        <h1 className="font-bold text-8xl   "> CREATIVE UI
          <br/>
            <span className="text-[#00ADB5]">
            DESIGNER
            </span>
            <div className="text-xl flex gap-6 mt-12 ">
                    <button className="w-36 h-12 bg-[#00ADB5] rounded-[24px] ">
                      Hire me
                    </button>
                    <button className="w-56 flex gap-2.5 h-12 Fonts bg-[#393E46BF] items-center justify-center rounded-[24px] ">
                    Download CV 
                    <Image src={"/download.png"} 
            width={24}
            height={24}
            alt="ddd"

          />

                    </button>
              </div>    
        </h1> 
          
       
      </div>
             
     
      <div className="relative"> 
      <Image src={"/doodles mixed round (1).png"} 
            width={514}
            height={514}
            alt="ddd"

          />
           <Image src={"/Group 2345 (1).png"} 
            width={400}
            height={472.65}
            alt="ddd"
                className="absolute z-50 top-[155px]"
          />

<Image src={"/Ellipse 3.png"} 
            width={348}
            height={24}
            alt="ddd"
                className=" absolute  left-1 "
          />

      </div>



      
     


    </main>
  );
}
