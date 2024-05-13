import s from "./MainInfo.module.scss";
import entBg from "../../../images/entBg.jpg";
import { SliderImg } from "../../common/SliderImg/SliderImg";
import soi from "../../../images/entomophagousIcons/soi.png";
import sugarBeet from "../../../images/entomophagousIcons/sugarBeet.png";
import rapeseed from "../../../images/entomophagousIcons/rapeseed.png";
import sunflower from "../../../images/entomophagousIcons/sunflower.png";
import corn from "../../../images/entomophagousIcons/corn.png";
import fruits from "../../../images/entomophagousIcons/fruits.png";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const MainInfo = () => {
    const food = [
        { img: soi, text: "до 90% сои" },
        { img: sugarBeet, text: "до 85 % сахарной свеклы" },
        { img: rapeseed, text: "до 70 % рапса" },
        { img: sunflower, text: "до 85 % подсолнуха" },
        { img: corn, text: "до 80 % кукурудзы" },
        { img: fruits, text: "до 90 % овощных и плодовых культур" },
    ];
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();
        tl.fromTo(
            `.${s.headline}`,
            {
                y: -100,
                opacity: 0,
            },
            { y: 0, opacity: 1, duration: 0.6 }
        )
            .fromTo(
                `.${s.mainText}`,
                {
                    x: -150,
                    opacity: 0,
                },
                { x: 0, opacity: 1, duration: 0.4 }
            )
            .fromTo(
                `.${s.food}`,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.3, stagger: 0.2 }
            );
        gsap.to(`.mainBlock`, {
            yPercent: -40,
            xPercent: -10,
            opacity: 0,
            scrollTrigger: {
                trigger: `.${s.fontSide}`,
                start: "center",
                end: "110%",
                scrub: true,
            },
        });
    }, []);
    return (
        <div className={s.fontSide}>
            <SliderImg img={entBg} />
            <div className={`wrapper ${s.mainBlock} mainBlock`}>
                <div className={s.indent}>
                    <h1 className={s.headline}>Высокоэффективные Энтомофаги</h1>
                    <p className={s.mainText}>
                        Внесение энтофагов при помощи БПЛА увеличивает
                        эффективность защиты растений до 90%
                    </p>
                    <ul>
                        {food.map((e) => {
                            return (
                                <li key={e.img} className={s.food}>
                                    <span className={s.icon}>
                                        <img src={e.img} alt="" />
                                    </span>
                                    <p className={s.desc}>{e.text}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
