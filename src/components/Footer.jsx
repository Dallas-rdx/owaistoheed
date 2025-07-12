import React from "react";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";

function Footer() {
    return (
        <div className="relative border-t bg-[var(--md-sys-color-surface)] border-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)]">
            <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
                {/* Gradient Line */}
                <div className="flex justify-center -z-40">
                    <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-[var(--md-sys-color-primary)] to-transparent"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-[var(--md-sys-color-on-surface-variant)]">
                        © Developer Portfolio by{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/owais-toheed-85b5b921b/"
                            className="text-[var(--md-sys-color-primary)] hover:underline"
                        >
                           Owais toheed
                        </a>
                    </p>

                    <div className="flex items-center gap-5">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/Dallas-rdx"
                            className="flex items-center gap-2 uppercase text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors"
                        >
                            <IoStar />
                            <span>Star</span>
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/Dallas-rdx"
                            className="flex items-center gap-2 uppercase text-[var(--md-sys-color-on-surface-variant)] hover:text-[var(--md-sys-color-primary)] transition-colors"
                        >
                            <IoLogoGithub />
                            <span>Github</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
