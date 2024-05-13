import s from "./MethodOfWork.module.scss";
import bigDrops from "../../../images/leafWbigDrops.png";
import smallDrops from "../../../images/leafWsmallDrops.png";
import cancel from "../../../images/icons/iconCancel.png";
import check from "../../../images/icons/iconCheckGreen.png";
import { useEffect } from "react";
import { animateHeadline } from "../../common/headlineAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const MethodOfWork = () => {
    const drops = [
        {
            picture: bigDrops,
            title: "Стандартная форсунка:",
            list: [
                "Размер капли 250-400 микрон",
                "Большой расход воды",
                "Скатывание капли на землю",
            ],
            positive: false,
        },
        {
            picture: smallDrops,
            title: "Форсунка УМО:",
            list: [
                "Размер капли 80-150 микрон",
                "Более эффективное проникновение рабочего раствора",
                "Препарат оседает на листьях и стеблях не попадая в почву",
            ],
            positive: true,
        },
    ];
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();
        animateHeadline(s.headline);
        gsap.fromTo(
            `.${s.leaf}`,
            {
                opacity: 0,
                y: -100,
                transformOrigin: `top`,
            },
            {
                opacity: 1,
                y: 1,
                duration: 0.4,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: `.${s.method__wrapper}`,
                    start: `-10% center`,
                },
                onComplete: () => {
                    gsap.to(`.${s.leaf}`, {
                        scaleY: 0,
                        scrollTrigger: {
                            trigger: `.${s.method__wrapper}`,
                            start: `80% center`,
                            scrub: 0.5,
                        },
                    });
                },
            }
        );
    }, []);
    return (
        <div className={`${s.wrapper} ${s.method__wrapper}`}>
            <h2 className={s.headline}>Как это работает</h2>
            <div className={s.leafs}>
                <p className={s.subtitle}>дробление капли</p>
                {drops.map((e) => {
                    return (
                        <div className={s.leaf}>
                            <div className={s.leaf__wrapper}>
                                <span className={s.borders}>
                                    <img src={e.picture} alt="" />
                                </span>
                                <div className={s.content}>
                                    <h3>{e.title}</h3>
                                    <ul>
                                        {e.list.map((el) => (
                                            <li>
                                                <img
                                                    src={
                                                        e.positive
                                                            ? check
                                                            : cancel
                                                    }
                                                    alt=""
                                                />
                                                <p>{el}</p>
                                            </li>
                                        ))}
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
