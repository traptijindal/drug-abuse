import React from 'react';
import Header from './Header';
import Footer from './Footer';

function About() {
  return (
    <>
      <Header />
      
      <div className='p-7'>
      <span className='flex justify-center text-5xl text-extrabold mb-7'>About Us</span>
       
        <div className='my-4'>
          <h1 className='text-2xl font-bold'>Who We Are</h1>
        </div>
        <div className='my-4'>
          <h1 className='text-2xl font-bold'>The Founders</h1>
          <p>ABCD, founders of HealVue, have a personal connection to the challenges of drug abuse. [Brief background on founders' experiences or motivations for starting the community.]</p>
        </div>
        <div className='my-4'>
          <h1 className='text-2xl font-bold'>Our Team</h1>
          <p>Our diverse team consists of professionals, advocates, and individuals who have overcome or are currently facing the struggles of addiction. We bring a range of perspectives, expertise, and a shared commitment to making a positive impact.</p>
        </div>
        <div className='my-4'>
          <h1 className='text-2xl font-bold'>What We Offer</h1>
          <p>Community Forums: Engage in open and honest discussions with individuals who understand the complexities of drug abuse. Our forums provide a safe space for sharing experiences, asking questions, and offering support.</p>
        </div>
        <div className='my-4'>
          <h1 className='text-2xl font-bold'>Resources</h1>
          <p>Access a wealth of educational materials, articles, and expert advice to empower yourself or a loved one with knowledge about drug abuse, treatment options, and recovery.</p>
        </div>
        <div className='my-4'>
          <h1 className='text-2xl font-bold'>Support Groups</h1>
          <p>Join virtual support groups facilitated by experienced moderators. Connect with others on a similar journey, exchange coping strategies, and find encouragement to overcome challenges.</p>
        </div>
        <div className='my-4'>
          <h1 className='text-2xl font-bold'>Our Values</h1>
          <p>
            <span className='font-bold'>Compassion:</span> We approach every interaction with empathy and understanding, recognizing that each person's journey is unique.
          </p>
          <p>
            <span className='font-bold'>Inclusivity:</span> Our community is inclusive and welcomes individuals from all backgrounds, regardless of where they are on their path to recovery.
          </p>
          <p>
            <span className='font-bold'>Respect:</span> We respect the diverse experiences and perspectives of our members, fostering a judgment-free environment.
          </p>
        </div>
        <div className='my-4'>
          <h1 className='text-2xl font-bold'>Get Involved</h1>
          <p>
            <span className='font-bold'>[Community Name]</span> is more than just a website; it's a movement. Join us in breaking the silence and reducing the stigma associated with drug abuse. [Provide information on how visitors can become members, contribute content, or participate in community events.]
          </p>
          <p>
            Together, let's build a community that supports, educates, and inspires change.
          </p>
          <p>
            <span className='font-bold'>[Contact Us] [Join Our Community]</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
