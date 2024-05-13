import s from "./News.module.scss";
import droneNews from "../../../images/droneNews.jpg";
import droneReasone from "../../../images/droneReasone.jpg";
import creating from "../../../images/creating.jpg";
import { useEffect } from "react";
import { animateHeadline } from "../../common/headlineAnimation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export const News = () => {
    const news = [
        {
            image: droneNews,
            title: "Дроны – будущее сельского хозяйства",
            content:
                "Новые технологии не обходят стороной и самую консервативную отрасль – сельское хозяйство. Согласно прогнозам международной общественной организации Association for Unmanned Vehicle Systems International, в скором времени агросектор станет крупнейшим потребителем дронов – беспилотных летательных аппаратов (БПЛА).",
        },
        {
            image: droneReasone,
            title: "Зачем нужны беспилотники в сельском хозяйстве?",
            content:
                "Использование дронов в земледелии и в целом в сельском хозяйстве - одно из наиболее перспективных направлений применения этой технологии. БПЛА могут быть эффективно использованы для планирования и контроля этапов сельскохозяйственного производства, а также для химической обработки посевов и других растений. ",
        },
        {
            image: creating,
            title: "Создание цифровых карт и контуров полей",
            content:
                "Многие руководители агрохозяйств только приблизительно знают площади своих полей, и это негативно влияет на точность расчетов внесения минудобрений и подсчета полученной продукции. Чтобы эффективно управлять сельскохозяйственным предприятием потребуется точное знание посевных площадей.",
        },
    ];
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        animateHeadline(s.headline);
        gsap.fromTo(
            `.${s.news}`,
            {
                opacity: 0,
                x: -200,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: `.${s.news__wrapper}`,
                    start: `-40% 100%`,
                    end: `center center`,
                    scrub: 1,
                },
            }
        );
    }, []);
    return (
        <div className={`wrapper ${s.news__wrapper}`}>
            <h2 className={s.headline}>Что у нас нового</h2>
            <div className={s.news__container}>
                {news.map((e) => {
                    return (
                        <div className={s.news}>
                            <div className={s.img__wrapper}>
                                <img src={e.image} alt="" />
                            </div>
                            <h3>{e.title}</h3>
                            <p>{e.content}</p>
                            <span>
                                <a href="" className={s.readMore}>
                                    Читать полностью
                                </a>
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
