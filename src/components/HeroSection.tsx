import React from "react";
import { WarpBackground } from "./ui/warp-background";

const HeroSection: React.FC = () => {
    return (
        // <div
        //     className="relative min-h-screen flex items-center justify-center text-white px-4"
        //     style={{
        //         // backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80")',
        //         backgroundSize: "cover",
        //         backgroundPosition: "center",
        //     }}
        // >
        // {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> */}
        <>
            <WarpBackground
                className="relative min-h-screen flex items-center justify-center text-white border-none"
                gridColor="rgba(86, 86, 86, 0.8)"
                perspective={200}
            >
                <div className="relative z-10 text-center">
                    <h1
                        className="text-5xl md:text-7xl font-bold mb-4"
                        style={{ fontFamily: '"Sixtyfour Convergence", serif' }}
                    >
                        CHRYSALIS
                    </h1>
                    <div className="flex flex-col md:flex-row gap-4 justify-center mt-10 -mb-10">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-colors">
                            Explore Events
                        </button>
                        <button className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-full transition-colors">
                            View Schedule
                        </button>
                    </div>
                </div>
            </WarpBackground>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black dark:from-background"></div>
        </>
        // </div>
    );
};

export default HeroSection;
