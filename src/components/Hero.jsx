import React from "react";
import { personalData } from "../utils/personal-data.js";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiX } from "react-icons/si";

import SelfCode from "./SelfCode.jsx";
import "@material/web/button/filled-tonal-button.js";
import "@material/web/button/text-button.js";
function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
            <img
                src="/hero.svg"
                alt="Hero"
                width={1572}
                height={795}
                className="absolute -top-[98px] -z-10"
            />

            <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
                <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
                    <h1 className="text-3xl font-bold leading-10 md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem] text-on-bg">
                        Hello, <br />
                        This is{" "}
                        <span className="text-primary">
                            {personalData.name}
                        </span>
                        {` , Welcome to My `}
                        <span className="text-tertiary">{"Portfolio"}</span>.
                    </h1>

                    {/* SOCIAL ICONS */}
                    <div className="my-12 flex items-center gap-5">
                        <a
                            href={personalData.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all social-icon hover:scale-125 duration-300"
                        >
                            <BsGithub size={30} />
                        </a>
                        <a
                            href={personalData.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all social-icon hover:scale-125 duration-300"
                        >
                            <BsLinkedin size={30} />
                        </a>
                        <a
                            href={personalData.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all social-icon hover:scale-125 duration-300"
                        >
                            <FaInstagram size={30} />
                        </a>
                       
                        <a
                            href={personalData.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all social-icon hover:scale-125 duration-300"
                        >
                            <SiX size={30} />
                        </a>
                    </div>

                    {/* CONTACT & RESUME BUTTONS */}
                    <div className="flex items-center gap-3">
                        <md-filled-tonal-button trailing-icon>
                            Contact
                            <svg
                                slot="icon"
                                viewBox="0 0 48 48"
                                fill="currentColor"
                            >
                                <path d="M24 4a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10A10 10 0 0 1 24 4Zm0 24c7.72 0 14 4.48 14 10v2H10v-2c0-5.52 6.28-10 14-10Zm14.7-6.9-3.95 3.95L32.8 23l3.95-3.95-3.95-3.95L34.75 14l3.95 3.95L42.65 14 44 15.35l-3.95 3.95L44 23.25 42.65 24.6l-3.95-3.95Z" />
                            </svg>
                        </md-filled-tonal-button>
                        <md-text-button
                            trailing-icon
                            target="_blank"
                            href={personalData.resume}
                        >
                            Resume
                            <svg slot="icon" viewBox="0 0 48 48">
                                <path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z" />
                            </svg>
                        </md-text-button>
                    </div>
                </div>

                {/* RIGHT CODE SECTION */}
                <SelfCode />
                
            </div>
        </section>
    );
}

export default Hero;
