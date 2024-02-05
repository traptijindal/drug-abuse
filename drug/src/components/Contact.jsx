import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-center items-center mt-5">
        <div className=" md:mr-8">
          <img src="/images/communty.jpg" alt="Community" className="rounded-md shadow-lg w-full md:w-[600px] h-auto md:flex md:justify-center" />
        </div>
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24 w-full">
          <p className="text-center text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Love to hear from you
          </p>
          <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-lg ">
            Got questions or feedback? We're here for you. Drop us a message,
            and we'll get back to you ASAP. Your satisfaction is our priority.
            Thanks for connecting with us!
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 justify-center items-center">

            <Link to="https://docs.google.com/forms/d/e/1FAIpQLScCtHAVyS9rvphP606CfxROKx1LZ0wAIT9YhRTCVXZ3k0LkUw/viewform?usp=sf_link">
              <button className='bg-black rounded-sm text-white p-2 text-lg md:w-56 sm:w-30 sm:ml-10'>
                Share Your Experience
              </button>
            </Link>
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLScHtn3vpR7H6AwlQR-4N1x_vFYKQmgSdPYwpdZiK0yZZ17m9A/viewform?usp=sf_link">
              <button className='bg-black rounded-sm text-white p-2 text-lg md:w-32 sm:w-20 '>
                Join Us
              </button>
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
