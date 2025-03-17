"use client";
import { useRef } from "react";
import Header from "@/app/components/Header";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Projects = () => {
        const container = useRef();
	useGSAP(() => {
                const projects = gsap.utils.toArray('.project') ;
                gsap.set(projects, {
                        yPercent: 10,
                        opacity: 0
                })
                gsap.to(projects, {
                        yPercent: 0,
                        opacity: 1,
                        stagger: 0.05,
                        delay: .8 
                })

        }, { scope: container });

        
        return(
                <>
                        <Header dataClass="header-projects-page" />
                        <div className="projects" ref={container}>
                                <div className="container">
                                        <h2 className="heading projects__heading">Our projects</h2>
                                        <div className="projects__items" >
                                                <div className="projects__item project">
                                                        <div className="project__image">
                                                                <img src="./images/project-1.png" alt="" />
                                                        </div>
                                                        <div className="project__title">In the silence of nature, <br />find the voice of your true self</div>
                                                </div>
                                                <div className="projects__item project">
                                                        <div className="project__image">
                                                                <img src="./images/project-2.png" alt="" />
                                                        </div>
                                                        <div className="project__title">Between the mountains and the sky,<br /> discover the space to just be</div>
                                                </div>
                                                <div className="projects__item project">
                                                        <div className="project__image">
                                                                <img src="./images/project-3.png" alt="" />
                                                        </div>
                                                        <div className="project__title">Lose yourself in the wilderness <br /> to find your true essence</div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default Projects