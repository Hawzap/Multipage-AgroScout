import s from "./MainInfo.module.scss";
import productcatalogbg from "../../../images/bgproductcatalog.jpg";
import flyingDrone from "../../../images/icons/iconDrone_flying.svg";
import { SliderImg } from "../../common/SliderImg/SliderImg";
import oclock from "../../../images/icons/iconTime.svg";
import plane from "../../../images/icons/icoPlane.svg";
import rtk from "../../../images/icons/RTK.svg";
import width from "../../../images/icons/iconWidth.svg";
import fuel from "../../../images/icons/iconFuel.svg";
import ip67 from "../../../images/icons/IP67.png";
import { useEffect } from "react";
import gsap from "gsap";

export const MainInfo = () => {
    const food = [
        { img: oclock, text: "Время полета 15 минут" },
        { img: plane, text: "Скорость полета" },
        { img: rtk, text: "Автономная работа" },
        { img: width, text: "Ширина захвата 8 м" },
        { img: fuel, text: "Емкость бака" },
        { img: ip67, text: "Водонепроницаемость" },
    ];
    useEffect(() => {
        gsap.fromTo(
            `.headline`,
            {
                x: -150,
                opacity: 0,
            },
            { x: 0, opacity: 1, duration: 0.6 }
        );
        gsap.fromTo(
            `.droneIcon`,
            {
                scaleX: 0,
                transformOrigin: `left`,
            },
            {
                scaleX: 1,
                duration: 0.6,
                delay: 0.3,
            }
        );
        gsap.fromTo(
            `.${s.indent} ul li`,
            { opacity: 0, x: -60 },
            { x: 0, opacity: 1, duration: 0.4, stagger: 0.3 }
        );
    }, []);
    return (
        <div className={s.fontSide}>
            <SliderImg img={productcatalogbg} />
            <div className={`wrapper ${s.mainBlock}`}>
                <div className={s.indent}>
                    <h1 className={`${s.headline} headline`}>
                        Дрон опрыскиватель AGR A22
                    </h1>
                </div>
            </div>
            <div className={`${s.droneIcon} droneIcon`}>
                <img src={flyingDrone} alt="" className={s.droneImg} />
            </div>
            <div className={`wrapper ${s.mainBlock}`}>
                <div className={s.indent}>
                    <ul>
                        {food.map((e) => {
                            return (
                                <li key={e.img}>
                                    <span className={s.icon}>
                                        <img src={e.img} alt="" />
                                    </span>
                                    <p className={s.desc}>{e.text}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};
