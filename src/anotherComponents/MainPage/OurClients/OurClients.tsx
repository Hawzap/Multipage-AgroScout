import s from "./OurClients.module.scss";
import bionovatic from "../../../images/bionovatic.png";
import bayer from "../../../images/Bayer.png";
import corteva from "../../../images/corteva.svg";
import kws from "../../../images/kws.png";
import { useEffect } from "react";
import { animateHeadline } from "../../common/headlineAnimation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const OurClients = () => {
    const clients = [bionovatic, bayer, corteva, kws];
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        animateHeadline(s.headline);
        gsap.fromTo(
            `.${s.client}`,
            {
                opacity: 0,
                x: -150,
            },
            {
                opacity: 1,
                x: 0,
                stagger: 0.4,
                scrollTrigger: {
                    trigger: `.${s.clients__wrapper}`,
                    scrub: true,
                    start: `-60% 50%`,
                    end: `70% 30%`,
                },
            }
        );
    }, []);
    return (
        <div className={`wrapper ${s.clients__wrapper}`}>
            <h2 className={s.headline}>Наши клиенты </h2>
            <div className={s.clients}>
                {clients.map((e) => {
                    return (
                        <div className={s.client}>
                            <img src={e} alt="" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
