import { useEffect } from "react";
import s from "./Help.module.scss";
import lines from "../../../images/iconLine.svg";
import drone from "../../../images/helpBgDrone.png";
import { animateHeadline } from "../headlineAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Help = () => {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.${s.help__wrapper}`,
                start: `0% center`,
            },
        });
        gsap.registerPlugin(ScrollTrigger);
        animateHeadline(s.headline);
        gsap.fromTo(
            `.formP`,
            {
                opacity: 0,
                y: -100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: `.${s.help__wrapper}`,
                },
            }
        );
        tl.fromTo(
            `.${s.form} input`,
            {
                opacity: 0,
                x: -100,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.3,
            }
        )
            .fromTo(
                `.${s.form} button`,
                {
                    opacity: 0,
                    x: -100,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                }
            )
            .fromTo(
                `.${s.confidence}`,
                {
                    opacity: 0,
                    y: -50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                }
            );
        gsap.fromTo(
            `.${s.linesBg}`,
            {
                opacity: 0,
                scale: 0,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                delay: 1.3,
                scrollTrigger: {
                    trigger: `.${s.help__wrapper}`,
                },
            }
        );
        gsap.fromTo(
            `.${s.droneBg}`,
            {
                opacity: 0,
                scale: 0,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                delay: 2,
                scrollTrigger: {
                    trigger: `.${s.help__wrapper}`,
                },
            }
        );
    }, []);
    return (
        <div className={`wrapper ${s.help__wrapper}`}>
            <div className={s.help__container}>
                <img src={drone} alt="" className={s.droneBg} />
                <img src={lines} alt="" className={s.linesBg} />
                <div className={s.help__content}>
                    <h2 className={s.headline}>Напишите нам</h2>
                    <p className={`${s.formInfo} formP`}>
                        Заполните форму и мы за 5 минут подскажем вам лучшие
                        способы защиты вашего урожая{" "}
                    </p>
                    <div className={s.form}>
                        <input type="text" placeholder="Ваше имя" />
                        <input type="text" placeholder="Ваш телефон" />
                        <input type="text" placeholder="Ваш Emai" />
                        <button>Отправить</button>
                    </div>
                    <p className={s.confidence}>Политика конфидициальности</p>
                </div>
            </div>
        </div>
    );
};
