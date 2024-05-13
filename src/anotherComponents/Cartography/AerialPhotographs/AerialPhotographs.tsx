import s from "./AerialPhotographs.module.scss";
import resolution from "../../../images/icons/iconResolution.svg";
import location from "../../../images/icons/iconLocation.svg";
import tool from "../../../images/icons/iconTool.svg";
import creating from "../../../images/creating.jpg";
import { useEffect, useRef, useState } from "react";
import { animateHeadline } from "../../common/headlineAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const AerialPhotographs = () => {
    const type = [
        "Ортофотоплан",
        "NDVI",
        "Цифровая модель местности",
        "3D-модель местности",
    ];
    const format = [
        { icon: resolution, text: "Разрешение до 2см/пикс" },
        { icon: location, text: "Масштаб от 1:500 до 1:10000" },
        { icon: tool, text: "Высокая геодезическая  точность" },
    ];
    let [selectedType, setType] = useState(0);
    const line = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.${s.format}`,
                start: `-10% center`,
            },
        });
        animateHeadline(s.headline);
        gsap.fromTo(
            `.${s.describe}`,
            {
                y: -70,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: `.${s.photographs__wrapper}`,
                    start: `10% center`,
                },
            }
        );
        gsap.fromTo(
            `.materialsType`,
            {
                x: -150,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                scrollTrigger: {
                    trigger: `.${s.photographs__wrapper}`,
                    start: `-10% center`,
                },
            }
        );
        tl.fromTo(
            `.subheadline`,
            {
                y: -100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.4,
            }
        ).fromTo(
            `.format`,
            {
                scaleY: 0,
                opacity: 0,
                transformOrigin: `top`,
            },
            {
                scaleY: 1,
                opacity: 1,
                duration: 0.3,
                stagger: 0.3,
            }
        );
        gsap.fromTo(
            `.${s.creating}`,
            {
                x: 150,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                scrollTrigger: {
                    trigger: `.${s.format}`,
                    start: `-10% center`,
                },
            }
        );
        gsap.to(`.${s.photographs__wrapper}`, {
            y: -200,
            opacity: 0,
            scrollTrigger: {
                trigger: `.${s.photographs__wrapper}`,
                start: `85% center`,
                scrub: 0.5,
            },
        });
    }, []);

    useEffect(() => {});
    return (
        <div className={`wrapper ${s.photographs__wrapper}`}>
            <h2 className={s.headline}>Получаемые данные</h2>
            <p className={s.describe}>
                Фотограмметрическая обработка, выполняемая в Pix4D, позволяет
                получать необходимые данные для дальнейшего использования
            </p>
            <div className={s.materials}>
                <div className={`${s.materialsType} materialsType`}>
                    <div className={s.materials__wrapper}>
                        {type.map((e) => (
                            <p
                                key={e}
                                onClick={(el) => {
                                    const targetElement =
                                        el.target as HTMLParagraphElement;
                                    const elemWidth = targetElement.offsetWidth;
                                    if (line.current) {
                                        line.current.style.left =
                                            targetElement.offsetLeft + "px";
                                        line.current.style.width =
                                            elemWidth + "px";
                                    }
                                }}
                            >
                                {e}
                            </p>
                        ))}
                    </div>
                    <div className={s.lineWrapper}>
                        <span className={s.line} ref={line}></span>
                    </div>
                </div>
                <div className={s.format}>
                    <div className={s.formatType}>
                        <p className={`${s.subheadline} subheadline`}>
                            Одним файлом или в виде тайлов. Форматы: geotiff,
                            jpg, png, GoogleEarth KML\KMZ
                        </p>
                        <ul>
                            {format.map((e) => (
                                <li key={e.text} className="format">
                                    <img src={e.icon} alt="" />
                                    <p>{e.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={s.subtitle__wrapper}>
                        <p className={s.subtitle}>материалы</p>
                        <div className={s.creating}>
                            <img src={creating} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
