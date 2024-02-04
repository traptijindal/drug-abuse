import React from 'react'
import Header from './Header'
import Carousal from './Carousal'
import Footer from './Footer'
import Faq from './FAQ'
import Cards from './Cards'
import Content from './Content'
import Acheivements from './Acheivements'
import { Link } from 'react-router-dom'




function Home() {
  return (
    <div>
      <Link to="https://mediafiles.botpress.cloud/0f4a7564-720b-475b-a00f-17b5e0676fe5/webchat/bot.html">
<button className="fixed bottom-7 right-7 p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-full w-16 h-16 text-3xl">
    💬 
</button>
</Link>
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
