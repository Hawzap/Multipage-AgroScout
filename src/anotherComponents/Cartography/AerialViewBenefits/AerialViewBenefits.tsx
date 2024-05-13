import s from "./AerialViewBenefits.module.scss";
import currency from "../../../images/icons/iconCurrency.svg";
import oclock from "../../../images/icons/iconTime.svg";
import resolution from "../../../images/icons/iconResolution.svg";
import coordinates from "../../../images/icons/iconCoordinates.svg";
import { useEffect } from "react";
import { animateHeadline } from "../../common/headlineAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const AerialViewBenefits = () => {
    const benefits = [
        {
            icon: currency,
            title: "Низкая цена аэрофотосъемка",
            mainText:
                "Стоимость беспилотной аэрофотосъемка в разы меньше стоимости получения данных спутниковой съемки, а также традиционных методов приведения геодезических изысканий.",
        },
        {
            icon: oclock,
            title: "Высокая производительность",
            mainText:
                "За день может быть выполнена съемка до нескольких сотен квадратных километров.",
        },
        {
            icon: resolution,
            title: "Высокие разрешение снимков ",
            mainText:
                "Беспилотники Геоскана позволяют получать снимки с пространственным разрешением до 1см/пикс, что обеспечивает высокий уровень детализации получаемых моделей и ортофотопланов.",
        },
        {
            icon: coordinates,
            title: "Работа в требуемой системе координат",
            mainText:
                "Результаты полета- геопривязанные фотографии, которым в процессе обработки можно задать привязку к необходимой системе координат",
        },
    ];
    useEffect(() => {
        const scrollTg = {
            trigger: `.${s.benefits}`,
            start: `-10% center`,
        };
        gsap.registerPlugin(ScrollTrigger);
        animateHeadline(s.headline);
        gsap.fromTo(
            `.${s.benefit}:first-child`,
            {
                y: -150,
                x: -150,
                opacity: 0,
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                duration: 0.5,
                scrollTrigger: scrollTg,
                onComplete: () => {
                    gsap.to(`.${s.benefit}:first-child`, {
                        x: -200,
                        opacity: 0,
                        scrollTrigger: {
                            trigger: `.${s.benefits}`,
                            start: `80% center`,
                            scrub: 0.7,
                        },
                    });
                },
            }
        );
        gsap.fromTo(
            `.${s.benefit}:nth-child(2)`,
            {
                y: -150,
                x: 150,
                opacity: 0,
                // scale: 0,
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                // scale: 1,
                duration: 0.5,
                scrollTrigger: scrollTg,
                onComplete: () => {
                    gsap.to(`.${s.benefit}:nth-child(2)`, {
                        x: 200,
                        opacity: 0,
                        scrollTrigger: {
                            trigger: `.${s.benefits}`,
                            start: `80% center`,
                            scrub: 0.7,
                        },
                    });
                },
            }
        );
        gsap.fromTo(
            `.${s.benefit}:nth-child(3)`,
            {
                y: 150,
                x: -150,
                opacity: 0,
                // scale: 0,
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                // scale: 1,
                duration: 0.5,
                scrollTrigger: scrollTg,
                onComplete: () => {
                    gsap.to(`.${s.benefit}:nth-child(3)`, {
                        x: -200,
                        opacity: 0,
                        scrollTrigger: {
                            trigger: `.${s.benefits}`,
                            start: `80% center`,
                            scrub: 0.7,
                        },
                    });
                },
            }
        );
        gsap.fromTo(
            `.${s.benefit}:last-child`,
            {
                y: 150,
                x: 150,
                opacity: 0,
                // scale: 0,
            },
            {
                x: 0,
                y: 0,
                opacity: 1,
                // scale: 1,
                duration: 0.5,
                scrollTrigger: scrollTg,
                onComplete: () => {
                    gsap.to(`.${s.benefit}:last-child`, {
                        x: 200,
                        opacity: 0,
                        scrollTrigger: {
                            trigger: `.${s.benefits}`,
                            start: `80% center`,
                            scrub: 0.7,
                        },
                    });
                },
            }
        );
    }, []);
    return (
        <div className={`wrapper ${s.benefits__wrapper}`}>
            <h2 className={s.headline}>Плюсы аэрофотосъемки</h2>
            <div className={s.benefits__block}>
                <p className={s.subtitle}>преимущества</p>
                <div className={s.benefits}>
                    {benefits.map((e) => {
                        return (
                            <div className={s.benefit}>
                                <div className={s.wrapper__benefit}>
                                    <div className={s.title}>
                                        <img src={e.icon} alt="" />
                                        <h3>{e.title}</h3>
                                    </div>
                                    <p>{e.mainText}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
