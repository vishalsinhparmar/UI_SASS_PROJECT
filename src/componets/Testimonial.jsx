import React from 'react'
import Compatative from '../assets/image/Testimonial_person.png';

export default function Testimonial() {
  return (
      <div className='container '>
        <main className='Testimonial'>
           <div className='mytestimonial'>
                 <h1>Very Impressive job they <br/>have done</h1>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
                    Lorem Ipsum has been the industry's standard dummy text eve since the </p>
                    
                    <h3>Thomas Edison</h3>
                    <p>CEO,Company Name</p>
                    <hr />   <hr />   <hr />
               

           </div>
                
           <div className='Ceo-image'>
                <img src={Compatative}/>
           </div>
           </main>
      </div>
  )
}
