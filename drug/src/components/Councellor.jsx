import React from 'react'
import Header from './Header';
import Footer from './Footer';

function Councellor() {
  const data = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEhNX3QyKFr-rtiuuQ_z6Oq-wpDtHqQsqueI42dWcP_RpCU6_KZXXbf0gUQQAU9F4sLo&usqp=CAU",
      name: "Maya Rastogi",
      contact: "9992267456",
      location: " Amrapali Royal, Indirapuram, Ghaziabad, Uttar Pradesh ",
      experience: "5 years experience",
    },
    {
      id: 2,
      image: "https://www.centerformentalhealth.in/wp-content/uploads/2022/12/1Sneha-Deolankar.jpg",
      name: "Ankita Jindal",
      contact: "9233483432",
      location: "Chandpur Rd, Surya Nagar, Bulandshahr, Uttar Pradesh ",
      experience: "15 years experience",
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nQ8zf1Saz8qGDgFwtC-ugYqOB8l9uQBVJsIZHk-Dm1sOKeDQuGkuUbdyUbMK_UJWCJI&usqp=CAU",
      name: "Esha Awasthi",
      contact: "979783567",
      location: "18 I flr, Shanthala Nagar, Bengaluru, Karnataka ",
      experience: "9 years experience",
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-quVe4U24WDI7eBGRYxQRtrjjIcHFHp4fQ&usqp=CAU",
      name: "Shivani Gupta",
      contact: "9222483789",
      location: " Fergusson College Rd, Pune, Maharashtra ",
      experience: "6 years experience",
    },
    {
      id: 5,
      image: "https://www.theholisticliving.org.in/wp-content/uploads/2021/02/best_psychologist_in_Delhi_Shivani_Misri_Sadhoo.jpg",
      name: "Pragya Mittal",
      contact: "9219678432",
      location: "500, Gomti Nagar, Lucknow, Uttar Pradesh ",
      experience: "10 years experience",
    },
    {
      id: 6,
      image: "https://coachformind.com/wp-content/uploads/2021/11/IMG_2263-scaled-e1649253447942.jpg.webp",
      name: "Munawar Faruqi",
      contact: "92145811543",
      location: " 102, Patel Nagar, Dehradun, Uttarakhand ",
      experience: "7 years experience",
    },


  ]
  return (
    <>
      <Header />
      <h1 className="text-4xl font-bold text-center m-8">Our Best Counsellor</h1>
      <div className="w-full flex flex-wrap justify-center mt-12 gap-8 ">
        {data.map((counselor) => (
          <div
            key={counselor.id}
            className="overflow-hidden flex flex-col md:flex-row md:max-w-[560px] w-full p-4 border border-solid border-black rounded-xl shadow-lg shadow-slate-400 bg-blue-300"
          >
            <div className="mb-4 md:mb-0 md:mr-4">
              <img
                className="h-[200px] md:w-[300px] object-cover rounded-full mx-auto md:mx-0"
                src={counselor.image}
                alt=""
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2"> {counselor.name}</h3>
              <h3 className="text-xl font-semibold mb-2"> {counselor.experience}</h3>
              <h3 className="text-xl font-semibold mb-2"> {counselor.location}</h3>
              <h3 className="text-xl font-semibold mb-2"> {counselor.contact}</h3>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
export default Councellor