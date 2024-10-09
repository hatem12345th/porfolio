"use client"

import { projectCategory, projects } from '@/constants'
import  { useState } from 'react'

const Projects = () => {

const [category,setCaegory] = useState("All")

  return (
    <div className='projects-bg h-full px-20 '>
        <h1 className='font-bold Fonts text-8xl '>
          My recent <span className='text-blue'> works </span>
        </h1>
        <section className=' w-full flex gap-2.5 py-10 '>
        {  projectCategory.map((item,index) => (
              <button
                key={item+index}
                className={`  w-40 h-12 rounded-3xl z-10 font-bold text-2xl ${category===item ? "bg-blue": "bg-[#393E4680] hover:bg-blue duration-100 transition-colors "}` }
              onClick={() => setCaegory(item)}
       >
                  {item}



              </button>

          ))

      }

       



      </section>

        <section className='grid grid-cols-3  gap-2.5 ' >
          {projects.map((item,index) => (
              <div 
                key={item+index}
              className=' h-[600px] rounded-2xl bg-[#393E46] Filter'>
                    <img
                      src='https://s3-alpha-sig.figma.com/img/0af8/e23c/d8af9f2bc81da5a4047ecdc800007d18?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WHfgqXVj0tJACGsKgBsUafdYIKIlQmImqKWOU-1zR-3UFL3yoD5KrSPfZupg6ZFtmrFeAlpkx7KtgmAcmkXSJ~S3yRO8wFXWLd2w9vj-j4KnMRiLMttbt2fOqY6hbKYqIXiALeHbMxSu~80DFv6tCnnB84XuC3hbRbqc8nLQ3Oy2Py5YDliAMtWwR524qYOESO0l4WuASMfKJFxCOrVBWEIbZCZjZd-cL-9ohhvbwQJob3jf6vJp6IGuReVf84llS8uJqQBBZvAxOFPGGoHWQUkbSOrXkZvsjF9Nv7HsDtJx10bBGXYr48je2VBJjJKPFV7B9PNK8ZSO~~3n0XPwwA__'
                      className='rounded-2xl'
                    /> 
                    lsssssssssss https://s3-alpha-sig.figma.com/img/0af8/e23c/d8af9f2bc81da5a4047ecdc800007d18?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WHfgqXVj0tJACGsKgBsUafdYIKIlQmImqKWOU-1zR-3UFL3yoD5KrSPfZupg6ZFtmrFeAlpkx7KtgmAcmkXSJ~S3yRO8wFXWLd2w9vj-j4KnMRiLMttbt2fOqY6hbKYqIXiALeHbMxSu~80DFv6tCnnB84XuC3hbRbqc8nLQ3Oy2Py5YDliAMtWwR524qYOESO0l4WuASMfKJFxCOrVBWEIbZCZjZd-cL-9ohhvbwQJob3jf6vJp6IGuReVf84llS8uJqQBBZvAxOFPGGoHWQUkbSOrXkZvsjF9Nv7HsDtJx10bBGXYr48je2VBJjJKPFV7B9PNK8ZSO~~3n0XPwwA__



              </div>


          ))}

        </section>



    </div>
  )
}










export default Projects