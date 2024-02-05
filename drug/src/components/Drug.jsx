import React from 'react'
import Header from './Header';
import Footer from './Footer';
import DrugVideo from './DrugVideo';

function Drug() {
  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        <h1 className='text-3xl sm:text-2xl md:text-4xl font-bold text-center'>DRUG ABUSE</h1>
        <div className='flex flex-col items-center my-8 sm:flex-row sm:justify-center sm:items-center'>
          {/* <img className='w-full sm:w-1/4 m-8' src="\images\drug1.jpg" alt="" /> */}
            <DrugVideo />
          <p className='m-8 text-lg sm:text-base leading-loose'>
            Drug abuse refers to the harmful or excessive use of substances, including legal prescription medications, over-the-counter drugs, and illegal substances, in a way that leads to physical and psychological dependence. It involves the use of these substances in a manner that deviates from prescribed or recommended doses, and it can have detrimental effects on an individual's health, well-being, relationships, and overall life. Drug abuse involves engaging in patterns of substance use that result in negative consequences for the individual. This may include using larger amounts than prescribed, using drugs more frequently, or using them for non-medical purposes.
          </p>
        </div>

        <h3 className='text-3xl leading-loose font-semibold uppercase underline text-center'>Commonly Abused Drugs Include</h3>
        <div className='my-8 flex flex-col items-center md:flex-row-reverse md:justify-center'>
          <img className='w-full sm:w-1/4 m-8' src="\images\drug_image.jpg" alt="" />
          <div className='text-s leading-loose'>
            <span>
              1. Alcohol: Excessive and regular consumption of alcohol can lead to dependence and a range of health problems, including liver damage, cardiovascular issues, and impaired cognitive function.<br />
              2. Prescription Medications: Some individuals misuse prescription drugs, such as opioids (e.g., oxycodone, morphine), benzodiazepines (e.g., diazepam, alprazolam), and stimulants (e.g., Adderall, Ritalin).<br />
              3. Marijuana (Cannabis): Cannabis is commonly abused for its psychoactive effects. It's important to note that while some places have legalized its recreational use, it can still be misused.<br />
              4. Methamphetamine: Methamphetamine is a potent central nervous system stimulant that can lead to increased energy, alertness, and euphoria. Long-term abuse can result in severe health issues.<br />
              5. Heroin: Heroin is an illegal opioid derived from morphine. It is highly addictive and can lead to physical and psychological dependence.
            </span>
          </div>
        </div>

        <h3 className='text-3xl leading-loose font-semibold uppercase underline text-center'>Consequences</h3>
        <div className='my-8 flex flex-col items-center md:flex-row'>
          <img className='w-full sm:w-1/4 m-8' src="\images\drug_image2.jpg" alt="" />
          <div className='text-s leading-loose'>
            <span>
              1. Physical Health: Chronic use of drugs can lead to a range of health problems, including organ damage, cardiovascular issues, respiratory problems, and infectious diseases.<br />
              2. Mental Health: Substance abuse can contribute to mental health disorders such as depression, anxiety, paranoia, and psychosis.<br />
              3. Social Consequences: Drug abuse can strain relationships with family and friends, lead to employment issues, and result in legal problems.<br />
              4. Legal Issues: Drug abuse often involves illegal substances, leading to legal consequences. Legal problems may include arrests, fines, and imprisonment, which can have long-lasting effects on an individual's life.<br />
              5. Financial Strain: Maintaining a drug habit can be expensive. The financial strain may lead to issues such as job loss, bankruptcy, or theft to support the addiction.<br />
            </span>
          </div>
        </div>

        <h3 className='text-3xl leading-loose font-semibold uppercase underline text-center'>Preventions</h3>
        <div className='my-8 flex flex-col items-center md:flex-row-reverse md:justify-center'>
          <img className='w-full sm:w-1/4 m-8' src="\images\drug4.jpg" alt="" />
          <div className='text-s leading-loose'>
            <span>
              1. Education and Awareness: Implement comprehensive drug education programs in schools and communities to inform individuals about the risks and consequences of drug abuse. <br />
              2. Early Intervention: Identify and address risk factors in individuals, such as a history of family substance abuse, mental health issues, or trauma. Provide support and intervention programs for at-risk populations, including youth and individuals with a history of substance abuse in their families.<br />
              3. Parental Involvement: Encourage open communication between parents and children to foster a supportive and understanding environment. Educate parents about the signs of drug abuse and equip them with tools to recognize and address potential issues early. <br />
              4. Workplace Prevention Programs: Implement workplace programs that provide education on substance abuse, offer employee assistance programs (EAPs), and promote a drug-free workplace culture. This can include employee wellness initiatives and resources for seeking help.
            </span>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Drug;