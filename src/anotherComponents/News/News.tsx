import s from "./News.module.scss";
import spraying from "./../../images/spraying.jpg";
import droneNews from "./../../images/droneNews.jpg";
import droneReason from "./../../images/droneReasone.jpg";
import creating from "./../../images/creating.jpg";
import { Routing } from "../common/Routing/Routing";
import { useEffect } from "react";
import gsap from "gsap";
import { animateHeadline } from "../common/headlineAnimation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const News = () => {
    const news = [
        {
            picture: spraying,
            headline: "Опрыскивание растений с беспилотников",
            date: "22/04/2019 00:00",
            newsParagraph:
                "Опрыскивание с дронов может проводиться как минимум в двух форматах: “классическом авиационном”, когда химикаты распыляются по всему полю, и “точечном”, совмещенным, например, с предварительным осмотром посевов при помощи мультиспектральных камер.",
        },
        {
            picture: droneNews,
            headline: "Дроны – будущее сельского хозяйства",
            date: "10/04/2019 00:00",
            newsParagraph:
                "Новые технологии не обходят стороной и самую консервативную отрасль – сельское хозяйство. Согласно прогнозам международной общественной организации Association for Unmanned Vehicle Systems International, в скором времени агросектор станет крупнейшим потребителем дронов – беспилотных летательных аппаратов (БПЛА).",
        },
        {
            picture: droneReason,
            headline: "Зачем нужны беспилотники в сельском хозяйстве?",
            date: "14/03/2019 00:00",
            newsParagraph:
                "Использование дронов в земледелии и в целом в сельском хозяйстве - одно из наиболее перспективных направлений применения этой технологии. БЛА могут быть эффективно использованы для планирования и контроля этапов сельскохозяйственного производства, а также для химической обработки посевов и других растений. ",
        },
        {
            picture: creating,
            headline: "Создание цифровых карт и контуров полей",
            date: "05/03/2019 00:00",
            newsParagraph:
                "Многие руководители агрохозяйств только приблизительно знают площади своих полей, и это негативно влияет на точность расчетов внесения минудобрений и подсчета полученной продукции. Чтобы эффективно управлять сельскохозяйственным предприятием потребуется точное знание посевных площадей.",
        },
    ];
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        animateHeadline(s.headline);
        gsap.utils.toArray(`.${s.new}`).forEach((e: any) => {
            const img = e.children[0];
            const title = e.children[1].children[0].children[0];
            const date = e.children[1].children[0].children[1];
            const mainInfo = e.children[1].children[1];
            const readMore = e.children[1].children[2].children[0];
            const line = e.children[1].children[2].children[1];
            const scrollTg = {
                trigger: e,
                start: `5% 64%`,
            };
            gsap.fromTo(
                img,
                {
                    opacity: 0,
                    scale: 0,
                    transformOrigin: `center`,
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                    scrollTrigger: scrollTg,
                }
            );
            gsap.fromTo(
                title,
                {
                    x: -65,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: 0.2,
                    scrollTrigger: scrollTg,
                }
            );
            gsap.fromTo(
                date,
                {
                    x: 70,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.4,
                    delay: 0.5,
                    scrollTrigger: scrollTg,
                }
            );
            gsap.fromTo(
                mainInfo,
                {
                    y: -50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.7,
                    scrollTrigger: scrollTg,
                }
            );
            gsap.fromTo(
                readMore,
                {
                    x: -70,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: e,
                        start: `5% center`,
                    },
                }
            );
            gsap.fromTo(
                line,
                {
                    scaleX: 0,
                    transformOrigin: `center`,
                },
                {
                    scaleX: 1,
                    duration: 0.3,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: e,
                        start: `5% center`,
                    },
                }
            );
        });
        gsap.fromTo(
            `.${s.paging} ul li`,
            {
                y: -50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: `.${s.paging} ul`,
                },
            }
        );
    }, []);
    return (
        <div className={`${s.news__wrapper}`}>
            <div className={s.header__info}>
                <Routing page="Новости" />
                <h2 className={s.headline}>Что у нас нового?</h2>
            </div>
            <div className={s.news}>
                <p className={s.subtitleTop}>наши новости</p>
                {news.map((e) => {
                    return (
                        <div className={s.new}>
                            <span className={s.border}>
                                <img src={e.picture} alt="" />
                            </span>
                            <div className={s.info}>
                                <div className={s.blockTitle}>
                                    <h3>{e.headline}</h3>
                                    <p>{e.date}</p>
                                </div>
                                <p className={s.paragraph}>{e.newsParagraph}</p>
                                <div className={s.readMore}>
                                    <a href="#">Читать полностью</a>
                                    <span className={s.line}></span>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <p className={s.subtitleBottom}>что у нас нового</p>
            </div>
            <div className={s.paging}>
                <ul>
                    {[1, 2, 3, 4].map((e, i) => {
                        return <li className={i == 0 ? s.active : ""}>{e}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};
