import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Tobaacoo() {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>TOBACCO CONTROL</h1>

        <div className='flex my-8 justify-center items-center'>
          <img className='w-1/3 m-8' src="\images\tobacco6.jpg" alt="" />
          <p className='m-8 text-lg leading-loose'>
            Tobacco control is a global public health initiative aimed at reducing the prevalence of tobacco use and its associated health risks. Tobacco use, particularly smoking, is a leading cause of preventable death and disease worldwide. Efforts in tobacco control focus on various strategies to decrease tobacco consumption, protect non-smokers from secondhand smoke, and address the broader public health implications. Tobacco control involves various strategies and policies aimed at reducing tobacco use and its associated health consequences.
          </p>
        </div>

        <h3 className='text-3xl leading-loose font-bold uppercase underline'>Consequences</h3>
        <div className='my-8 flex flex-row-reverse justify-center items-center'>
          <img className='w-1/4 h-50 m-8' src="\images\WhatsApp Image 2024-02-04 at 11.42.16 AM.jpeg" alt="" />
          <div>
            <span className='text-s leading-loose text'>

              1. Tobacco use can lead to a plethora of health issues, both short-term and long-term. Short-term consequences include bad breath, stained teeth, and a persistent cough. However, the more severe and long-term effects are where things get concerning. Smoking is a major cause of various cancers, especially lung cancer. It also contributes to heart disease, respiratory problems like chronic obstructive pulmonary disease (COPD), and increases the risk of stroke.<br />

              2. Apart from the physical health impact, tobacco use can also take a toll on mental health. Nicotine addiction can lead to anxiety, irritability, and mood swings. The financial consequences of maintaining a tobacco habit can also add up significantly over time.<br />

              3. On a broader scale, the societal consequences are substantial. The healthcare burden related to tobacco-related illnesses places a strain on healthcare systems, and secondhand smoke affects non-smokers, leading to passive smoking-related health issues. The overall economic impact is staggering when considering healthcare costs, loss of productivity due to illness, and premature deaths. <br />
            </span>
          </div>
        </div>

        <h3 className='text-3xl leading-loose font-semibold uppercase underline'>Preventions</h3>
        <div className='my-8 flex justify-center items-center'>
          <img className='w-1/3 h-3/4 m-8' src="\images\tobacco4.jpg" alt="" />
          <div>
            <span className='text-s leading-loose'>
              1.  Prevention and Education: Public health campaigns and educational programs aim to increase awareness of the dangers of tobacco use, emphasizing the health risks associated with smoking and other forms of tobacco consumption.
              Targeted initiatives often focus on specific populations, such as youth, pregnant women, and vulnerable communities.<br />

              2. Tobacco Taxes and Pricing: Increasing taxes on tobacco products is an effective strategy to discourage consumption. Higher prices can reduce tobacco affordability, particularly among price-sensitive populations.
              Tax revenues generated can be directed towards funding tobacco control programs and public health initiatives.<br />

              3. Smoke-Free Policies: Implementing and enforcing smoke-free policies in public spaces, workplaces, and indoor environments help protect non-smokers from exposure to secondhand smoke.
              Such policies contribute to a cultural shift towards smoke-free norms.<br />
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Tobaacoo
