import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row">
        <div className="md:w-[60%] md:mr-8">
          <img src="/images/communty.jpg" alt="Community" className="rounded-md shadow-lg w-full md:w-[600px] h-auto"/>
        </div>
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24 w-full md:w-[30%]">
          <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Love to hear from you
          </p>
          <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
            Got questions or feedback? We're here for you. Drop us a message,
            and we'll get back to you ASAP. Your satisfaction is our priority.
            Thanks for connecting with us!
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdcuYRvbRkHNfH1A8hbvGLAjXh2W6VkmUAH9D2Pz19cgYRYWg/viewform?usp=sf_link">
    <button className='bg-black rounded-sm text-white p-2 text-lg'>
      Join Us
    </button>
  </Link>
  <Link to="https://forms.gle/N2LvkDTQvVL8jjnT8">
    <button className='bg-black rounded-sm text-white p-2 text-lg'>
      Share Your Experience
    </button>
  </Link>
  
</div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
{/* <Link to="https://forms.gle/N2LvkDTQvVL8jjnT8">
<button className='bg-black rounded-sm  text-white p-2 text-lg w-[200px] md:w-full lg:w-[400px] '>
  Share Your Experience
</button>
</Link>
<Link to="https://docs.google.com/forms/d/e/1FAIpQLSdcuYRvbRkHNfH1A8hbvGLAjXh2W6VkmUAH9D2Pz19cgYRYWg/viewform?usp=sf_link">
<button className='bg-black rounded-sm  text-white p-2 text-lg w-[200px] md:w-full lg:w-[400px] '>
  Join Us
</button>
</Link> */}