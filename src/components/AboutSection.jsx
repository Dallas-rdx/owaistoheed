import React from "react";
import { personalData } from "../utils/personal-data.js";

function AboutSection() {
    return (
        <div id="about" className="my-12 lg:my-16 relative">
            {/* Label on the side */}
            <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                <span className="bg-[var(--md-sys-color-inverse-primary)] text-[var(--md-sys-color-on-surface)] w-fit rotate-90 p-2 px-5 text-xl rounded-md">
                    ABOUT ME
                </span>
                <span className="h-36 w-[2px] bg-[var(--md-sys-color-inverse-primary)]"></span>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Left Text Column */}
                <div className="order-2 lg:order-1">
                    <p className="font-medium mb-5 text-[var(--md-sys-color-primary)] text-xl uppercase">
                        Who I am?
                    </p>
                    <p className="text-[var(--md-sys-color-on-surface)] text-sm lg:text-lg">
                        {personalData.description}
                    </p>
                </div>

                {/* Right Image Column */}
                <div className="flex justify-center order-1 lg:order-2">
                    <img
                        src={personalData.profile}
                        width={280}
                        height={280}
                        alt="Apurva Kumar"
                        className="rounded-lg w-[280px] h-[280px] object-cover transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer border border-[var(--md-sys-color-outline-variant)]"
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
