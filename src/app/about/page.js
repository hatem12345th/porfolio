import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <main  className="py-24  px-40 flex justify-between items-start ">
        
<div className="flex flex-col gap-4   ">
<Image src={"/Vector 141 (1).png"} 
          width={75}
          height={46}
          />
       
        <h1 className="font-bold text-8xl  flex gap-8  "> About {" " }
          
            <span className="text-[#00ADB5] ">
            us
            </span> 
            <Image src={"/lightbulb.png"} 
            width={85}
            height={45}
            />           
        </h1> 
            <p className='w-[500px] h-40 Fonts text-lg font-normal '> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis....
            </p>

            <Image src={"/Vector 186.png"} 
            width={125}
            height={180.89}
              className='ml-auto mr-32'
            /> 
 

      </div>
             
     
      <div className="relative "> 
      <Image src={"/doodle items (1).png"} 
            width={665.33}
            height={514}
            alt="ddd"

          />
           <Image src={"/Group 62.png"} 
            width={400}
            height={472.65}
            alt="ddd"
                className="absolute z-50 top-[170px]   left-24 "
          />
               <Image src={"/Ellipse 3.png"} 
            width={348}
            height={24}
            alt="ddd"
                className=" absolute left-36  "
          />


      </div>



      
     







    </main>



  )
}

export default About