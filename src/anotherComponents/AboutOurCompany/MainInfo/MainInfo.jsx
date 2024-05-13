import s from "./MainInfo.module.scss";
import aboutBg from "../../../images/bgAboutCompany.jpg";
import flyingDrone from "../../../images/icons/iconDrone_flying.svg";
import { SliderImg } from "../../common/SliderImg/SliderImg";
import { useEffect } from "react";
import gsap from "gsap";

export const MainInfo = () => {
    useEffect(() => {
        gsap.fromTo(
            `.${s.headline}`,
            {
                opacity: 0,
                x: -150,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                ease: "power2.inOut",
            }
        );
        gsap.fromTo(
            `.${s.subText}`,
            {
                opacity: 0,
                y: -80,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.4,
                delay: 0.3,
                ease: "sine.in",
            }
        );
        gsap.fromTo(
            `.${s.droneIcon}`,
            {
                opacity: 0,
                x: -300,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.9,
                delay: 0.6,
                ease: "power4.out",
            }
        );
        gsap.fromTo(
            `.${s.indent} ul li`,
            {
                opacity: 0,
                scaleY: 0,
                transformOrigin: `top`,
            },
            {
                opacity: 1,
                scaleY: 1,
                duration: 0.4,
                delay: 0.8,
                stagger: 0.2,
                ease: "sine",
            }
        );
    }, []);
    return (
        <div className={s.fontSide}>
            <SliderImg img={aboutBg} />
            <div className={`wrapper ${s.mainBlock}`}>
                <div className={s.indent}>
                    <h1 className={s.headline}>О компании AgroScout</h1>
                    <p className={s.subText}>
                        Наша команда состоит из профессионалов в области
                        эффективного применения беспилотных летательных
                        аппаратов
                    </p>
                </div>
            </div>
            <div className={s.droneIcon}>
                <img src={flyingDrone} alt="" className={s.droneImg} />
            </div>
            <div className={`wrapper ${s.mainBlock}`}>
                <div className={s.indent}>
                    <ul>
                        <li>
                            <p>50 000 Га</p>
                            <p>ежегодной обработки</p>
                        </li>
                        <li>
                            <p>30%</p>
                            <p>экономии средств</p>
                        </li>
                        <li>
                            <p>10 команд</p>
                            <p>специалистов</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
