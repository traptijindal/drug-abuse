// import React, { useRef, useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import { FaPlay } from 'react-icons/fa'; 
// import { IoPause } from 'react-icons/io5'; 

// function Programs() {
//   const data = [
//     {
//       id: 1,
//       heading : "Poster Making",
//       video: "/images/WhatsApp Video 2024-02-04 at 9.55.32 PM.mp4",
//     },
//     {
//         id: 2,
//          heading: "Awareness",
//         video: "/images/WhatsApp Video 2024-02-05 at 1.20.48 PM.mp4",
//       },
//       {
//         id: 3,
//         heading : "Rallies",
//         video: "/images/WhatsApp Video 2024-02-05 at 1.20.40 PM.mp4",
//       },
//   ];

//   const videoRef = useRef();
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlay = () => {
//     videoRef.current.play();
//     setIsPlaying(true);
//   };

//   const handlePause = () => {
//     videoRef.current.pause();
//     setIsPlaying(false);
//   };

//   return (
//     <>
//       <Header />
//       <h1 className="text-4xl font-bold text-center mb-8">Our Best Counselor</h1>
//       <div className="bg-slate-50 relative">
 
//         {data.map((key , index) => (
//           <div key={index}>
//             <video className="h-26 " ref={videoRef}>
//               <source src={key.video} type="video/mp4" />
//             </video>

//             {!isPlaying && (
//               <div className="absolute bottom-4 left-44 flex items-center justify-center text-white">
//                 <button className="text-lg" onClick={handlePlay}>
//                   <FaPlay />
//                 </button>
//               </div>
//             )}

//             {isPlaying && (
//               <div className="absolute bottom-4 left-44 flex items-center justify-center text-white">
//                 <button className="text-lg" onClick={handlePause}>
//                   <IoPause />
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Programs;
import React, { useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaPlay } from 'react-icons/fa'; 
import { IoPause } from 'react-icons/io5'; 

function Programs() {
  const data = [
    {
      id: 1,
      heading: "Poster Making",
      video: "/images/WhatsApp Video 2024-02-05 at 1.35.38 PM.mp4",
    },
    {
      id: 2,
      heading: "Awareness",
      video: "/images/WhatsApp Video 2024-02-05 at 1.20.48 PM.mp4",
    },
    {
      id: 3,
      heading: "Rallies",
      video: "/images/WhatsApp Video 2024-02-05 at 1.20.40 PM.mp4",
    },
  ];

  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <Header />
      <h1 className="text-4xl font-bold text-center my-8">Our Best Programs</h1>
      <div className="bg-slate-50 relative p-4 md:p-8 flex">
        {data.map((program, index) => (
          <div key={index} className="mb-8 md:mb-12">
            <video className=" h-48 md:h-64 object-cover rounded-lg shadow-lg" ref={videoRef}>
              <source src={program.video} type="video/mp4" />
            </video>

            {!isPlaying && (
              <div className="absolute bottom-4 left-4 md:left-8 flex items-center justify-center text-black">
                <button className="text-lg" onClick={handlePlay}>
                  <FaPlay />
                </button>
              </div>
            )}

            {isPlaying && (
              <div className="absolute bottom-4 left-4 md:left-8 flex items-center justify-center text-black">
                <button className="text-lg" onClick={handlePause}>
                  <IoPause />
                </button>
              </div>
            )}

            <h2 className="text-2xl font-semibold mt-4">{program.heading}</h2>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Programs;
