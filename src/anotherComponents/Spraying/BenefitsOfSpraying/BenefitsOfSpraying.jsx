import s from "./BenefitsOfSpraying.module.scss";
import wallet from "../../../images/icons/wallet.svg";
import efficiency from "../../../images/icons/efficiency.svg";
import oclock from "../../../images/icons/iconTime.svg";
import check from "../../../images/icons/iconCheck.svg";
import { useEffect } from "react";
import { animateHeadline } from "../../common/headlineAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const BenefitsOfSpraying = () => {
    const benefits = [
        {
            icon: wallet,
            headline: "Экономия",
            benefitsList: [
                "Снижение расхода препаратов до 30%",
                "Проведение работ без уплотнения почвы +5-10% к урожаю",
                "Обработка высоких культур без повреждений",
                "Операционные издержки— экономия на использовании ГСМ, заработной платы и обслуживании техники",
            ],
        },
        {
            icon: efficiency,
            headline: "Эффективность",
            benefitsList: [
                "Работаем по любой геометрии поля",
                "Возможность работать на влажных грунтах, на крутых склонах, под линиями электропередач, вблизи населенных пунктов и водоемов",
                "Большее количество капель на единицу площади",
                "Отсутствует необходимость подвоза большого количества воды",
                "Обработка листа со всех сторон",
            ],
        },
        {
            icon: oclock,
            headline: "Оперативность",
            benefitsList: [
                "Возможность защиты ваших растений до 1000 га за рабочую смену",
                "Круглосуточный режим работы",
                "Плановые и внеплановые обработки по требованию",
                "Точечная обработка СЗР в требуемых местах",
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
                {benefits.map((e, i) => {
                    return (
                        <div className={s.benefit}>
                            {i == 0 ? (
                                <p className={s.subtitle}>плюсы</p>
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
                                        {e.benefitsList.map((e) => {
                                            return (
                                                <li>
                                                    <img src={check} alt="" />
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
