import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoPause } from "react-icons/io5";

const MentalVideo = () => {
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
            <div className="bg-slate-50 relative">
                <video className='h-26 w-full' ref={videoRef}>
                    <source src="\images\WhatsApp Video 2024-02-04 at 9.56.24 PM.mp4" />
                </video>

                {!isPlaying && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-black">
                        <button className="text-lg flex justify-center items-center" onClick={handlePlay}>
                            <FaPlay />
                        </button>
                    </div>
                )}

                {isPlaying && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center text-black">
                        <button className="text-lg flex justify-center items-center" onClick={handlePause}>
                            <IoPause />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default MentalVideo;

