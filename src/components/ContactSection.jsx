import React from "react";
import { personalData } from "../utils/personal-data.js";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm3 from "./ContactForm3.jsx";
import ContactForm4 from "./ContactForm4.jsx";

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function ContactSection() {
    return (
        <div
            id="contact"
            className="my-12 lg:my-16 relative mt-24 text-[var(--md-sys-color-on-background)]"
        >
            {/* Side Label */}
            <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
                <span className="bg-[var(--md-sys-color-inverse-primary)] text-[var(--md-sys-color-on-surface)] w-fit rotate-90 p-2 px-5 text-xl rounded-md">
                    CONTACT
                </span>
                <span className="h-36 w-[2px] bg-[var(--md-sys-color-inverse-primary)]"></span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <ContactForm4 />

                <div className="lg:w-3/4">
                    <div className="flex flex-col gap-5 lg:gap-9">
                        {/* Email */}
                        <p className="text-sm md:text-xl flex items-center gap-3">
                            <MdAlternateEmail
                                className="bg-[var(--md-sys-color-secondary)] p-2 rounded-full hover:bg-[var(--md-sys-color-primary)] hover:scale-110 transition-all duration-300 text-[var(--md-sys-color-on-primary)] cursor-pointer"
                                size={36}
                            />
                            <span>{personalData.email}</span>
                        </p>

                        {/* Phone */}
                        <p className="text-sm md:text-xl flex items-center gap-3">
                            <IoMdCall
                                className="bg-[var(--md-sys-color-secondary)] p-2 rounded-full hover:bg-[var(--md-sys-color-primary)] hover:scale-110 transition-all duration-300 text-[var(--md-sys-color-on-primary)] cursor-pointer"
                                size={36}
                            />
                            <span>{personalData.phone}</span>
                        </p>

                        {/* Location */}
                        <p className="text-sm md:text-xl flex items-center gap-3">
                            <CiLocationOn
                                className="bg-[var(--md-sys-color-secondary)] p-2 rounded-full hover:bg-[var(--md-sys-color-primary)] hover:scale-110 transition-all duration-300 text-[var(--md-sys-color-on-primary)] cursor-pointer"
                                size={36}
                            />
                            <span>{personalData.address}</span>
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
                        {[
                            { icon: IoLogoGithub, url: personalData.github },
                            { icon: BiLogoLinkedin, url: personalData.linkedIn },
                            { icon: FaXTwitter, url: personalData.twitter },
                           
                        ].map(({ icon: Icon, url }, i) => (
                            <a key={i} target="_blank" rel="noopener noreferrer" href={url}>
                                <Icon
                                    className="bg-[var(--md-sys-color-secondary)] p-3 rounded-full hover:bg-[var(--md-sys-color-primary)] hover:scale-110 transition-all duration-300 text-[var(--md-sys-color-on-primary)] cursor-pointer"
                                    size={48}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
