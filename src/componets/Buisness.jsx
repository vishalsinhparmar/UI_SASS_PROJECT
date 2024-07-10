import React from 'react'
import Switch from 'react-switch';
import { ImCheckmark, ImStack } from "react-icons/im";
export default function Buisness() {
    const Card_detail = [
        {
            plan:"Basic plan",
            month:"10/mth",
            bill:'Billed annually',
            feature1:'Access to all basic features',
            feature2:'Basic reporting and analytics',
            feature3:'Basic reporting and analytics',
            feature4:'20GB individual data each user',
            feature5:'Basic chat and email support',
        },
        {
            plan:"Business plan",
            month:"20/mth",
            bill:'Billed annually',
            feature1:'200+ integrations',
            feature2:'Advanced reporting and analytics',
            feature3:'Up to 20 individual users',
            feature4:'40GB individual data each user',
            feature5:'Priority chat and email support',
        },
        {
            plan:"Enterprise plan",
            month:"40/mth",
            bill:'Billed annually',
            feature1:'Advanced custom fields',
            feature2:'Audit log and data history',
            feature3:'Unlimited  individual users',
            feature4:'Unlimited individual data',
            feature5:'Personalised+priotity services',
        }
      
    ]
  return (
         <div className='container'>
              
              <div className='buisness'>
                 <h1>Best Solution for your business</h1>
                 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, alias 
                    quo fugiat voluptatum dolore ipsa fuga a molestias, explicabo iusto 
                    autem, ad veritatis recusandae. Accusantium quia illo excepturi in fuga.</p>

                    <p className='pay-detail'>  Pay Monthly
                       <span> <Switch/></span>
                         Pay yearly
                    </p>
              </div>

              <div className='payment-card'>
                {Card_detail.map((item)=>(
                  <div className='card-detail'>
                       <div className='md-card'>
                          <span className='imstack'><ImStack/></span>
                          <p>{item.plan}</p>
                          <h1>&#128178;{item.month}</h1>
                          <p>{item.bill}</p>
                       </div>

                       <div className='features'>
                        <p> <span><ImCheckmark className='checkmark'/></span>{item.feature1}</p>
                        <p> <span><ImCheckmark className='checkmark'/></span>{item.feature2}</p>
                        <p> <span><ImCheckmark className='checkmark'/></span>{item.feature3}</p>
                        <p> <span><ImCheckmark className='checkmark'/></span>{item.feature4}</p>
                        <p> <span><ImCheckmark className='checkmark'/></span>{item.feature5}</p>
                        
                        <button className='btn'>Get started</button>
                       </div>
                  </div>
                     ))} 
               
                

              </div>

         </div>
   
      )
}
