"use client";
import { useTransitionRouter } from "next-view-transitions";
// import Link from "next/link"

const Header = (props) => {
        const router = useTransitionRouter();
        function slideInOut() {
                document.documentElement.animate([
                        {
                                opacity: 1,
                                // transform: "translateY(0)"
                        }, {
                                opacity: 0.2,
                                // transform: "translateY(-35%)"
                        }
                ], {
                        duration: 1000,
                        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                        fill: "forwards",
                        pseudoElement: "::view-transition-old(root)"
                })

                document.documentElement.animate([
                        {
                                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%"
                                // clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)"
                        },{
                                clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0"
                        }
                ], {
                        duration: 1000,
                        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                        fill: "forwards",
                        pseudoElement: "::view-transition-new(root)"
                })
        }

        function slideDown() {
                document.documentElement.animate([
                        {
                                // opacity: 1,
                                // transform: "translateY(0)"
                        }, {
                                // opacity: 0.2,
                                // transform: "translateY(35%)"
                        }
                ], {
                        duration: 1000,
                        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                        fill: "forwards",
                        pseudoElement: "::view-transition-old(root)"
                })

                document.documentElement.animate([
                        {
                                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
                              }, {
                                clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)"
                              }
                ], {
                        duration: 1000,
                        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                        fill: "forwards",
                        pseudoElement: "::view-transition-new(root)"
                })
        }



        function slideCenter() {
                document.documentElement.animate([
                        {
                                opacity: 1,
                                // transform: "translateY(0)"
                        }, {
                                opacity: 0.2,
                                // transform: "translateY(-35%)"
                        }
                ], {
                        duration: 1000,
                        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                        fill: "forwards",
                        pseudoElement: "::view-transition-old(root)"
                })

                document.documentElement.animate([
                        {
                                clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)"
                        },{
                                clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0"
                        }
                ], {
                        duration: 1000,
                        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                        fill: "forwards",
                        pseudoElement: "::view-transition-new(root)"
                })
        }

        function slideLeft() {
                document.documentElement.animate([
                        {
                                // opacity: 1,
                                transform: "translateY(0)"
                        }, {
                                // opacity: 0.2,
                                transform: "translateX(100%)"
                        }
                ], {
                        duration: 1000,
                        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                        fill: "forwards",
                        pseudoElement: "::view-transition-old(root)"
                })

                document.documentElement.animate([
                        {
                                transform: "translateX(-100%)",
                                clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
                        },{
                                transform: "translateX(0%)",
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                        }
                ], {
                        duration: 1000,
                        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                        fill: "forwards",
                        pseudoElement: "::view-transition-new(root)"
                })
        }


        return(
                <header className="header " data-class={props.dataClass} >
                        <div className="container header__container" >
                                <div className="header__logo">the Clouds</div>
                                <div className="header__wrap">
                                        <nav className="header__nav">
                                                <a href="/" onClick={(e) => { e.preventDefault(); router.push('/', {onTransitionReady: slideCenter, }) }}>Home</a>
                                                <a href="/gallery" onClick={(e) => { e.preventDefault(); router.push('/gallery', {onTransitionReady: slideInOut, }) }}>Gallery</a>
                                                <a href="/about-project" onClick={(e) => { e.preventDefault(); router.push('/about-project', {onTransitionReady: slideDown, }) }} >About us</a>
                                                <a href="/projects" onClick={(e) => { e.preventDefault(); router.push('/projects', {onTransitionReady: slideLeft, }) }}>Projects</a>
                                        </nav>
                                        <a href="#" className="btn btn--primary header__btn">Get started <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 17L17.5 7M17.5 7H9.5M17.5 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
                                </div>
                        </div>
                </header>
        )
}

export default Header;