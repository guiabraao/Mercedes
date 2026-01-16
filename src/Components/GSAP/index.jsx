import './styles.css'
import { useState, useEffect, useRef } from 'react'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GLE from '../../assets/gle.jpg'
import Logo01 from '../../assets/logo.png'

export default function GSAP() {

    const scrollRef = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // init locomotive
        const loco = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            smartphone: { smooth: true },
            tablet: { smooth: true }
        });

        // tell ScrollTrigger to use locomotive's scroll container
        ScrollTrigger.scrollerProxy(scrollRef.current, {
            scrollTop(value) {
                if (arguments.length) {
                    loco.scrollTo(value, { duration: 0, disableLerp: true });
                } else {
                    return loco.scroll.instance.scroll.y;
                }
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            // pinType depends on whether locomotive uses transform on the container
            pinType: scrollRef.current.style.transform ? "transform" : "fixed"
        });

        // update ScrollTrigger on loco scroll
        loco.on("scroll", ScrollTrigger.update);

        // refresh ScrollTrigger and loco after layout
        ScrollTrigger.addEventListener("refresh", () => loco.update());
        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.removeEventListener("refresh", () => loco.update());
            loco.destroy();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    useEffect(() => {
        const container = document.querySelector(".horizontal-container");
        const panelWrapper = document.querySelector(".panels");
        if (!container || !panelWrapper) return;

        const totalWidth = panelWrapper.scrollWidth;

        gsap.to(panelWrapper, {
            x: () => -(totalWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                scroller: scrollRef.current,
                pin: true,
                scrub: 0.5,
                end: () => `+=${totalWidth}`,
            }
        });
    }, []);





    return (
        <>
            <div className="containerGSAP" data-scroll-container ref={scrollRef}>

                <div className="horizontal-container">
                    <div className="panels">

                        <div className="boxSectionBanner1">
                            <div className="box1SectionLeft">
                                <img src={GLE} alt="" />
                            </div>
                            <div className="logoSection"><img src={Logo01} alt="" /></div>
                            <div className="box1SectionRight">
                                <h2>Because it's <br /> <span className='benz'>Mercedes-Benz.</span></h2>
                                <p>Na Mercedes-Benz, nos empenhamos para superar os limites da pesquisa e do desenvolvimento. Testamos nossos veículos sob as condições mais exigentes, e somente os produtos que atendem aos nossos mais elevados padrões recebem o que é reconhecido em todo o mundo: a estrela da Mercedes-Benz.</p>
                                <button className='button'>SAIBA MAIS</button>
                            </div>
                        </div>
                        <div className="boxSectionBanner1">
                            <div className="box1SectionLeft">
                                <img src={GLE} alt="" />
                            </div>
                            <div className="logoSection"><img src={Logo01} alt="" /></div>
                            <div className="box1SectionRight">
                                <h2>Because it's <br /> <span className='benz'>Mercedes-Benz.</span></h2>
                                <p>Na Mercedes-Benz, nos empenhamos para superar os limites da pesquisa e do desenvolvimento. Testamos nossos veículos sob as condições mais exigentes, e somente os produtos que atendem aos nossos mais elevados padrões recebem o que é reconhecido em todo o mundo: a estrela da Mercedes-Benz.</p>
                                <button className='button'>2</button>
                            </div>
                        </div>
                        <div className="boxSectionBanner1">
                            <div className="box1SectionLeft">
                                <img src={GLE} alt="" />
                            </div>
                            <div className="logoSection"><img src={Logo01} alt="" /></div>
                            <div className="box1SectionRight">
                                <h2>Because it's <br /> <span className='benz'>Mercedes-Benz.</span></h2>
                                <p>Na Mercedes-Benz, nos empenhamos para superar os limites da pesquisa e do desenvolvimento. Testamos nossos veículos sob as condições mais exigentes, e somente os produtos que atendem aos nossos mais elevados padrões recebem o que é reconhecido em todo o mundo: a estrela da Mercedes-Benz.</p>
                                <button className='button'>3</button>
                            </div>
                        </div>
                        <div className="boxSectionBanner1">
                            <div className="box1SectionLeft">
                                <img src={GLE} alt="" />
                            </div>
                            <div className="logoSection"><img src={Logo01} alt="" /></div>
                            <div className="box1SectionRight">
                                <h2>Because it's <br /> <span className='benz'>Mercedes-Benz.</span></h2>
                                <p>Na Mercedes-Benz, nos empenhamos para superar os limites da pesquisa e do desenvolvimento. Testamos nossos veículos sob as condições mais exigentes, e somente os produtos que atendem aos nossos mais elevados padrões recebem o que é reconhecido em todo o mundo: a estrela da Mercedes-Benz.</p>
                                <button className='button'>4</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}