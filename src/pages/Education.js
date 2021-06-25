import React from "react";

export const Education = () => (
    <section className="resume-section" id="education">
        <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">LinkAcademy</h3>
                    <div className="subheading mb-3">Web Development</div>
                    <div>Computer Science - Web Development</div>
                    <p>GPA: 3.23</p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">August 2020 - May 2021</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Alexandru Vlahuta - Theoretical High School</h3>
                    <div className="subheading mb-3">Construction Installer Technician</div>
                    <p>GPA: 3.56</p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">September 2009 - June 2013</span></div>
            </div>
        </div>
    </section>
);