import React from 'react'
import hero_image from '../assets/image/hero_image.png'
export default function Herosection() {
  return (

     <section className='container'>
      <div className='sectionStart'>
            <section className='LeftsideApp'>
                  <h1 className='heroFont'>Best Tools That <br/>Help  your Business To<br/>Upgrade The Next Level</h1>
                   <p className='herotext'>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has 
                     been the  industry's standard dummy text ever since the 1500s,
                       </p>
                <button className='btn1' >Start Free Trial </button>
                <button className='btn'>View Live Demo</button>

            </section>
           
            {/* section 2 for image */}

            <section>
              <img src={hero_image} className='heroImage'/>
            </section>
      </div>    
     </section>
  )
}
