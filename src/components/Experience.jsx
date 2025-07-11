import React from "react";
import { experiences } from "../utils/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import Noise from "../helper/Noise";
import ExperienceCard from "./ExperienceCard";
import TextTrail from "../helper/TextTrail.jsx";
import CircularText from "../helper/CircularText.jsx";

function Experience() {
    return (
        <div
            id="experience"
            className="relative z-50 mt-12 lg:mt-24 border-y border-[var(--md-sys-color-surface-container-high)]"
        >
            {/* Section Heading */}
            <div className="flex justify-center my-6 lg:py-10">
                <div className="flex items-center">
                    <span className="w-25 h-[2px] bg-[var(--md-sys-color-inverse-primary)]"></span>
                    <span className="bg-[var(--md-sys-color-inverse-primary)] text-[var(--md-sys-color-on-surface)] text-xl p-2 px-5 rounded-md shadow-sm tracking-wider">
                        The Journey
                    </span>
                    <span className="w-25 h-[2px] bg-[var(--md-sys-color-inverse-primary)]"></span>
                </div>
            </div>

            <div className="py-6 lg:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Optional Animation Placeholder */}
                    <div className="flex justify-center items-start">
                        <div className="w-[400px] h-[400px] lg:h-[450px] rounded-2xl shadow-lg flex flex-col items-center justify-center relative overflow-hidden bg-[var(--md-sys-color-surface-container-highest)] text-[var(--md-sys-color-on-surface)]">                            
                            <CircularText
                                text="LEARN*DESIGN*CODE*CREATE*"
                                onHover="speedUp"
                                spinDuration={20}
                                className="custom-class"
                            />
                        </div>
                    </div>
                    {/* Experience Cards */}
                    <div className="flex flex-col gap-6">
                        {experiences.map((experience) => (
                            <ExperienceCard
                                key={experience.id}
                                experience={experience}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
