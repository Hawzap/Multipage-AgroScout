import s from "./Solutions.module.scss";
import fldron from "../../../images/iconDrone_flyingGray.svg";
import lines from "../../../images/iconLine.svg";
import { useEffect } from "react";
import { animateHeadline } from "../../common/headlineAnimation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Solutions = () => {
    const solutions = [
        "Уничтожение опылителей (пчелы, шмели). ",
        "Уничтожения природных энтомофагов (златоглазки, божьи коровки и т.д",
        "Дефицита воды для опрыскивания",
        "Потеря урожая от работы тяжелой техники",
        "Уничтожение на посевах таких вредителей как совки, огневки, кукурузные и стеблевые мотельки, тля, клещи. ",
        "Резистентности у вредителей к химическим препаратам, что ведет за собой увеличение инсектицидной нагрузки, соответственно увеличение бюджета на защиту растений.",
    ];
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        animateHeadline(s.headline);
        gsap.fromTo(
            `.solution`,
            {
                opacity: 0,
                scaleX: 0,
                transformOrigin: `left`,
            },
            {
                opacity: 1,
                scaleX: 1,
                duration: 0.4,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: `.${s.sl__wr}`,
                    start: `-40% 60%`,
                    scrub: 0.2,
                    end: "55% 45%",
                },
                onComplete: () => {
                    gsap.to(`.solution`, {
                        y: -150,
                        opacity: 0,
                        duration: 0.4,
                        scrollTrigger: {
                            trigger: `.${s.solutions}`,
                            start: "80% center",
                            scrub: 0.3,
                        },
                    });
                },
            }
        );
    }, []);
    return (
        <div className={s.sl__wr}>
            <img src={lines} alt="" className={s.lines} />
            <img src={fldron} alt="" className={s.dron} />
            <div className={`wrapper ${s.solutions__wrapper}`}>
                <h2 className={s.headline}>Проблемы которые мы решаем</h2>
                <ul className={s.solutions}>
                    {solutions.map((e, i) => {
                        return (
                            <li className={`${s.solution} solution`}>
                                <span>{i + 1}</span>
                                <p>{e}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
