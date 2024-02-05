import React from 'react'
import Footer from './Footer'
import Header from './Header'
import MentalVideo from './MentalVideo'

function Mental() {
  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        <h1 className='text-3xl sm:text-2xl md:text-4xl font-bold text-center'>MENTAL ILLNESS</h1>

        <div className='flex flex-col items-center my-8 sm:flex-row sm:justify-center sm:items-center'>
          {/* <img className='w-full sm:w-1/4 m-8' src="\images\c_1.jpg" alt="" /> */}
          <MentalVideo/>
          <p className='m-8 text-lg sm:text-base leading-loose'>
            Mental illness, also known as mental health disorders, refers to a wide range of conditions that affect a person's thoughts, emotions, behavior, and overall well-being. Mental illnesses can be mild or severe, temporary or chronic, and they can impact anyone regardless of age, gender, race, or socioeconomic status. Some common types of mental illnesses include depression, anxiety disorders, bipolar disorder, schizophrenia, and eating disorders.
          </p>
        </div>

        <h3 className='text-3xl leading-loose font-semibold uppercase underline text-center'>Causes</h3>
        <div className='my-8 flex flex-col items-center sm:flex-row-reverse sm:justify-center sm:text-left '>
          <img className='w-full sm:w-1/4 m-8' src="\images\c_6.jpg" alt="" />
          <div className='text-s leading-loose'>
            <span>
              1. Mental illnesses often result from a combination of genetic, biological, environmental, and psychological factors. Trauma, stress, and a family history of mental health disorders can contribute to the development of mental illnesses.<br />

              2. Symptoms: Symptoms vary depending on the specific mental health disorder but may include changes in mood, behavior, cognition, and social interactions. Physical symptoms such as changes in sleep patterns, appetite, and energy levels may also be present.<br />

              3. Treatment: Treatment options include psychotherapy (counseling or talk therapy), medication, support groups, and lifestyle changes. In severe cases, hospitalization may be necessary for stabilization and safety.<br />

              4. Stigma and Awareness: Stigma surrounding mental illness can contribute to discrimination and reluctance to seek help. Increased awareness and education are essential to combat stigma and promote understanding of mental health issues.<br />
            </span>
          </div>
        </div>

        <h3 className='text-3xl leading-loose font-semibold uppercase underline text-center'>Consequences</h3>
        <div className='my-8 flex flex-col items-center sm:flex-row sm:justify-center'>
          <img className='w-full sm:w-1/3 h-50 m-8' src="\images\drug3.jpg" alt="" />
          <div className='text-s leading-loose'>
            <span>
              1. Impaired Daily Functioning: Mental health disorders can affect a person's ability to perform daily activities, such as going to work or school, maintaining personal hygiene, and managing household responsibilities.<br />

              2. Substance Abuse: Mental illness can strain relationships with family, friends, and colleagues. Changes in mood, behavior, and communication patterns may contribute to misunderstandings and conflict.<br />

              3. Relationship Challenges: Mental health and physical health are interconnected. Chronic stress, anxiety, and depression can contribute to physical health issues, such as cardiovascular problems, digestive disorders, and weakened immune function.<br />

              4. Physical Health Complications: Some individuals may turn to substance abuse as a way to cope with their mental health symptoms, leading to additional complications and the risk of developing a co-occurring substance use disorder.<br />
            </span>
          </div>
        </div>

        <h3 className='text-3xl leading-loose font-semibold uppercase underline text-center'>Preventions</h3>
        <div className='my-8 flex flex-col items-center sm:flex-row-reverse sm:justify-center'>
          <img className='w-full sm:w-1/3 h-3/4 m-8' src="\images\mental2.avif" alt="" />
          <div className='text-s leading-loose'>
            <span>
              1. Build Strong Support Networks: Cultivate positive relationships with family, friends, and colleagues. A strong support system can provide emotional assistance during challenging times.<br />

              2. Develop Coping Skills: Learn and practice healthy coping mechanisms for stress, such as mindfulness, relaxation techniques, and effective problem-solving.<br />

              3. Maintain a Healthy Lifestyle: Prioritize regular physical activity, a balanced diet, and sufficient sleep. These factors contribute to overall well-being and can positively impact mental health.<br />

              4. Manage Stress: Identify and manage stressors in life. This may involve setting realistic goals, delegating tasks, and taking breaks when needed.<br />
            </span>
          </div>
        </div>

      </div >
      <Footer />
    </>
  )
}

export default Mental
