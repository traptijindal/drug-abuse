import { ChevronRight } from 'lucide-react'
import React from 'react'

function  Footer()  {
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
              <a className='hover:cursor-pointer' href='https://www.akgec.ac.in/aicte-approval-letters/'>AICTE Approval Letters</a>
              <a className='hover:cursor-pointer' href='https://www.akgec.ac.in/nirf-data-for-ranking-2023/'>NIRF Data for Ranking 2023</a>
              <a className='hover:cursor-pointer' href='https://www.akgec.ac.in/mandatory-disclosure/'>Mandatory Disclosure</a>
              <a className='hover:cursor-pointer' href='https://www.akgec.ac.in/grievance-committee/'>Grievance Committee</a>
              <a className='hover:cursor-pointer' href='https://www.akgec.ac.in/mba-admission-2023-25/'>AKGIM-MBA Admission</a>
              
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <p className="mb-6 text-lg font-semibold text-gray-700 ">
              About AKGU
            </p>
            <ul className="flex flex-col space-y-3 text-[14px] font-medium text-gray-500">
              <li>
                Ajay Kumar Garg Engineering University (AKGU) offers many
                under graduate course in  engineering branches, two
                year post graduate M.Tech course in four engineering branches
                and two year post graduate MCA course.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
        <div className="inline-flex items-center">
          <img
            src="https://www.akgec.ac.in/wp-content/themes/twentysixteen/img/AKGEC_1_0.png"
            className="h-10"
            alt="AKGU Logo"
          />
          <span className="ml-4 text-lg font-bold">AKGU</span>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">
            © 2023 AKGU All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;