import s from "./Disadvantages.module.scss";
import spray from "../../../images/icons/iconSpray.svg";
import tractor from "../../../images/icons/iconTractor.svg";
import plane from "../../../images/icons/icoPlane.svg";
import cancel from "../../../images/icons/iconCancel.png";
import { useEffect } from "react";
import { animateHeadline } from "../../common/headlineAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Disadvantages = () => {
    const disadvantages = [
        {
            icon: spray,
            headline: "Экономия",
            disadvantagesList: [
                "Низкая скорость обработки",
                "Низкая производительность труда",
                "Опасно для здоровья",
            ],
        },
        {
            icon: tractor,
            headline: "Эффективность",
            disadvantagesList: [
                "Нежелательное уплотнение почвы",
                "Не обрабатывают поля со сложным рельефом",
                "Большой расход воды и химикатов",
                "Невозможность работы в рисовых чеках",
            ],
        },
        {
            icon: plane,
            headline: "Оперативность",
            disadvantagesList: [
                "Необходимость согласования работ",
                "Скорость обработки одним БПЛА до 30 га/час",
                "Высокая стоимость",
            ],
        },
    ];
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();
        animateHeadline(s.headline);
        gsap.fromTo(
            `.${s.benefit}`,
            {
                opacity: 0,
                scaleY: 0,
                transformOrigin: `top`,
            },
            {
                opacity: 1,
                scaleY: 1,
                duration: 0.4,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: `.${s.benefits}`,
                    start: `-20% center`,
                },
                onComplete: () => {
                    gsap.to(`.${s.benefit}`, {
                        opacity: 0,
                        y: -150,
                        scrollTrigger: {
                            trigger: `.${s.benefits}`,
                            scrub: 0.3,
                            start: `70% center`,
                        },
                    });
                },
            }
        );
    }, []);
    return (
        <div className={`${s.wrapper} ${s.spraying__wrapper}`}>
            <h2 className={s.headline}>Положительные стороны</h2>
            <div className={s.benefits}>
                {disadvantages.map((e, i) => {
                    return (
                        <div className={s.benefit}>
                            {i == 0 ? (
                                <p className={s.subtitle}>минусы</p>
                            ) : (
                                <></>
                            )}
                            <div className={s.benefit__wrapper}>
                                <div className={s.title}>
                                    <img src={e.icon} alt="" />
                                    <h3>{e.headline}</h3>
                                </div>
                                <hr color="#02E502" />
                                <div className={s.content}>
                                    <ul>
                                        {e.disadvantagesList.map((e) => {
                                            return (
                                                <li>
                                                    <img src={cancel} alt="" />
                                                    <p>{e}</p>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
