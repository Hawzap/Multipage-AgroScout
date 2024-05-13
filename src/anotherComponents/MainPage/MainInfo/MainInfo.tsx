import s from "./MainInfo.module.scss";
import dronbg from "../../../images/dronbg.jpg";
import flyingDrone from "../../../images/icons/iconDrone_flying.svg";
import { SliderImg } from "../../common/SliderImg/SliderImg";
import { useEffect } from "react";
import gsap from "gsap";

export const MainInfo = () => {
    useEffect(() => {
        gsap.fromTo(
            `.${s.headline}`,
            {
                x: -100,
                opacity: 0,
            },
            { x: 0, opacity: 1, duration: 0.7 }
        );
        gsap.fromTo(
            `.${s.droneIcon}`,
            { x: "-100%" },
            { x: 0, duration: 1, delay: 0.25 }
        );
        gsap.fromTo(
            `.mainInfoLi`,
            {
                scale: 0,
                opacity: 0,
            },
            { scale: 1, opacity: 1, duration: 0.4, stagger: 0.3 }
        );
    }, []);
    return (
        <div className={s.fontSide}>
            <SliderImg img={dronbg} />
            <div className={`wrapper ${s.mainBlock}`}>
                <div className={s.indent}>
                    <h1 className={s.headline}>
                        AgroScout - беспилотные технологии для сельского
                        хозяйства и промышлености
                    </h1>
                </div>
            </div>
            <div className={s.droneIcon}>
                <img src={flyingDrone} alt="" className={s.droneImg} />
            </div>
            <div className={`wrapper ${s.mainBlock}`}>
                <div className={s.indent}>
                    <ul>
                        <li className={`mainInfoLi`}>
                            <p>50 000 Га</p>
                            <p>ежегодной обработки</p>
                        </li>
                        <li className={`mainInfoLi`}>
                            <p>30%</p>
                            <p>экономии средств</p>
                        </li>
                        <li className={`mainInfoLi`}>
                            <p>10 команд</p>
                            <p>специалистов</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
