import './styles.css'
import Header from '../../Components/Header/index.jsx'
import Logo from '../../assets/logoAzul.png'
import Logo01 from '../../assets/logo.png'
import Car1 from '../../assets/carIntro1.png'
import Car2 from '../../assets/carIntro2.png'
import CarCard from '../../assets/carCard.png'
import Banner1 from '../../assets/banner1.jpg'
import Banner2 from '../../assets/banner2.jpg'
import Banner3 from '../../assets/banner3.jpg'
import GLE from '../../assets/gle.jpg'
import OGCAR from '../../assets/ogCar.jpg'
import Logo0 from '../../assets/logo0.png'
import Logo02 from '../../assets/logo02.png'
import Banner1Section3 from '../../assets/bannerSection1.jpg'
import Banner2Section3 from '../../assets/bannerSection2.jpg'
import Banner3Section3 from '../../assets/bannerSection3.jpg'
import { useState, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

    const containerRef = useRef(null);
    const panelsRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const panels = panelsRef.current;
        if (!container || !panels) return;

        const getScrollAmount = () =>
            panels.scrollWidth - window.innerWidth;

        const ctx = gsap.context(() => {
            gsap.to(panels, {
                x: () => -getScrollAmount(),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 0.5,
                    start: "top top",
                    end: () => `+=${getScrollAmount()}`,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                },
            });
        }, container);

        return () => ctx.revert();
    }, []);

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");

        const frameCount = 120;
        const images = [];
        const imageSeq = { frame: 0 };

        const currentFrame = (index) =>
            `/frames/img${index + 1}.jpg`;

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            images.push(img);
        }

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        };

        const render = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(
                images[imageSeq.frame],
                0,
                0,
                canvas.width,
                canvas.height
            );
        };

        images[0].onload = render;
        resize();
        window.addEventListener("resize", resize);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".GsapIntroContainer",
                start: "top top",
                end: "+=200%",
                scrub: true,
                pin: true,
                pinSpacing: true, // deixa o espaço correto
            }
        });

        tl.to(imageSeq, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            onUpdate: render,
            duration: 1
        });

        //  Texto 1
        tl.to(".intro-1", {
            opacity: 1,
            y: 0,
            duration: 0.15
        }, 0.1);

        tl.to(".intro-1", {
            opacity: 0,
            y: -30,
            duration: 0.15
        }, 0.4);

        //  Texto 2
        tl.to(".intro-2", {
            opacity: 1,
            y: 0,
            duration: 0.15
        }, 0.6);

        tl.to(".intro-2", {
            opacity: 0,
            y: -30,
            duration: 0.15
        }, 0.85);

        //  Texto 3
        tl.to(".intro-3", {
            opacity: 1,
            y: 0,
            duration: 0.15
        }, 1);

        tl.to(".intro-3", {
            opacity: 0,
            y: -30,
            duration: 0.15
        }, 1.2);

        return () => {
            window.removeEventListener("resize", resize);
            tl.kill();
        };
    }, []);


    return (
        <>
            <main>
                <Header />
                <div className="GsapIntroContainer">
                    <canvas ref={canvasRef}></canvas>
                    <div className="boxContentGsapIntro">
                        <div className="contentGSAPIntro">
                            <div className="boxGSAPintro intro-1">
                                <h1><span className='benz'>Mercedes-Benz</span></h1>
                                <p>Inovação, desempenho e luxo em perfeita harmonia.</p>
                            </div>
                            <div className="boxGSAPintro intro-2">
                                <h1>Mais do que um <span className='turquesa'>automóvel</span>.</h1>
                                <p>Uma experiência construída com precisão, tecnologia e emoção.</p>
                                <button>SAIBA MAIS!</button>
                            </div>
                            <div className="boxGSAPintro intro-3">
                                <h1>Because it’s <span className='benz'>Mercedes-Benz</span>.</h1>
                                <p>Criando hoje o que o mundo vai dirigir amanhã.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="containerHomeIntro">
                    <div className="elementsIntro">
                        <div className="mercedesLogoIntro"><img src={Logo} alt="" /></div>
                        <div className="car1"><img src={Car1} alt="" /></div>
                        <div className="car2"><img src={Car2} alt="" /></div>
                    </div>

                    <div className="boxTxtIntroHome">
                        <h1><span className='turquesa'>Showroom</span> Online.</h1>
                        <p>Luxo, esportividade e potência perfeitamente combinados: Descubra os modelos <span className='benz'>Mercedes-Benz</span> mais recentes.</p>
                        <button className='button'>Mostrar nossos veículos</button>
                    </div>
                </div>

                <div className="containerHomeModelos">
                    <div className="txtModelos"><p>Luxo, esportividade e potência perfeitamente combinados: <span className='turquesa'>Descubra</span> os modelos <span className='benz'>Mercedes-Benz</span> mais recentes.</p></div>
                    <div className="modelosIntroCards">

                        <div className="cardIntroItem">
                            <div className="imgCardIntro"><img src={CarCard} alt="" /></div>
                            <div className="txtCardIntro">
                                <h4>Explorar Modelo</h4>
                                <p>SUV</p>
                            </div>
                        </div>

                        <div className="cardIntroItem">
                            <div className="imgCardIntro"><img src={CarCard} alt="" /></div>
                            <div className="txtCardIntro">
                                <h4>Explorar Modelo</h4>
                                <p>Sedan</p>
                            </div>
                        </div>

                        <div className="cardIntroItem">
                            <div className="imgCardIntro"><img src={CarCard} alt="" /></div>
                            <div className="txtCardIntro">
                                <h4>Explorar Modelo</h4>
                                <p>Sport</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="containerRecomendacoesHome">
                    <div className="txtRecomendacoes"><h2>Nossas Recomendações</h2></div>

                    <div className="boxRecomendacoes">

                        <div className="recomendacoesItem">
                            <img src={Banner1} alt="" />
                            <div className="recomendacoesContent">
                                <h3>Configure seu <span className='benz'>Mercedes-Benz</span></h3>
                                <p>Explore as opções de configuração e faça seu automóvel refletir seu estilo.</p>
                            </div>
                        </div>

                        <div className="recomendacoesItem">
                            <img src={Banner2} alt="" />
                            <div className="recomendacoesContent">
                                <h3>Condições <span className='turquesa'>Exclusivas</span></h3>
                                <p>Conheça o seu próximo Mercedes-Benz.</p>
                            </div>
                        </div>

                        <div className="recomendacoesItem">
                            <img src={Banner3} alt="" />
                            <div className="recomendacoesContent">
                                <h3><span className='turquesa'>AMG</span> Private Lounge​</h3>
                                <p>Exclusivo para cliente AMG.</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="containerGSAP">

                    <div className="horizontal-container" data-scroll-container ref={containerRef}>
                        <div className="panels" ref={panelsRef}>

                            <div className="boxSectionBanner1">
                                <div className="box1SectionLeft">
                                    <img src={GLE} alt="" />
                                </div>
                                <div className="logoSection"><img src={Logo01} alt="" /></div>
                                <div className="box1SectionRight">
                                    <h2>Encontre online o seu novo <span className='benz'>Mercedes-Benz.</span></h2>
                                    <p>Com uma experiência digital segura e automóveis reais a um clique de distância, ficou fácil encontrar o modelo ideal para você. No Showroom Online, você encontrará veículos disponíveis da Mercedes-Benz e Mercedes-AMG.</p>
                                    <button className='button'>SAIBA MAIS</button>
                                </div>
                            </div>
                            <div className="boxSectionBanner2">
                                <img src={OGCAR} alt="" />
                                <div className="banner2Content">
                                    <div className="boxTxtBanner2">
                                        <h2>Encontre online o seu novo <span className='benz'>Mercedes-Benz.</span></h2>
                                        <p>A Mercedes-Benz tem sua origem em 1886, quando Karl Benz desenvolveu o primeiro automóvel movido a motor de combustão interna, marco que deu início à indústria automobilística. Anos depois, em 1926, ocorreu a fusão entre as empresas de Karl Benz e Gottlieb Daimler, dando origem oficialmente à Mercedes-Benz.</p>
                                        <p>Desde então, a marca se consolidou como referência mundial em inovação, luxo e engenharia de alta performance. Ao longo de sua história, a Mercedes-Benz foi responsável por importantes avanços tecnológicos, especialmente nas áreas de segurança, conforto e design, influenciando gerações de veículos.</p>
                                        <p>Com mais de um século de tradição, a Mercedes-Benz não fabrica apenas automóveis, mas representa pioneirismo, sofisticação e a constante busca pela excelência.</p>
                                    </div>
                                    
                                    <div className="box2ContentBottom">
                                        <img src={Logo0} alt="" />
                                        <img src={Logo02} alt="" />
                                        <img src={Logo01} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="boxSectionBanner3">
                                <div className="bannerSection3">
                                    <img src={Banner2Section3} alt="" />
                                    <div className="contentBannerSection3">
                                       <div className="txtSection3">
                                            <h2>Because it's <br /> <span className='benz'>Mercedes-Benz.</span></h2>
                                            <p>Na Mercedes-Benz, nos empenhamos para superar os limites da pesquisa e do desenvolvimento. Testamos nossos veículos sob as condições mais exigentes, e somente os produtos que atendem aos nossos mais elevados padrões recebem o que é reconhecido em todo o mundo: a estrela da Mercedes-Benz.</p>
                                        </div>
                                    </div>
                                </div>
                                 <div className="bannerSection3">
                                    <img src={Banner1Section3} alt="" />
                                    <div className="contentBannerSection3 banner2">
                                        <div className="txtSection3">
                                            <h2>Because it's <br /> <span className='benz'>Mercedes-Benz.</span></h2>
                                            <p>Na Mercedes-Benz, nos empenhamos para superar os limites da pesquisa e do desenvolvimento. Testamos nossos veículos sob as condições mais exigentes, e somente os produtos que atendem aos nossos mais elevados padrões recebem o que é reconhecido em todo o mundo: a estrela da Mercedes-Benz.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bannerSection3">
                                    <img src={Banner3Section3} alt="" />
                                    <div className="contentBannerSection3">
                                        <div className="txtSection3">
                                            <h2>Because it's <br /> <span className='benz'>Mercedes-Benz.</span></h2>
                                            <p>Na Mercedes-Benz, nos empenhamos para superar os limites da pesquisa e do desenvolvimento. Testamos nossos veículos sob as condições mais exigentes, e somente os produtos que atendem aos nossos mais elevados padrões recebem o que é reconhecido em todo o mundo: a estrela da Mercedes-Benz.</p>
                                        </div>
                                    </div>
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

            </main>

            <div className="footer">
                <img src={Logo01} alt="" />
            </div>



        </>
    )
}