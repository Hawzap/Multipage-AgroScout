import { useEffect } from "react";
import s from "./Service.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Service = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.${s.service__wrapper}`,
                start: "top center",
            },
        });
        tl.fromTo(
            `.${s.title}`,
            {
                opacity: 0,
                scale: 0,
                transformOrigin: "left",
                x: -100,
            },
            {
                opacity: 1,
                scale: 1,
                x: 0,
                duration: 0.4,
            }
        )
            .fromTo(
                `.${s.paragraph}`,
                {
                    opacity: 0,
                    scale: 0,
                    transformOrigin: "left",
                    y: -100,
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.4,
                }
            )
            .fromTo(
                `.${s.leaveReq}`,
                {
                    opacity: 0,
                    x: 100,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.3,
                }
            );
        gsap.fromTo(
            `.${s.service__wrapper}`,
            {
                backgroundSize: `100% 100%`,
            },
            {
                backgroundSize: `200% 200%`,
                scrollTrigger: {
                    trigger: `.${s.service__wrapper}`,
                    start: `65% center`,
                    scrub: 0.5,
                },
            }
        );
        gsap.to(`.${s.service}`, {
            xPercent: -40,
            yPercent: -60,
            opacity: 0,
            scrollTrigger: {
                trigger: `.${s.service__wrapper}`,
                start: `65% center`,
                scrub: 0.5,
            },
        });
    }, []);
    return (
        <div className={s.service__wrapper}>
            <div className={`wrapper ${s.service}`}>
                <div>
                    <h2 className={s.title}>Оказываем услуги!</h2>
                    <p className={s.paragraph}>
                        Принимаем заявки по биологической и химической защите
                        растений дронами, картографии и мониторингу.
                    </p>
                    <button className={s.leaveReq}>Оставить заявку</button>
                </div>
            </div>
        </div>
    );
};
