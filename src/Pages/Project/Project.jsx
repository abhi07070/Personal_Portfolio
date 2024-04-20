import React from "react";
import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { project } from "../../components/Project";
import Fade from "react-reveal/Fade";

const Project = () => {
  return (
    <section className="section-bg">
      <div className="project-detail">
        <Fade bottom>
          <div className="header">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
              />
            </svg>

            <h1>Project</h1>
          </div>
          <div className="project-wrap">
            {project.map((data) => (
              <div className="wrapper">
                <h1>{data.name}</h1>
                <p>{data.desc}</p>
                <span>
                  <b>Skills: </b>
                  {data.skills}
                </span>
                <div className="btns">
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="git-btn" icon={faGithub} />
                  </a>
                  {data.demo !== "" && (
                    <a
                      href={data.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="demo demo-btn">
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
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                        <span>Demo</span>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Project;
