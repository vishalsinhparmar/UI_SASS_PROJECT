import React from 'react'

export default function About_Us() {
  const Accordian = [
    {
      Accordian_detail:"1. Do you have attached easy documentation on this?",
      sign:"+"
    },
    {
      Accordian_detail:"2. Do you have using auto layout on the Design?",
      sign:"+"
    },
    {
      Accordian_detail:"3. Do you have attached easy documentation on this?",
      sign:"+"
    },
    {
      Accordian_detail:"4. How much month you will support?",
      sign:"+"
    },
    {
      Accordian_detail:"5. Are you provinding free support?",
      sign:"+"
    },
    {
      Accordian_detail:"6. Can i use this in commercial?",
      sign:"+"
    },  
    {
      Accordian_detail:"7. What service you will provide?",
      sign:"+"
    },  

  ]
  return (
  <div className='container'>
    <div className='about'>
    <h1>Probably you want<br/>to ask sometimes about us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda 
        nulla, quidem fuga ex mollitia, expedita facere tempora aspernatur sed dolores quam saepe? Ullam 
       </p>
        </div>

        <div className='Accordian'>
          {Accordian.map((item)=>(
           <div className='Accordian_detail'>
                  <h3>{item.Accordian_detail}<span>{item.sign}</span></h3>
              
           </div>
           ))}
        </div>
  </div>
  )
}
