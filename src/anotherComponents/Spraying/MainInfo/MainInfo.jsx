import { SliderImg } from "../../common/SliderImg/SliderImg";
import s from "./MainInfo.module.scss";
import sprayingBg from "../../../images/bgDroneSpraying.jpg";
import { useEffect } from "react";
import gsap from "gsap";
import { animateHeadline } from "../../common/headlineAnimation";

export const MainInfo = () => {
    useEffect(() => {
        gsap.fromTo(
            `.${s.mainText}`,
            {
                opacity: 0,
                y: -150,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: 0.4,
            }
        );
        gsap.fromTo(
            `.${s.headline}`,
            {
                x: -150,
                opacity: 0,
            },
            { x: 0, opacity: 1, duration: 0.5 }
        );
    }, []);
    return (
        <div className={s.fontSide}>
            <SliderImg img={sprayingBg} />
            <div className={`wrapper ${s.mainBlock}`}>
                <div className={s.indent}>
                    <h1 className={s.headline}>Опрыскивание полей Дронами</h1>
                    <p className={s.mainText}>
                        Внесение средств защиты при помощи БПЛА повышают урожай,
                        экономят время и находят самые эффективные решения по
                        обработке полей.
                    </p>
                </div>
            </div>
        </div>
    );
};
