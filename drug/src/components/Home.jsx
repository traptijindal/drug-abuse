import React from 'react'
import Header from './Header'
import Carousal from './Carousal'
import Footer from './Footer'
import Faq from './FAQ'
import Cards from './Cards'
import Content from './Content'




function Home() {
  return (
    <div>
    <Header/>
    <Carousal/>
    <Content/>
   <Cards/>
    <Faq/>
    <Footer/>
    </div>
  )
}

export default Home
