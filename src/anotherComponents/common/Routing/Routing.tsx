import { useEffect } from "react";
import s from "./Routing.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Routing: React.FC<{ page: string; childPage?: string[] }> = ({
    page,
    childPage,
}) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            `.${s.routing}`,
            {
                x: -70,
                scale: 0,
                transformOrigin: `left`,
            },
            {
                x: 0,
                opacity: 1,
                scale: 1,
                duration: 0.3,
                scrollTrigger: {
                    trigger: `.${s.routing}`,
                },
            }
        );
    }, []);
    return (
        <div className={s.routing}>
            <pre>
                Главная \ {childPage?.map((e) => `${e} \\ `)}{" "}
                <span>{page}</span>
            </pre>
        </div>
    );
};
