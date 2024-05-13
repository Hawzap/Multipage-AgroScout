import s from "./Benefits.module.scss";
import delivery from "../../../images/icons/iconDelivery.svg";
import drone from "../../../images/icons/iconDroneLocator.svg";
import wallet from "../../../images/icons/wallet.svg";
import security from "../../../images/icons/iconSecurity.svg";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Benefits = () => {
    const cards = [
        {
            icon: delivery,
            title: "Бесплатная доставка",
            desc: "Купить кважракоптер - получить бесплатную доставку",
        },
        {
            icon: drone,
            title: "Пробный первый полет",
            desc: "Краткое обучение и техника безопасности",
        },
        {
            icon: wallet,
            title: "Гарантия лучшей цены",
            desc: "Лучшая цена от официального производителя ",
        },
        {
            icon: security,
            title: "Официальная гарантия",
            desc: "На всю продукцию представленную в магазине",
        },
    ];
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            `.${s.card__wrapper}`,
            {
                opacity: 0,
                y: -80,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: `.${s.cards}`,
                    start: `20% 100%`,
                },
                onComplete: () => {
                    gsap.to(`.${s.card__wrapper}`, {
                        opacity: 0,
                        y: -150,
                        scrollTrigger: {
                            trigger: `.${s.cards}`,
                            start: `60% center`,
                            scrub: 0.6,
                        },
                    });
                },
            }
        );
    }, []);
    return (
        <div className={`wrapper ${s.cards__wrapper}`}>
            <ul className={s.cards}>
                {cards.map((e) => {
                    return (
                        <li className={s.card__wrapper}>
                            <div className={s.card}>
                                <div className={s.card__block}>
                                    <div className={s.title}>
                                        <img src={e.icon} alt="" />
                                        <h2>{e.title}</h2>
                                    </div>
                                    <div className={s.desc}>
                                        <p>{e.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
