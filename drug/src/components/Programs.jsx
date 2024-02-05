import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoPause } from "react-icons/io5";
import Header from "./Header";
import Footer from "./Footer";

const Programs = () => {
    const videoRef1 = useRef();
    const videoRef2 = useRef();
    const videoRef3 = useRef();

    const [isPlaying1, setIsPlaying1] = useState(false);
    const [isPlaying2, setIsPlaying2] = useState(false);
    const [isPlaying3, setIsPlaying3] = useState(false);

    const handlePlay = (videoRef, setIsPlaying) => {
        videoRef.current.play();
        setIsPlaying(true);
    };

    const handlePause = (videoRef, setIsPlaying) => {
        videoRef.current.pause();
        setIsPlaying(false);
    };

    return (
        <>
            <Header />
            <h1 className="text-5xl font-bold flex justify-center items-center mt-10">OUR PROGRAMS</h1>
            <div className="bg-slate-50 relative flex justify-center items-center m-20">
                <video className="w-[70%]" ref={videoRef1}>
                    <source src="\images\WhatsApp Video 2024-02-05 at 4.00.16 PM.mp4" />
                </video>

                {!isPlaying1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white">
                        <button
                            className="text-lg"
                            onClick={() => handlePlay(videoRef1, setIsPlaying1)}
                        >
                            <FaPlay />
                        </button>
                    </div>
                )}

                {isPlaying1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white">
                        <button
                            className="text-lg"
                            onClick={() => handlePause(videoRef1, setIsPlaying1)}
                        >
                            <IoPause />
                        </button>
                    </div>
                )}
            </div>
            <div className="bg-slate-50 relative flex justify-center items-center m-20">
                <video className="w-[70%]" ref={videoRef2}>
                    <source src="\images\WhatsApp Video 2024-02-05 at 2.12.38 PM.mp4" />
                </video>

                {!isPlaying2 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white">
                        <button
                            className="text-lg"
                            onClick={() => handlePlay(videoRef2, setIsPlaying2)}
                        >
                            <FaPlay />
                        </button>
                    </div>
                )}

                {isPlaying2 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white">
                        <button
                            className="text-lg"
                            onClick={() => handlePause(videoRef2, setIsPlaying2)}
                        >
                            <IoPause />
                        </button>
                    </div>
                )}
            </div>
            <div className="bg-slate-50 relative flex justify-center items-center m-20">
                <video className="w-[70%]" ref={videoRef3}>
                    <source src="\images\WhatsApp Video 2024-02-05 at 2.12.13 PM.mp4" />
                </video>

                {!isPlaying3 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white">
                        <button
                            className="text-lg"
                            onClick={() => handlePlay(videoRef3, setIsPlaying3)}
                        >
                            <FaPlay />
                        </button>
                    </div>
                )}

                {isPlaying3 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-white">
                        <button
                            className="text-lg "
                            onClick={() => handlePause(videoRef3, setIsPlaying3)}
                        >
                            <IoPause />
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Programs;
