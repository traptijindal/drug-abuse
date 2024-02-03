import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import {Link } from 'react-router-dom' ;



const faqData = [
  {
    question: 'Is tobacco addictive?',
    answer: 'Yes. Once a person begins to smoke, particularly at a young age, the chances of becoming addicted are quite high. New smokers quickly develop tolerance to the initial ill effects, and if they enjoy the stimulant and pleasant effects, they may begin to smoke regularly.',
  },
  {
    question: 'What are the physical signs of abuse or addiction?',
    answer: 'The physical signs of abuse or addiction can vary depending on the person and the drug being abused.',
  },
  {
    question: 'What is drug addiction?',
    answer: 'Drug addiction is a complex, and often chronic, brain disease. It is characterized by drug craving, seeking, and use that can persist even in the face of devastating life consequences.',
  },
  {
    question: 'If a pregnant woman abuses drugs, does it affect the fetus?',
    answer: 'Many substances including alcohol, nicotine, and other drugs of abuse can have negative effects on the developing fetus because they are transferred to the fetus across the placenta.',
  },
];

function Faq() {
  // const history = useHistory();

  // const handleContactClick = () => {
    
  //   history.push('/contact');

  const [faqOpen, setFaqOpen] = useState(Array(faqData.length).fill(false));

  const toggleFaq = (index) => {
    setFaqOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <section className="mx-auto max-w-7xl mt-12 px-4 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-3xl font-bold h-24 leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions...
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-9">
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`cursor-pointer rounded-md border border-gray-400 transition-all duration-300 ${
                faqOpen[i] ? 'shadow-md' : ''
              }`}
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                onClick={() => toggleFaq(i)}
              >
                <span className="flex text-start text-lg font-semibold text-black">
                  {item.question}
                </span>
                {faqOpen[i] ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 md:block" />
                )}
              </button>
              {faqOpen[i] && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-500">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      
        
      </div>
    </section>
  );
}

export default Faq;
