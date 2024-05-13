import s from "./AerialPhotographyProcess.module.scss";
import tablet from "../../../images/tablet.png";
import check from "../../../images/icons/iconCheck.svg";
import { useState } from "react";
import { useEffect } from "react";
import { animateHeadline } from "../../common/headlineAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const AerialPhotographyProcess = () => {
    const [toogleStyle, setToogleStyle] = useState(false);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        animateHeadline(s.headline);
        gsap.fromTo(
            `.${s.describe}`,
            {
                y: -70,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: `.${s.phtotography__wrapper}`,
                    start: `10% center`,
                },
            }
        );
        gsap.fromTo(
            `.${s.tabletImg}`,
            {
                x: -150,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                scrollTrigger: {
                    trigger: `.${s.tablet}`,
                    start: `-10% center`,
                },
            }
        );
        gsap.fromTo(
            `.${s.works}`,
            {
                x: 150,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                scrollTrigger: {
                    trigger: `.${s.tablet}`,
                    start: `-10% center`,
                },
            }
        );
        gsap.to(`.${s.phtotography__wrapper}`, {
            y: -200,
            opacity: 0,
            scrollTrigger: {
                trigger: `.${s.phtotography__wrapper}`,
                start: `85% center`,
                scrub: 0.5,
            },
        });
    }, []);
    return (
        <div className={`wrapper ${s.phtotography__wrapper}`}>
            <h2 className={s.headline}>Как это работает</h2>
            <p className={s.describe}>
                Аэрофотосъемки разделяется на этапы полевых и камеральных работ,
                при этом набор данных, получаемых по результатам камеральных
                работ, варьируется в зависимости от требований заказчика
            </p>
            <div className={s.tablet}>
                <img src={tablet} alt="" className={s.tabletImg} />
                <div className={s.works}>
                    <div className={s.worksType}>
                        <div className={s.worksType_wrapper}>
                            <p onClick={() => setToogleStyle(false)}>
                                Полевые работы
                            </p>
                            <p onClick={() => setToogleStyle(true)}>
                                Камеральные работы
                            </p>
                        </div>
                        <div
                            className={`${s.line} ${
                                toogleStyle ? s.activeLine : ""
                            }`}
                        ></div>
                    </div>
                    <ul>
                        <li>
                            <img src={check} alt="" />
                            <p>Получение разрешений на аэрофотосъемку</p>
                        </li>
                        <li>
                            <img src={check} alt="" />
                            <p>
                                Выполнение аэрофотосъемки с использованием БПЛА
                            </p>
                        </li>
                    </ul>
                    <button>Получить консультацию</button>
                </div>
            </div>
        </div>
    );
};
