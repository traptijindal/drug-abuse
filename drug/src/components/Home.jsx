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
    <div style={{ backgroundColor: ' #F2FFE9' }}>
<button class="fixed bottom-7 right-7 p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-full w-16 h-16 text-3xl">
    💬 
</button>

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
