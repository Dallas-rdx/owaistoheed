import React from "react";
import { BsPersonWorkspace } from "react-icons/bs";

function ExperienceCard(props) {
    const { experience } = props;
    return (
        <div
            key={experience.id}
            className="relative overflow-hidden bg-[var(--md-sys-color-surface-container-highest)] text-[var(--md-sys-color-on-surface)] rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300 px-10"
        >

            {/* Duration */}
            <div className="flex justify-center mb-3">
                <p className="text-xs sm:text-sm text-[var(--md-sys-color-on-surface-variant)] font-medium uppercase tracking-wide">
                    {experience.duration}
                </p>
            </div>

            {/* Icon + Title */}
            <div className="flex items-start gap-4">
                <div className="pt-1">
                    <BsPersonWorkspace
                        size={30}
                        className="text-[var(--md-sys-color-primary)]"
                    />
                </div>
                <div>
                    <p className="text-base sm:text-xl font-semibold uppercase mb-1 text-[var(--md-sys-color-on-surface)]">
                        {experience.title}
                    </p>
                    <p className="text-sm sm:text-base text-[var(--md-sys-color-on-surface-variant)]">
                        {experience.company}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ExperienceCard;
