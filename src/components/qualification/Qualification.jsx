import React from 'react';
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__button 
            qualification__active button--flex">
                <i className="uil uil-graduation-cap qualification__icon" >

                </i> Education
            </div>

            <div className="qualification__button button--flex">
                <i className="uil uil-briefcase-alt qualification__icon" ></i>
                    Experience
            </div>
        </div>

        <div className="qualification__sections">
            <div className="qualification__content">
            <div className="qualification__data">
                <div>
                    <h3 className="qualification__title">Computer Science</h3>
                    <span className="qualification__subtitle">
                        Herat - University
                    </span>
                    <div className="qualification__calender">
                        <i className="uil uil-calender-alt">
                            2018 - 2022
                        </i>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>
            </div>

            <div className="qualification__data">
                <div></div>
                
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                <div>
                    <h3 className="qualification__title">Graphic Design</h3>
                    <span className="qualification__subtitle">
                        Herat - University
                    </span>
                    <div className="qualification__calender">
                        <i className="uil uil-calender-alt">
                            2018 - 2022
                        </i>
                    </div>

                </div>
            </div>

            </div>
        </div>
    </section>
  )
}

export default Qualification