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
                    <h3 className='services__title'>UI|UX <br/> Designer</h3>
                </div>

                <span className='services__button'onClick={()=>toggleTab(1)} >View More<i className='uil uil-arrow-right services__button-icon'></i></span>

                <div className={toggleState === 1 ? 'services__modal active-modal':'services__modal'}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                        <h3 className='services__modal-title'>UI|UX Designer</h3>
                        <p className='services__modal-description'>I create user-friendly and visually appealing digital interfaces, blending beauty with functionality through user-centered design.</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Design intuitive and user-friendly interfaces</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Create visually appealing and cohesive designs</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Develop wireframes and prototypes to visualize concepts</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='services__content'>
                <div>
                    <i className='uil uil-arrow services__icon'></i>
                    <h3 className='services__title'>Front-end <br/> Developer</h3>
                </div>

                <span className='services__button'onClick={()=>toggleTab(2)}>View More<i className='uil uil-arrow-right services__button-icon'></i></span>

                <div className={toggleState === 2 ? 'services__modal active-modal':'services__modal'}>
                    <div className='services__modal-content'>
                        <i onClick={() => toggleTab(0)} className='uil uil-times services__modal-close'></i>

                        <h3 className='services__modal-title'>Front-end Developer</h3>
                        <p className='services__modal-description'>As a front-end developer, I excel in designing visually stunning and highly responsive user interfaces.</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Build responsive and user-friendly web interfaces</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Implement intuitive and interactive features</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>Collaborate with team members for seamless integration</p>
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
