import React from "react";
import "@material/web/tabs/secondary-tab.js";
import "@material/web/tabs/tabs.js";

function Navbar() {
    return (
        <nav className="nav">
            <div className="navbarHeader">
                <span className="navbarLogo">Owais toheed</span>
                <md-tabs className="navbarTabs block">
                    <a href="/#about"><md-secondary-tab >About</md-secondary-tab></a>
                    <a href="/#experience"><md-secondary-tab>Experience</md-secondary-tab></a>
                    <a href="/#skills"><md-secondary-tab>Skills</md-secondary-tab></a>
                    <a href="/#projects"><md-secondary-tab>Projects</md-secondary-tab></a>
                    <a href="/#contact"><md-secondary-tab>Contact Me</md-secondary-tab></a>
                </md-tabs>
            </div>
            <hr></hr>
        </nav>
    );
}

export default Navbar;