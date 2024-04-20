import React from "react";
import "./LandingPage.css";
import Header from "../Header/Header";
import img from "../../Images/Webdesigner.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../../components/Icons";
import Typed from "react-typed";
import DarkMode from "../../components/DarkMode/DarkMode";
import Rotate from "react-reveal/Rotate";
import Fade from "react-reveal/Fade";

const strings = [
  "Davinder Kumar",
  " a Front-end developer",
  " a Back-end developer",
  " a Mern-stack developer",
  " a Full-stack developer",
];

const LandingPage = () => {
  return (
    <>
      <div className="position-relative">
        <Header />
        <section className="section-shaped ">
          <div className="shape shape-style-1 bg-gradient-info">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="header-container">
            <Fade left>
              <div className="left-side">
                <h1 className="container-h">
                  Hi all, I'm{" "}
                  <Typed strings={strings} typeSpeed={80} backSpeed={60} loop />
                </h1>
                <p className="container-p">
                  I'm passionate Full Stack web developer having an experience
                  of web applications with ReactJs, JavaScript, TypeScript,
                  ExpressJs, NodeJs and NestJs Frameworks.
                </p>
                <div className="social-links">
                  {Icons.map((icon) => (
                    <div
                      className="social-link social-link-animation"
                      style={{ backgroundColor: icon.BGcolor, border: icon }}
                      key={icon.name}
                    >
                      <a
                        style={{ color: "#fff" }}
                        href={icon.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={icon.icon} title={icon.name} />
                      </a>
                    </div>
                  ))}
                </div>
                <a
                  className="btn social-link-animation"
                  href="https://docs.google.com/document/d/1dBYovsYMj0SUPNUKo4Tk4clv8_l903tv/edit?usp=sharing&ouid=105558131272717811348&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                      />
                    </svg>
                  </span>
                  See My Resume
                </a>
              </div>
            </Fade>
            <Rotate>
              <div className="right-side">
                <img src={img} alt="" />
              </div>
            </Rotate>
            {/* <DarkMode/> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
