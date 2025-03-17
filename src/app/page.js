"use client";
import Header from "@/app/components/Header";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

export default function Home() {
	const container = useRef();
	useGSAP(() => {
               const heroTitle = new SplitType('.home__title',  {types: "chars" } );
               const heroSubtitle = new SplitType('.home__subtitle',  {types: "lines" } );
               gsap.set([heroTitle.chars, heroSubtitle.lines], { 
                        yPercent: 100, 
                        opacity: 0 
                });


                const homeTl = gsap.timeline()

                homeTl
                        .to(heroTitle.chars,{
                                yPercent: 0,
                                opacity: 1,
                                duration: .7,
                                stagger: 0.035,
                                ease: "power4.out",  
                                delay: 1
                        })
                        .to(heroSubtitle.lines,{
                                yPercent: 0,
                                opacity: 1,
                                duration: .5,
                                stagger: 0.08,
                                ease: "power4.out",  
                                // ease: "power2.inOut",  
                        })

        }, { scope: container });

	return (
		<>
			<Header dataClass="header-index-page" />
			<div className="home" ref={container}>
				<div className="container home__container">
					<div className="home__title">Breathe Free</div>
					<div className="home__subtitle">
						Feel the wind touch your soul, carrying away all that no longer
						serves you. Let every breath cleanse your mind, lifting the weight
						of worries and filling you with a sense of lightness and clarity
					</div>
				</div>
				<div className="home__video">
					<video muted autoPlay loop playsInline>
						<source src="./video/video.mp4" type="video/mp4" />
					</video>
				</div>
			</div>
		</>
	);
}
