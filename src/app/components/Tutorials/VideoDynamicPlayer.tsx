"use client";
import { tutorials } from "@/app/sources/tutorials";
import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import YouTube from "react-youtube";

export default function VideoDynamicPlayer() {
    const [selectedTutorial, setSelectedTutorial] = useState(0);

    const opts = {
        height: '100%',
        width: '100%',
    };

    return (
        <div className="flex flex-col gap-8 max-w-[1536px] mx-auto px-4 py-8 sm:py-16 lg:py-48">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <YouTube
                    className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden"
                    videoId={tutorials[selectedTutorial].player_id}
                    opts={opts}
                />
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tutorials.map((tutorial, index) => (
                    <li
                        key={index}
                        onClick={() => setSelectedTutorial(index)}
                        className={`cursor-pointer p-4 gap-4 bg-primary-400 rounded-md hover:bg-primary-300 active:scale-95 transition-all text-white text-xl flex items-center justify-between ${selectedTutorial === index ? 'bg-white hover:!bg-primary-50 !text-primary-400' : ''}`}
                    >
                        <span>{tutorial.title}</span>
                        {selectedTutorial === index ? <FaPause className="size-4" /> :  <FaPlay className="size-4" />}
                    </li>
                ))}
            </ul>
        </div>
    );
}
