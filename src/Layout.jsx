import React from 'react'
import NavbarApp from './componets/NavbarApp'
import './styles/App.scss'
import Herosection from './componets/Herosection'
import Trusted_compnay from './componets/Trusted_compnay'
import ContentSection from './componets/ContentSection'
import Features from './componets/Features'
import Testimonial from './componets/Testimonial'
import Buisness from './componets/Buisness'
import About_Us from './componets/About_Us'
import Footer from './componets/Footer'
export default function Layout() {
  return (
 <>
      <NavbarApp/>
      <Herosection/>
      <Trusted_compnay/>
      <ContentSection/>
      <Features/>
      <Testimonial/>
      <Buisness/>
      <About_Us/>
      <Footer/>
 </>
  )
}
