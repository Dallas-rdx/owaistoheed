import React from "react";

function SelfCode() {
    return (
        <div className="order-1 lg:order-2 from-[var(--md-sys-color-surface-container-high)] border-[var(--md-sys-color-outline-variant)] relative rounded-lg border bg-gradient-to-r to-[var(--md-sys-color-surface-container-highest)]">
            {/* Gradient lines */}
            <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--md-sys-color-primary)] to-[var(--md-sys-color-tertiary)]"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-[var(--md-sys-color-tertiary)] to-transparent"></div>
            </div>

            {/* Window control dots */}
            <div className="px-4 lg:px-8 py-5">
                <div className="flex flex-row space-x-2">
                    <div className="h-3 w-3 rounded-full bg-[var(--md-sys-color-error)]"></div>
                    <div className="h-3 w-3 rounded-full bg-[var(--md-sys-color-tertiary)]"></div>
                    <div className="h-3 w-3 rounded-full bg-[var(--md-sys-color-primary)]"></div>
                </div>
            </div>

            {/* Content section */}
            <div className="overflow-hidden border-t-[2px] border-[var(--md-sys-color-outline-variant)] px-4 lg:px-8 py-4 lg:py-8">
                <code className="font-mono text-xs md:text-sm lg:text-base">
                    <div className="blink">
                        <span className="mr-2 text-primary">const</span>
                        <span className="mr-2 text-on-bg">coder</span>
                        <span className="mr-2 text-primary">=</span>
                        <span className="text-on-surface-variant">{"{"}</span>
                    </div>
                    <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-on-bg">
                            name:
                        </span>
                        <span className="text-on-surface-variant">{`'`}</span>
                        <span className="text-secondary">Owais Toheed</span>
                        <span className="text-on-surface-variant">{`',`}</span>
                    </div>
                    <div className="ml-4 lg:ml-8 mr-2">
                        <span className="text-on-bg">skills:</span>
                        <span className="text-on-surface-variant">{`['`}</span>
                        <span className="text-secondary">React</span>
                        <span className="text-on-surface-variant">
                            {"', '"}
                        </span>
                        <span className="text-secondary">JavaScript</span>
                        <span className="text-on-surface-variant">
                            {"', '"}
                        </span>
                        <span className="text-secondary">Python</span>
                        <span className="text-on-surface-variant">
                            {"', '"}
                        </span>
                        <span className="text-secondary">C</span>
                        <span className="text-on-surface-variant">
                            {"', '"}
                        </span>
                        <span className="text-secondary">Java</span>
                        <span className="text-on-surface-variant">
                            {"', '"}
                        </span>
                        <span className="text-secondary">MySql</span>
                        <span className="text-on-surface-variant">
                            {"', '"}
                        </span>
                        <span className="text-secondary">Illustrator</span>
                        <span className="text-on-surface-variant">
                            {"', '"}
                        </span>
                        <span className="text-secondary">Photoshop</span>
                        <span className="text-on-surface-variant">{"'],"}</span>
                    </div>
                    <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-on-bg">
                            hardWorker:
                        </span>
                        <span className="text-tertiary">true</span>
                        <span className="text-on-surface-variant">,</span>
                    </div>
                    <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-on-bg">
                            quickLearner:
                        </span>
                        <span className="text-tertiary">true</span>
                        <span className="text-on-surface-variant">,</span>
                    </div>
                    <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-on-bg">
                            problemSolver:
                        </span>
                        <span className="text-tertiary">true</span>
                        <span className="text-on-surface-variant">,</span>
                    </div>
                    <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-inverse-primary">
                            hireable:
                        </span>
                        <span className="text-tertiary">function</span>
                        <span className="text-on-surface-variant">
                            {"() {"}
                        </span>
                    </div>
                    <div>
                        <span className="ml-8 lg:ml-16 mr-2 text-tertiary">
                            return
                        </span>
                        <span className="text-on-surface-variant">{`(`}</span>
                    </div>
                    <div>
                        <span className="ml-12 lg:ml-24 text-outline">
                            this.
                        </span>
                        <span className="mr-2 text-on-bg">hardWorker</span>
                        <span className="text-secondary">&amp;&amp;</span>
                    </div>
                    <div>
                        <span className="ml-12 lg:ml-24 text-outline">
                            this.
                        </span>
                        <span className="mr-2 text-on-bg">problemSolver</span>
                        <span className="text-secondary">&amp;&amp;</span>
                    </div>
                    <div>
                        <span className="ml-12 lg:ml-24 text-outline">
                            this.
                        </span>
                        <span className="mr-2 text-on-bg">skills.length</span>
                        <span className="mr-2 text-secondary">&gt;=</span>
                        <span className="text-tertiary">5</span>
                    </div>
                    <div>
                        <span className="ml-8 lg:ml-16 mr-2 text-on-surface-variant">{`);`}</span>
                    </div>
                    <div>
                        <span className="ml-4 lg:ml-8 text-on-surface-variant">{`};`}</span>
                    </div>
                    <div>
                        <span className="text-on-surface-variant">{`};`}</span>
                    </div>
                </code>
            </div>
        </div>
    );
}

export default SelfCode;
