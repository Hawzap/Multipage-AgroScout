import s from "./UseOfPhotography.module.scss";
import harvest from "../../../images/useOfPhotography/iconHarvest.svg";
import forest from "../../../images/useOfPhotography/iconForest.svg";
import blueprint from "../../../images/useOfPhotography/iconBlueprint.png";
import power from "../../../images/useOfPhotography/iconPower.svg";
import building from "../../../images/useOfPhotography/iconBuilding.svg";
import house from "../../../images/useOfPhotography/iconHouse.svg";
import mountains from "../../../images/useOfPhotography/iconMountains.svg";
import thermometer from "../../../images/useOfPhotography/iconThermometer.svg";
import land from "../../../images/useOfPhotography/Land.jpg";
import { useEffect } from "react";
import { animateHeadline } from "../../common/headlineAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const UseOfPhotography = () => {
    const useOf = [
        { icon: harvest, text: "Сельское хозяйство" },
        { icon: forest, text: "Лесное хозяйство" },
        { icon: blueprint, text: "Геодезия" },
        { icon: power, text: "Энергетика" },
        { icon: building, text: "Строительство" },
        { icon: house, text: "Градостроительство" },
        { icon: mountains, text: "Маркшейдерия" },
        { icon: thermometer, text: "Тепловизионная съемка" },
    ];
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        animateHeadline(s.headline);
        gsap.fromTo(
            `.${s.useOF} ul li`,
            {
                x: -90,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: `.${s.useof__wrapper}`,
                    start: `10% center`,
                },
            }
        );
        gsap.fromTo(
            `.land p`,
            {
                y: -80,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                scrollTrigger: {
                    trigger: `.${s.useof__wrapper}`,
                    start: `-10% center`,
                },
            }
        );
        gsap.fromTo(
            `.land img`,
            {
                scale: 0,
                transformOrigin: `center`,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                scrollTrigger: {
                    trigger: `.${s.useof__wrapper}`,
                    start: `top center`,
                },
            }
        );
        gsap.to(`.${s.useof__wrapper}`, {
            y: -200,
            opacity: 0,
            scrollTrigger: {
                trigger: `.${s.useof__wrapper}`,
                start: `85% center`,
                scrub: 0.5,
            },
        });
    }, []);
    return (
        <div className={`wrapper ${s.useof__wrapper}`}>
            <h2 className={s.headline}>Области применения</h2>
            <div className={s.useOF}>
                <ul>
                    {useOf.map((e) => (
                        <li key={e.icon}>
                            <img src={e.icon} alt="" />
                            <div className={s.info}>
                                <p>{e.text}</p>
                                <div className={s.line}></div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className={`${s.land} land`}>
                    <p>
                        Инвентаризация сельхозугодий, состояние посевов и
                        всхожести, развития заболеваний, количества растений при
                        рядной посадке, зарастания сорняками, состояния
                        переувлажненных или засушливых участков полей, расчет
                        NDVI и других индексов. Мониторинг техники,
                        сопровождение агротехнических мероприятий
                    </p>
                    <img src={land} alt="" />
                </div>
            </div>
        </div>
    );
};
