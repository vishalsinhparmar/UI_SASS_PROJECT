import React from 'react'
import { BiHeading } from 'react-icons/bi';
import User from '../assets/image/user_research..png';
import Ai_comp from '../assets/image/BuisnessInsight.jpg';
import Compatative from '../assets/image/Compatative.png';



export default function Features() {
    const features = [
        {  
           img:User,
           features_head:"User Research",
           content:`Lorem ipsum dolor sit, amet consectetur adipisicing Mollitia enim doloremque  
                              aperiam rerum culpa sapiente dolorem 
                                     `
        },
        {  
            className:"md-class",
            img:Ai_comp,
            features_head:"AI Content Generator",
            content:`Lorem ipsum dolor sit, amet consectetur adipisicing Mollitia enim doloremque  
                               aperiam rerum culpa sapiente dolorem 
                                      `
         },
         {  
            img:Compatative,
            features_head:"Competitive Analysis",
            content:`Lorem ipsum dolor sit, amet consectetur adipisicing Mollitia enim doloremque  
                               aperiam rerum culpa sapiente dolorem 
                                      `
         }
    ]
  return (
       <div className='container feature'>
            <div className='iteam'>
                <h1>Get the based  result
                    and make more revenue
                    to applying these Features                  
                   </h1>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Mollitia enim doloremque aperiam rerum culpa sapiente dolorem 
                     eum inventore a fugit nam aut nostrum facere hic, saepe nisi
                      nihil amet modi!  loreum inventore a fugit nam aut nostrum
                      Lorem ipsum dolor sit, amet consectetur adipisicing consectetur adipisicing elit </p>
                      <button>Start Free Trial</button>
            </div>

            <div className='lg-content'> 
                  {features.map((item)=>(                
                    <div className='sm_card'>
                        
                    <img src={item.img} />
                    <h2>{item.features_head}</h2>
                    <p>{item.content}</p>
                  </div>
                  ))}

            </div>
       </div>
  )
}
