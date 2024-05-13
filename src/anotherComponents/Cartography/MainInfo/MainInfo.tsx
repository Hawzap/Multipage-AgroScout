import s from "./MainInfo.module.scss";
import bgCartography from "../../../images/Cartography.png";
import { SliderImg } from "../../common/SliderImg/SliderImg";
import settings from "../../../images/icons/setting.svg";
import oclock from "../../../images/icons/iconTime.svg";
import tool from "../../../images/icons/iconTool.svg";
import { useEffect } from "react";
import gsap from "gsap";

export const MainInfo = () => {
    const info = [
        { picture: settings, text: "Полная автоматизация" },
        { picture: oclock, text: "Оперативность съемки" },
        { picture: tool, text: "Высокая точность" },
    ];
    useEffect(() => {
        gsap.fromTo(
            `.${s.headline}`,
            {
                opacity: 0,
                x: -150,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
            }
        );
        gsap.fromTo(
            `.${s.mainText}`,
            {
                opacity: 0,
                y: -70,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: 0.4,
            }
        );
        gsap.fromTo(
            `.${s.info}`,
            {
                opacity: 0,
                scale: 0,
                transformOrigin: `left`,
                x: -70,
            },
            {
                opacity: 1,
                scale: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.2,
                delay: 0.7,
            }
        );
    }, []);
    return (
        <div className={s.fontSide}>
            <SliderImg img={bgCartography} />
            <div className={`wrapper ${s.mainBlock}`}>
                <div className={s.indent}>
                    <h1 className={s.headline}>
                        Агромониторинг для управления бизнесом
                    </h1>
                    <p className={s.mainText}>
                        Высокое качество продукции и хороший урожай - результат
                        точного планирования и быстрого реагирования на
                        возникающие посевам угроз
                    </p>
                    <div className={s.infos}>
                        {info.map((e) => {
                            return (
                                <div className={s.info}>
                                    <img src={e.picture} alt="" />
                                    <p>{e.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
