import React from "react";
import { skillsData } from "../utils/skills";
import { skillsImage } from "../utils/skill-image";
import Marquee from "react-fast-marquee";

function SkillsSection() {
    return (
        <div
            id="skills"
            className="relative z-50 border-t mb-18 lg:mb-20 border-[var(--md-sys-color-surface-container-high)]"
        >
            <div className="w-[100px] h-[100px] bg-[var(--md-sys-color-primary)] rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-[var(--md-sys-color-surface-container-high)] to-transparent w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center mt-5">
                    <span className="w-24 h-[2px] bg-[var(--md-sys-color-inverse-primary)]"></span>
                    <span className="bg-[var(--md-sys-color-inverse-primary)] text-[var(--md-sys-color-on-surface)] w-fit p-2 px-5 text-xl rounded-md">
                        Skills
                    </span>
                    <span className="w-24 h-[2px] bg-[var(--md-sys-color-inverse-primary)]"></span>
                </div>
            </div>

            <div className="w-full my-12">
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
                    {skillsData.map((skill, id) => (
                        <div
                            className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                            key={id}
                        >
                            <div className="h-full w-full rounded-lg border border-[var(--md-sys-color-outline)] bg-[var(--md-sys-color-surface-container)] shadow-[var(--md-sys-color-shadow)] group-hover:border-[var(--md-sys-color-primary)] transition-all duration-500">
                                <div className="flex -translate-y-[1px] justify-center">
                                    <div className="w-3/4">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--md-sys-color-primary)] to-transparent" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-3 p-6">
                                    <div className="h-8 sm:h-10">
                                        <img
                                            src={skillsImage(skill)}
                                            alt={skill}
                                            width={40}
                                            height={40}
                                            className="h-full w-auto drop-shadow-[0_0_20px_var(--md-sys-color-primary-container)]"
                                        />
                                    </div>
                                    <p className="text-[var(--md-sys-color-on-surface)] text-sm sm:text-lg">
                                        {skill}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

export default SkillsSection;
