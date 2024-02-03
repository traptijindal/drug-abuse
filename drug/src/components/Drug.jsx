import React from 'react'
import Header from './Header';
import Footer from './Footer';

function Drug() {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>DRUG ABUSE</h1>

        <div className='flex my-8'>
          <img className='w-1/3 h-96 m-8' src="\images\drug1.jpg" alt="" />
          <p className='w-2/3 h-96 m-8 text-2xl leading-loose'>
            Drug abuse refers to the harmful or excessive use of substances that can lead to physical and psychological dependence, as well as negative consequences for an individual's health, well-being, and social relationships. These substances can include legal prescription medications, over-the-counter drugs, and illegal substances.
          </p>
        </div>

        <h3 className='text-3xl leading-loose font-semibold uppercase underline'>Commonly abused drugs include</h3>
        <div className='my-8 flex flex-row-reverse justify-center text-center'>
          <img className='w-1/3 h-96 m-8' src="\images\drug2.jpg" alt="" />
          <div>
            <span className='text-xl leading-loose'>
              1. Alcohol: Excessive and regular consumption of alcohol can lead to dependence and a range of health problems, including liver damage, cardiovascular issues, and impaired cognitive function.<br />
              2. Prescription Medications: Some individuals misuse prescription drugs, such as opioids (e.g., oxycodone, morphine), benzodiazepines (e.g., diazepam, alprazolam), and stimulants (e.g., Adderall, Ritalin).<br />
            </span>
          </div>
        </div>

        <h3 className='text-3xl leading-loose font-bold uppercase underline'>Consequences</h3>
        <div className='my-8 flex'>
          <img className='w-1/3 h-50 m-8' src="\images\drug3.jpg" alt="" />
          <div>
            <span className='text-xl leading-loose text'>
              1. Physical Health: Chronic use of drugs can lead to a range of health problems, including organ damage, cardiovascular issues, respiratory problems, and infectious diseases.<br />
              2. Mental Health: Substance abuse can contribute to mental health disorders such as depression, anxiety, paranoia, and psychosis.<br />
              3. Social Consequences: Drug abuse can strain relationships with family and friends, lead to employment issues, and result in legal problems.<br />
            </span>
          </div>
        </div>

        <h3 className='text-3xl leading-loose font-semibold uppercase underline'>Preventions</h3>
        <div className='my-8 flex flex-row-reverse'>
          <img className='w-1/3 h-3/4 m-8' src="\images\drug4.jpg" alt="" />
          <div>
            <span className='text-xl leading-loose'>
              1. Education and Awareness: Implement comprehensive drug education programs in schools and communities to inform individuals about the risks and consequences of drug abuse. <br />
              2. Early Intervention: Identify and address risk factors in individuals, such as a history of family substance abuse, mental health issues, or trauma. Provide support and intervention programs for at-risk populations, including youth and individuals with a history of substance abuse in their families.<br />
              3. Parental Involvement: Encourage open communication between parents and children to foster a supportive and understanding environment. Educate parents about the signs of drug abuse and equip them with tools to recognize and address potential issues early.<br />
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Drug;