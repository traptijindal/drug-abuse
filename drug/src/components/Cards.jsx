import React from 'react'
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className="  w-full h-auto flex flex-wrap flex-row items-center justify-center bg-customWhite mt-12">

      <div className="sm:w-3/4 h-[560px] md:w-1/3 lg:w-1/4 w-full p-4 shadow-lg m-3 bg-white ">
        <div className=" overflow-hidden">
          <img className="h-[250px] w-full object-cover" src="\images\pills.avif" alt="" />
          <div className="p-4">
            <h3 className="text-xl  font-semibold mb-2 text-customblue">Drug Addiction</h3>

            <div className="flex items-center text-gray-600">

              <p>Drug addiction, substance use disorder, is a disease that affects a person's brain and behavior and leads to an inability to control the use of a legal or illegal drug</p>
            </div>
            <Link to="/drug-abuse">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 md:mt-7" >Read More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="sm:w-3/4 h-[560px] md:w-1/3 lg:w-1/4 w-full p-4 shadow-lg m-3 bg-white">
        <div className=" overflow-hidden">
          <img className="h-[250px] w-full object-cover" src="\images\c_6.jpg" alt="" />
          <div className="p-4">
            <h3 className="text-xl  font-semibold mb-2 text-customblue">Mental illness</h3>
            <div className="flex items-center text-gray-600 mb-2">

              <p>Mental illness, also called mental health disorders, refers to a wide range of mental health conditions — disorders that affect your mood, thinking and behavior.</p>
            </div>
            <Link to="/mental">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 md:mt-7">Read More</button>
            </Link>
          </div>
        </div>
      </div>


      <div className="sm:w-3/4 h-[560px] md:w-1/3 lg:w-1/4 w-full p-4 shadow-lg m-3 bg-white">
        <div className=" overflow-hidden">
          <img className="h-[250px] w-full object-cover" src="\images\toba.jpg" alt="" />
          <div className="p-4">
            <h3 className="text-xl  font-semibold mb-2 text-customblue">Smoking</h3>
            <div className="flex items-center text-gray-600 mb-2">

              <p>Tobacco has been around for centuries, but what we know about the health damage from smoking is much newer. </p>
            </div>
            <Link to="/tobacco">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 md:mt-12 mt-2">Read More</button>
            </Link>
          </div>
        </div>
      </div>

    </div>



  )
}

export default Cards
