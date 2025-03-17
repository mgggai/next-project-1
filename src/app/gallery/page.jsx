"use client";
import ReactLenis from "@studio-freight/react-lenis";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import Header from "@/app/components/Header";

const Gallery = () => {
        const container = useRef();
        useGSAP(() => {
                const images = gsap.utils.toArray('.gallery__image')  
                const text = document.querySelector(".gallery__text");
                images.forEach((item, index) => {
                        gsap.to(item, {
                                scrollTrigger: {
                                        trigger: item,
                                        start: "top 50%",
                                        end: "bottom 50%",
                                        // markers: true,
                                        onEnter: () => {
                                                text.textContent = item.dataset.title
                                                images.forEach(item => {
                                                        item.classList.remove("is-active")
                                                })
                                                item.classList.add("is-active");
                                        },
                                        onEnterBack: () => {
                                                text.textContent = item.dataset.title
                                                images.forEach(item => {
                                                        item.classList.remove("is-active")
                                                })
                                                item.classList.add("is-active");
                                        },
                                        
                                },

                        });
                })


        }, { scope: container });
	return (
		<>
                        <ReactLenis root>
                                <Header dataClass="header-gallery-page" />
                                <div className="gallery" ref={container}>
                                        <div className="gallery__images">
                                                <div className="gallery__image" data-title="Above the noise, beyond the rush— find the quiet place within yourself">
                                                        <img src="./images/gallery-1.png" alt="" />
                                                </div>
                                                <div className="gallery__image" data-title="Breathe deeply, let go of the past, and step into the endless present">
                                                        <img src="./images/gallery-2.png" alt="" />
                                                </div>
                                                <div className="gallery__image" data-title="With every breath, feel lighter, freer, and closer to your true essence">
                                                        <img src="./images/gallery-3.png" alt="" />
                                                </div>
                                                <div className="gallery__image" data-title="Above the noise, beyond the rush— find the quiet place within yourself">
                                                        <img src="./images/gallery-1.png" alt="" />
                                                </div>
                                                <div className="gallery__image" data-title="Breathe deeply, let go of the past, and step into the endless present">
                                                        <img src="./images/gallery-2.png" alt="" />
                                                </div>
                                                <div className="gallery__image" data-title="With every breath, feel lighter, freer, and closer to your true essence">
                                                        <img src="./images/gallery-3.png" alt="" />
                                                </div>
                                        </div>
                                        <div className="gallery__content">
                                                <div className="gallery__top">
                                                        <h2 className="heading gallery__heading">Gallery</h2>
                                                        <div className="gallery__smallimage">
                                                                <img src="./images/gallery-4.png" alt="" />
                                                        </div>
                                                </div>
                                                <div className="gallery__bottom">
                                                        <div className="gallery__more">
                                                                View More
                                                                <svg
                                                                        width="60"
                                                                        height="14"
                                                                        viewBox="0 0 60 14"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                        <path
                                                                                d="M1 7H59M59 7L51.5 0.5M59 7L51.5 13.5"
                                                                                stroke="#578811"
                                                                                strokeLinecap="round"
                                                                        />
                                                                </svg>
                                                        </div>
                                                        <div className="gallery__text">
                                                                Above the noise, beyond the rush— find the quiet place within
                                                                yourself
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </ReactLenis>
		</>
	);
};

export default Gallery;
