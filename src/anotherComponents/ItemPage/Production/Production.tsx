import s from "./Production.module.scss";
import casting from "../../../images/casting.png";
import tank from "../../../images/tank.png";
import pump from "../../../images/pump.png";
import effectiveWidth from "../../../images/effectiveWidth.png";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Production = () => {
    const production = [
        {
            img: casting,
            title: "Литье под давлением «все в одном»",
            info: "Простой и последовательный, простой в обслуживании",
        },
        {
            img: tank,
            title: "Резурвуар для воды объемом 22 литров",
            info: "Полностью встроенный магниточувствительный датчик уровня жидкости, обратная связь в режиме реального времени об использовании пестицидов",
        },
        {
            img: pump,
            title: "Четырехходовой настенный бесщеточный водяной насос",
            info: "Точно контролирует объем распыления с максимальной скоростью потока 8 литров в минуту.",
        },
        {
            img: effectiveWidth,
            title: "Эффективная ширина распыления T-типа",
            info: "Форсунка для сброса давления может достигать 8 метров, а производительность составляет 4-14 га/час .",
        },
    ];
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const scrollTgEnd = {
            trigger: `.${s.production__wrapper}`,
            start: `65% top`,
            scrub: 0.7,
        };
        gsap.fromTo(
            `.${s.productionImg}`,
            {
                opacity: 0,
                y: -100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: `.${s.productionProcess}`,
                    start: `-10% center`,
                },
            }
        );
        gsap.fromTo(
            `.${s.title}`,
            {
                opacity: 0,
                x: -100,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.7,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: `.${s.productionProcess}`,
                    start: `10% center`,
                },
            }
        );
        gsap.fromTo(
            `.info`,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: `.${s.productionProcess}`,
                    start: `10% center`,
                },
            }
        );
        gsap.to(`.${s.production}:nth-child(odd)`, {
            yPercent: -50,
            xPercent: -40,
            opacity: 0,
            scrollTrigger: scrollTgEnd,
        });
        gsap.to(`.${s.production}:nth-child(even)`, {
            yPercent: -50,
            xPercent: 40,
            opacity: 0,
            scrollTrigger: scrollTgEnd,
        });
    }, []);
    return (
        <div className={`wrapper ${s.production__wrapper}`}>
            <div className={s.productionProcess__wrapper}>
                <p className={s.subTitle}>комплектация</p>
                <div className={s.productionProcess}>
                    {production.map((e) => {
                        return (
                            <div className={s.production}>
                                <span className={s.productionImg}>
                                    <img src={e.img} alt="" />
                                </span>
                                <h2 className={s.title}>{e.title}</h2>
                                <p className={`${s.info} info`}>{e.info}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
