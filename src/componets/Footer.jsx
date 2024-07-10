import React from 'react'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { FaGithub, FaInstagram } from 'react-icons/fa6'

export default function Footer() {

    const footer_item = [
        {
            item1:"Company",
            item2:"About",
            item3:'Features',
            item4:'Pricing',
            item5:'contact'
        },
        {
            item1:"Sister Concern",
            item2:"Dot Brackets",
            item3:'Dot Theme',
            item4:'Theme Brackets',
            item5:'Design BEE'
        },
        {
            item1:"Help",
            item2:"Customer Support",
            item3:'Delivery Detail',
            item4:'Terms & Conditions',
            item5:'Privacy Policy'
        },
        {
            item1:"Resources",
            item2:"Free eBooks",
            item3:'Development Tutorial',
            item4:'How to-Blog',
            item5:'Youtube Playlist'
        },

    ]
  return (
        <footer className='content'>
            <div className='container'>
                  
                  <div className='footer-head'>
                    <h2>Have any Questions in Mind <br/> Let's Discuss  Together</h2>     
                    <button className='btn'>Let's Talk</button>
                  </div>  

                  <hr/> 

                  <div className='Footer-content'>
                        <div className='Footer-sec-main footer-tohead'>
                            <h1>Sasiro.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                possimus impedit mollitia quisquam? Aperiam ut in a debitis 
                                itaque facilis, eligendi quidem quia.</p>
                            <span><FaTwitter/></span>
                            <span><FaFacebook/></span>
                            <span><FaInstagram/></span>
                            <span><FaGithub/></span>                            
                        </div>
                    {footer_item.map((item)=>(
                        <div className='Footer-section'>
                            <ul>
                                <li>{item.item1}</li>
                                <li className='none'>{item.item2}</li>
                                <li className='none'>{item.item3}</li>
                                <li className='none'>{item.item4}</li>
                                <li className='none'>{item.item5}</li> 
                            </ul>
                        </div>
                        ))}
                  </div>

               </div>
        </footer>
  )
}
