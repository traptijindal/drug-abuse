import React from 'react'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-full pb-4 mt-12">
      <hr className=" bg-black  mb-6" />
      <div className="mx-auto flex max-w-6xl flex-col items-start sm:space-x-32 md:flex-row">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-4xl font-bold">Locate Us</h1>
          <form
            action=""
            className="mt-2 inline-flex w-full items-center md:w-3/4"
          >
            <div className="formMap mt-4 sm:w-64 w-40">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28075.54023922432!2d77.85575095!3d28.405901000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ca6b2622913b1%3A0x911a6113e90ec604!2sBulandshahr%2C%20Uttar%20Pradesh%20203001!5e0!3m2!1sen!2sin!4v1706969183897!5m2!1sen!2sin"
                width=""
                height=""
                title="location"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">

              </iframe>
            </div>
          </form>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:gap-6 gap-2 md:mt-0 lg:w-3/4 lg:grid-cols-3">
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700 ">Quick Links</p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-gray-500">
              <NavLink className='hover:cursor-pointer' to=''>Lorem</NavLink>
              <NavLink className='hover:cursor-pointer' to=''>Lorem</NavLink>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700 ">
              About Us
            </p>
            <ul className="flex flex-col space-y-3 text-[14px] font-medium text-gray-500">
              <li>
                We believe in fostering a non-judgmental and compassionate environment to encourage open discussions and provide valuable insights. Together, we can make a positive impact and work towards a healthier and drug-free future.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
        <div className="inline-flex items-center">
          <img src="\images\WhatsApp Image 2024-02-04 at 12.06.58 PM.jpeg" className="h-12" alt="" />
          {/* <span className="ml-4 text-lg font-bold"></span> */}
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">
            © 2023 HEALVUE All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;