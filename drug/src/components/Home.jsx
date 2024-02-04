import React from 'react'
import Header from './Header'
import Carousal from './Carousal'
import Footer from './Footer'
import Faq from './FAQ'
import Cards from './Cards'
import Content from './Content'
import Acheivements from './Acheivements'




function Home() {
  return (
    <div>
    <Header/>
    <Carousal/>
    <Content/>
    
   <Cards/>
   <Acheivements/>
    <Faq/>
    <Footer/>
    </div>
  )
}

export default Home
