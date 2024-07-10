import React from 'react'
import google from '../assets/image/Google.png';
import udemy from '../assets/image/udemy.webp';
import GIt_hub from '../assets/image/GIt_hub.jpg';
import evanto from '../assets/image/envanto.png';
import Binnance from '../assets/image/BInanance.png';


export default function Trusted_compnay() {
  return (
      <div className='container'>
           <h1 className='align'>Trusted By Many Company</h1>

           <div className='myLogo'>
               <img src={udemy} alt="udemay" className='logo'/>
               <img src={GIt_hub} alt="Github" className='logo'/>
               <img src={google} alt="BINANCE" className='logo google' />
               <img src={Binnance} alt="ENVATO" className='logo' />
           </div>

      </div>
  )
}
