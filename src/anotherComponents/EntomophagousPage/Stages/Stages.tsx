import { useEffect } from "react";
import s from "./Stages.module.scss";
import stageArrow from "../../../images/icons/iconDown.png";
import gsap from "gsap";
import { animateHeadline } from "../../common/headlineAnimation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Stages = () => {
    const stages = [
        {
            firstChild: {
                id: 1,
                mainText: "Исследуем состояние посевов  и популяцию вредителей",
                subText: "определяем необходимые энтомофаги",
            },
            secondChild: {
                id: 2,
                mainText:
                    "Определяем наиболее эффективные энтомофаги и график их внесения",
                subText: "исследуем посевы",
            },
        },
        {
            firstChild: {
                id: 3,
                mainText:
                    "Выращиваем необходимую популяцию энтомофагов в собственной лаборатории",
                subText: "вносим энтомофагов при помощи БПЛА",
            },
            secondChild: {
                id: 4,
                mainText:
                    "Вносим энтомофаги по уникальной схеме на поля при помощи дронов",
                subText: "выращиваем энтомофагов",
            },
        },
    ];
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        animateHeadline(s.headline);
        gsap.fromTo(
            `.${s.stage__info}`,
            {
                opacity: 0,
                x: -150,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.4,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: `.${s.stages}`,
                },
            }
        );
        gsap.fromTo(
            `.${s.stageInfoArrow}`,
            {
                opacity: 0,
                scale: 0,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                stagger: 0.3,
                delay: 0.4,
                scrollTrigger: {
                    trigger: `.${s.stages}`,
                },
            }
        );
        gsap.fromTo(
            `.${s.subText}`,
            {
                opacity: 0,
                scale: 0,
                transformOrigin: `center`,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: `.${s.stages}`,
                },
            }
        );
    }, []);
    return (
        <div className={`wrapper ${s.stages__wrapper}`}>
            <h2 className={s.headline}>Этапы работы</h2>
            <div className={s.stages}>
                {stages.map((e) => {
                    return (
                        <div className={s.stageBlock}>
                            <div className={s.stage}>
                                <div className={s.stage__infoWrapper}>
                                    <div className={s.stage__info}>
                                        <span className={s.number}>
                                            {e.firstChild.id}
                                        </span>
                                        <p>{e.firstChild.mainText}</p>
                                    </div>
                                    <span className={s.stageInfoArrow}>
                                        <img src={stageArrow} alt="" />
                                    </span>
                                </div>
                                <p className={s.subText}>
                                    {e.firstChild.subText}
                                </p>
                            </div>
                            <div className={s.stage}>
                                <div className={s.stage__infoWrapper}>
                                    <div className={s.stage__info}>
                                        <span className={s.number}>
                                            {e.secondChild.id}
                                        </span>
                                        <p>{e.secondChild.mainText}</p>
                                    </div>
                                    <span className={s.stageInfoArrow}>
                                        <img src={stageArrow} alt="" />
                                    </span>
                                </div>
                                <p className={s.subText}>
                                    {e.secondChild.subText}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
