import React from 'react';
import Header from './Header';
import Footer from './Footer';

function About() {
  return (
    <>
      <Header />
      <div className='p-7'>
        <div className='flex justify-center m-10 items-center'>
          <div className="left text-6xl font-semibold mr-10">Ignite Awareness,
            <br />Illuminate Change</div>
          <div className="right"><img src="\images\doctor-helping-patient-during-rehabilitation.jpg" alt="" className='h-60' /></div>
        </div>
        <p>
          Archi, Bhavya, Trapti and Tanishka , founders of HealVue, have a personal connection to the challenges of drug abuse. Our diverse team consists of professionals, advocates, and individuals who have overcome or are currently facing the struggles of addiction. We bring a range of perspectives, expertise, and a shared commitment to making a positive impact. Community Forums: Engage in open and honest discussions with individuals who understand the complexities of drug abuse. Our forums provide a safe space for sharing experiences, asking questions, and offering support. Access a wealth of educational materials, articles, and expert advice to empower yourself or a loved one with knowledge about drug abuse, treatment options, and recovery. Join virtual support groups facilitated by experienced moderators. Connect with others on a similar journey, exchange coping strategies, and find encouragement to overcome challenges.<br />
          <span className='font-bold'>HealVue</span> is more than just a website; it's a movement. Join us in breaking the silence and reducing the stigma associated with drug abuse.<br />
          Together, let's build a community that supports, educates, and inspires change.<br />
          <span className='font-bold'>921-xxx <br />Join Our Community</span>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
