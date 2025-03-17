"use client";
import Header from "@/app/components/Header";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

const AboutProject = () => {
        const container = useRef();
	useGSAP(() => {
                const text = new SplitType('.about-project__content', {
                        types: "lines",
                        tagName: "div",
                        lineClass: "line"
                })

                text.lines.forEach((line) => {
                        const content = line.innerHTML;
                        line.innerHTML = `<span>${content}</span>`
                })

                gsap.set(".about-project__content .line span", {
                        y: 400,
                        display: "block"
                })
                

                gsap.to(".about-project__content .line span", {
                        y: 0,
                        duration: 2,
                        stagger: 0.075,
                        ease: "power4.out",
                        delay: 0.25
                })

                return () => {
                        if(text) text.revert();
                }

        }, { scope: container });

        return(
                <>
                        <Header dataClass="header-aboutproject-page" />
                        <div className="about-project" ref={container}>
                                <h2 className="about-project__heading heading">About Project</h2>
                                <div className="about-project__content">Breathe Free is a space created for those seeking harmony, inspiration, and freedom from the rush of everyday life. We believe that nature is the best guide to inner balance, and that fresh air, endless horizons, and the pure energy of the heights help you look within, let go of the unnecessary, and find clarity.</div>
                        </div>
                </>
        )
}

export default AboutProject