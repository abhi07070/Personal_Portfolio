import React from 'react'
import './Experience.css'
import { experience } from '../../components/Experience'
import Fade from 'react-reveal/Fade';

const Experience = () => {

    return (
        <section className='section-bg'>
            <div className="experience-detail">
                <Fade bottom>
                    <div className="header">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                        </svg>

                        <h1>Experience</h1>
                    </div>
                    <div className="experience-wrap">
                        {experience.map((data) => (
                            <div className="wrapper">
                                <div className="logo">
                                    <img src={data.img} alt="" />
                                </div>
                                <h1>{data.header}</h1>
                                <h2>{data.subHeader}</h2>
                                <h3>{data.subTitleHeader}</h3>
                                {/* <ol> */}
                                <li>{data.para1}</li>
                                <li>{data.para2}</li>
                                {/* </ol> */}
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default Experience
