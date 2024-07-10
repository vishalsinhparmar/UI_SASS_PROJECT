import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import Creative from '../assets/image/Creative.png'
import Digital from '../assets/image/Digital.png'
import ai_generated from '../assets/image/ai_generated.png'
import { GoArrowRight } from 'react-icons/go'

export default function ContentSection() {
    const mycard = [
       {
        img:Creative,
        heading:"Creative content",
        subDetail:`Lorem Ipsum is simplay dummy text of the pricing 
                    and typesetting industry Lorem ipsum has been 
                     the industry's started`

       },

       {
       img:Digital,
       heading:"Buisness Insights",
       subDetail:`Lorem Ipsum is simplay dummy text of the pricing
                   and typesetting industry Lorem ipsum has bee
                    the industry's started`,

      },
      {
        img:ai_generated,
        heading:"Digital Solution",
        subDetail:`Lorem Ipsum is simplay dummy text of the pricing 
                    and typesetting industry Lorem ipsum has been 
                     the industry's started`,
 
       }
    ]

  return (
      <div className='container'>
        <div className='content_head'>
         <h2>Services we provide that</h2>
         <h2>makes your life more easier than others</h2>  
      
         <p>Lorem Ipsum is simplay dummy text of the printing and typesetting industry. Lorem has<br/>
               been the industry's standard dummy text ever since the 1500s,</p>
        </div>

         <div className='card'>

        {mycard.map((item)=>(           
           <div className='card-contetnt'>

                <img src={item.img}/>
                <h3>{item.heading}</h3>
                <p>{item.subDetail}</p>
                
                     <GoArrowRight className='card-icon'/>
                     </div>
            ))}

         </div>      
      </div>


  )
}

