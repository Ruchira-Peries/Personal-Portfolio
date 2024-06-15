import React from 'react';
import "./qualifications.css";

const Qualifications = () => {
  return (
    <section className='qualification section'>
        <h2 className='section__title'>Qualifications</h2>
        <span className='section__subtitle'>My Personal Journey </span>

        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div className='qualification__button qualification__active button--flex'>
                    <i className='uil uil-graduation-cap qualification__icon'></i>{" "}Education
                </div>
{/* 
                 <div className='qualification__button  button--flex'>
                    <i className='uil uil-briefcase-alt qualification__icon'></i>{" "}Experience
                </div> */}
            </div>

            <div className='qualification__sections'>
                <div className='qualification__content'>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>G.C.E Advanced Level</h3>
                            <span className='qualification__subtitle'>St: Xavier's College Marawila</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>2017 - 2019
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>
                    <div className='qualification__data'>
                    <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>BSc( Honors) in Computing and Information Systems</h3>
                            <span className='qualification__subtitle'>Sabaragamuwa University of Sri Lanka</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>2021 - Present
                            </div>
                        </div>
                    </div>
                </div>
                 {/* <div className='qualification__content'>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>G.C.E Advanced Level</h3>
                            <span className='qualification__subtitle'>St: Xavier's College Marawila</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>2017 - 2019
                            </div>
                        </div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>
                    <div className='qualification__data'>
                     <div></div> 
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>BSc( Honors) in Computing and Information Systems</h3>
                            <span className='qualification__subtitle'>Sabaragamuwa University of Sri Lanka</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calendar-alt'></i>2021 - Present
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Qualifications
