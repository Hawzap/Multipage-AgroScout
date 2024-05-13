import s from "./BugInfo.module.scss";
import butterfly from "../../../images/icons/butterfly.png";
import check from "../../../images/icons/iconCheck.svg";
import { useEffect } from "react";
import { animateHeadline } from "../headlineAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type BugInfoProps = {
    headline: {
        green: string;
        black: string;
    };
    explanation: string;
    picture: string;
    subTitle: string;
    bugInfo: {
        paragraph: string[];
        againstWhat: string[];
        efficiency: string;
    };
    isReverse?: boolean;
    uniqueStyle?: string;
};

export const BugInfo: React.FC<BugInfoProps> = ({
    uniqueStyle,
    headline,
    explanation,
    picture,
    subTitle,
    bugInfo,
    isReverse = false,
}) => {
    useEffect(() => {
        const unique = `bug__wrapper${uniqueStyle}`;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.${unique}`,
                start: "30% center",
            },
        });
        gsap.registerPlugin(ScrollTrigger);
        animateHeadline(s.headline, unique);
        gsap.fromTo(
            `.${unique} .${s.explanation}`,
            {
                opacity: 0,
                x: -200,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: `.${unique}`,
                },
            }
        );
        gsap.fromTo(
            `.${unique} .${s.border}`,
            {
                scale: 0,
                opacity: 0,
                transform: `transform: translate(-55%, -50%)`,
                transformOrigin: "center",
            },
            {
                scale: 1,
                opacity: 1,
                transform: `transform: translate(-55%, -50%)`,
                duration: 0.5,
                scrollTrigger: {
                    trigger: `.${unique}`,
                    start: "30% center",
                },
            }
        );
        gsap.fromTo(
            `.${unique} .${s.bug__info}`,
            {
                opacity: 0,
                y: -150,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: `.${unique}`,
                    start: "20% center",
                },
            }
        );
        gsap.fromTo(
            `.${unique} .${s.bug__info}`,
            {
                opacity: 0,
                y: -150,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: `.${unique}`,
                    start: "20% center",
                },
            }
        );
        tl.fromTo(
            `.${unique} .${s.subHeadline} .butterFlyImg`,
            {
                opacity: 0,
                scale: 0,
                transformOrigin: `center`,
            },
            { opacity: 1, scale: 1, duration: 0.4 }
        ).fromTo(
            `.${unique} .${s.subHeadline} h3`,
            {
                opacity: 0,
                scaleX: 0,
                transformOrigin: `left`,
            },
            { opacity: 1, scaleX: 1, duration: 0.5 }
        );
        gsap.fromTo(
            `.${unique} .${s.reasons} ul li p`,
            {
                opacity: 0,
                x: -20,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.3,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: `.${unique}`,
                    start: "40% center",
                },
            }
        );
    }, []);
    return (
        <div className={`wrapper ${s.bug__wrapper} bug__wrapper${uniqueStyle}`}>
            <h2 className={s.headline} data-foo={headline.green}>
                {headline.black}
            </h2>
            <p className={s.explanation}>{explanation}</p>
            <div className={`${s.bug} ${isReverse ? s.reversed : ""}`}>
                <p className={s.subTitle}>{subTitle}</p>
                <div className={s.info}>
                    <span className={s.border}>
                        <img src={picture} alt="" />
                    </span>
                    <div className={s.main__info}>
                        <div className={s.paragraph}>
                            {bugInfo.paragraph.map((e) => {
                                return <p className={s.bug__info}>{e}</p>;
                            })}
                        </div>
                        <div className={s.reasons}>
                            <div className={s.subHeadline}>
                                <span className="butterFlyImg">
                                    <img src={butterfly} alt="" />
                                </span>
                                <h3>{bugInfo.efficiency}</h3>
                            </div>
                            <ul>
                                {bugInfo.againstWhat.map((e) => {
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
            </div>
        </div>
    );
};
