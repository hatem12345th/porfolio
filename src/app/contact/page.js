import { EmailForm } from '@/components/EmailForm'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
      <section className='flex px-28  items-center '>
            <div className='w-[60%] mt-20 '>
                  <h1 className='text-8xl Fonts font-bold '>                       Got a project in 
                        <br></br>
                      <span className='text-blue'>  mind?  </span>
                  </h1>                      

                  <div className='flex px-10  items-start gap-4 justify-start '>
                    <Image  src={"/Vector 186 (1).png"}
                      width={150.72}
                      height={169.98}
                      className='mt-16 '
                    
                    />
                        <Image  src={"/Group 2372.png"}
                      width={255.37}
                      height={348}
                    
                    />


                  </div>





            </div>

            <div className='w-[40%] '>

              <Image src={"/keyboard.png"}
            width={140}
            height={64}
/>

          <EmailForm />






            </div>

      </section>



  )
}

export default Contact