import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoPause } from "react-icons/io5";

const DrugVideo = () => {
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
                    <source src="\images\WhatsApp Video 2024-02-05 at 11.45.50 AM.mp4" />
                </video>

                {!isPlaying && (
                    <div className="absolute bottom-4 left-44 flex items-center justify-center text-white ">
                        <button className="text-lg " onClick={handlePlay}>
                            <FaPlay />
                        </button>
                    </div>
                )}

                {isPlaying && (
                    <div className="absolute bottom-4 left-44 flex items-center justify-center text-white">
                        <button className="text-lg" onClick={handlePause}>
                            <IoPause />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default DrugVideo;

