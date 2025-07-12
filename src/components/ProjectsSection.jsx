import ChromaGrid from "../helper/ChromaGrid";
import { projects } from "../utils/projects";
import React from "react";

function ProjectsSection() {
    
    return (
        <div id="projects">
            <div className="relative h-full">
                <div className="sticky top-10 mb-20">
                    <div className="w-[80px] h-[80px] bg-[var(--md-sys-color-primary)] rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
                    <div className="flex items-center justify-start relative">
                        <span className="bg-[var(--md-sys-color-inverse-primary)] text-[var(--md-sys-color-on-surface)] absolute left-0  w-fit px-5 py-3 text-xl rounded-md ">
                            PROJECTS
                        </span>
                        <span className="w-full h-[2px] bg-[var(--md-sys-color-inverse-primary)]"></span>
                    </div>
                </div>
                <ChromaGrid
                    items={projects}
                    radius={300}
                    damping={0.45}
                    fadeOut={0.6}
                    ease="power3.out"
                    className="bg-[var(--md-sys-color-surface-container-high)] text-[var(--md-sys-color-on-surface)] p-10 rounded-2xl shadow-lg"
                />
            </div>
        </div>
    );
}

export default ProjectsSection;
