import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">

<div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Frontend <br />Developer</h3>
                </div>

                <span className="services__button" onClick={() => {
                    toggleTab(1)
                }}>View More
                <i className="uil uil-arrow-right services__button-icon">
                </i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Frontend Developer</h3>
                    <p className="services__modal-description">
                        with more than 2 years of experience.
                        Providing quality work to clients and companies.
                    </p>

                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                I develop the most wonderful UIs.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                                Component base UI system.
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                             Responsive webpages for 99.9% Devices.
                            </p>
                        </li>
                    </ul>

                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Graphic<br />Designer</h3>
                </div>

                <span  className="services__button" onClick={() => 
                    toggleTab(2)
                } >View More
                <i className="uil uil-arrow-right services__button-icon">
                </i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={()=> { toggleTab(0)}} className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Graphic Designer</h3>
                    <p className="services__modal-description">
                        with more than 2 years of experience.
                        Providing quality work to clients and companies.
                    </p>

                    <ul className="services__modal-services grid">

                    <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                             Make a brand from scratch
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                             Design the most memorable LOGOs
                            </p>
                        </li>

                        <li className="services__modal-service">
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">
                             Design creative color themes
                            </p>
                        </li>
                    </ul>

                    </div>
                </div>
            </div>
        </div>
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>


    </section>
  )
}

export default Services