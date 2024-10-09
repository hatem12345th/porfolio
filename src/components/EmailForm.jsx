import Image from "next/image"


export const EmailForm = () => {
  return (
    <div className="">
        <form  className=" flex flex-col gap-2 ">
                  <div className="w-full flex gap-10 ">
                            <label >
                                <h1 className=" font-bold Fonts text-xl "> Your name  </h1>
                            <input type="text" placeholder="Name" 
                                className="bg-[#393E4680] w-72 h-16 rounded-2xl"
                            />
                            </label>


                            <label >
                                <h1 className=" font-bold Fonts text-xl "> Your email  </h1>
                            <input type="text" placeholder="Email" 
                                className="bg-[#393E4680] w-72 h-16 rounded-2xl"
                            />
                            </label>

                    </div>      
                    <label className="  " >
                    <h1 className=" font-bold Fonts text-xl ">Your Message  </h1>
                            <textarea type="text" placeholder="Message" 
                                className="bg-[#393E4680] w-[616px] h-64 rounded-2xl"
                            ></textarea>
                            </label>     



                            <button className="w-56 flex gap-2.5 h-12 Fonts font-bold text-xl bg-blue items-center justify-center rounded-[24px] ">
                            Send Message
                    <Image src={"/send.png"} 
            width={25}
            height={25}
            alt="ddd"
                className="mt-1"
          />

                    </button>
                 

        </form>
        <Image src={"/mail.png"} 
            width={80}
            height={60}
            alt="ddd"
                className=" ml-auto mr-11  mt-1  "
          />            

    </div>
  )
}
