import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const[toggleState,setToggleState]= useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className='services section' id='services'>
        <h2 className='section__title'>Services</h2>
        <span className='section__subtitle'>What I offer</span>

        <div className='services__container container grid1'>
            <div className='services__content'>
                <div>
                    <i className='uil uil-web-grid services__icon'></i>
                    <h3 className='services__title'>UI<br/> Designer</h3>
                </div>

                <span className='services__button'onClick={()=>toggleTab(1)} >View More<i className='uil uil-arrow-right services__button-icon'></i></span>

                <div className={toggleState === 1 ? 'services__modal active-modal':'services__modal'}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                        <h3 className='services__modal-title'>UI Designer</h3>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'><p className='p-bold'>Visual Design:</p> Creating the visual elements of the interface, including color schemes, typography, icons, and layout to ensure a cohesive and attractive design.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'><p className='p-bold'>Interactive Elements:</p> Designing and refining buttons, sliders, and other interactive components to enhance usability and engagement.

</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'><p className='p-bold'>Responsive Design:</p> Ensuring that the design adapts seamlessly to different screen sizes and devices, maintaining functionality and aesthetics across platforms.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='services__content'>
                <div>
                    <i className='uil uil-web-grid services__icon'></i>
                    <h3 className='services__title'>UX<br/> Designer</h3>
                </div>

                <span className='services__button'onClick={()=>toggleTab(2)}>View More<i className='uil uil-arrow-right services__button-icon'></i></span>

                <div className={toggleState === 2 ? 'services__modal active-modal':'services__modal'}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                        <h3 className='services__modal-title'>UX Designer</h3>
                        {/* <p className='services__modal-description'>As a front-end developer, I excel in designing visually stunning and highly responsive user interfaces.</p> */}

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'><p className='p-bold'>User Research:</p> Conducting surveys, interviews, and usability testing to understand user needs, preferences, and pain points, which inform design decisions.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'><p className='p-bold'>Wireframing and Prototyping:</p> Creating low-fidelity wireframes and interactive prototypes to map out the structure and functionality of a product before development begins.</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'><p className='p-bold'>Usability Testing:</p> Evaluating the product with real users to identify issues and areas for improvement, ensuring that the final design provides a smooth and intuitive user experience.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
