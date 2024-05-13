import s from "./ItemInfo.module.scss";
import { Routing } from "../../common/Routing/Routing";
import droneAGR from "../../../images/drone_AGRA22.png";
import droneAGRTop from "../../../images/droneAgrA22Top.png";
import droneAGRLeft from "../../../images/droneAgrA22Left.png";
import fuel from "../../../images/icons/iconFuel.svg";
import width from "../../../images/icons/iconWidth.svg";
import rtk from "../../../images/icons/RTK.svg";
import tree from "../../../images/icons/iconTree.svg";
import ip67 from "../../../images/icons/IP67.png";
import drone from "../../../images/icons/iconDroneone.svg";
import { useEffect } from "react";
import gsap from "gsap";

export const ItemInfo = () => {
    const description1 = [
        { pic: fuel, text: "Бак для распыления 22 л" },
        { pic: width, text: "Ширина захвата 5-8 м" },
        { pic: rtk, text: "Высокоточное позиционирование" },
    ];
    const description2 = [
        { pic: tree, text: "Датчик высоты и обхода препятствий" },
        { pic: ip67, text: "Воднепроницаемость" },
        { pic: drone, text: "Скорость полета 10 м/с" },
    ];
    useEffect(() => {
        const priceNum = document.querySelector(".priceNum");
        const splitedPrice = priceNum.textContent.split("");
        priceNum.textContent = "";
        splitedPrice.forEach((e) => {
            const span = document.createElement("span");
            span.textContent = e;
            priceNum.appendChild(span);
        });
        gsap.fromTo(
            `.${s.mainPhoto}`,
            {
                opacity: 0,
                scale: 0,
                transformOrigin: `center`,
            },
            { opacity: 1, scale: 1, duration: 0.6 }
        );
        gsap.fromTo(
            `.${s.downPhoto}`,
            {
                opacity: 0,
                scaleY: 0,
                transformOrigin: `top`,
            },
            { opacity: 1, scaleY: 1, duration: 0.4, delay: 0.3, stagger: 0.2 }
        );
        gsap.fromTo(
            `.${s.itemName}`,
            {
                opacity: 0,
                x: -80,
            },
            { opacity: 1, x: 0, duration: 0.4, delay: 0.6 }
        );
        gsap.fromTo(
            `.${s.article}`,
            {
                opacity: 0,
                y: -80,
            },
            { opacity: 1, y: 0, duration: 0.3, delay: 0.8 }
        );
        gsap.fromTo(
            `.${s.columns} ul li`,
            {
                opacity: 0,
                scaleX: 0,
                transformOrigin: `left`,
            },
            { opacity: 1, scaleX: 1, duration: 0.5, delay: 1, stagger: 0.2 }
        );
        gsap.fromTo(
            `.${s.description}`,
            {
                opacity: 0,
                y: -40,
            },
            { opacity: 1, y: 0, duration: 0.4, delay: 1.2 }
        );
        gsap.fromTo(
            `.priceNum span`,
            {
                display: `inline-block`,
                opacity: 0,
                y: -30,
            },
            { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, delay: 1.4 }
        );
        gsap.fromTo(
            `.${s.minus}`,
            {
                opacity: 0,
                x: -30,
            },
            { opacity: 1, x: 0, duration: 0.3, delay: 1.8 }
        );
        gsap.fromTo(
            `.${s.plus}`,
            {
                opacity: 0,
                x: 30,
            },
            { opacity: 1, x: 0, duration: 0.3, delay: 1.8 }
        );
        gsap.fromTo(
            `.${s.amount} p`,
            {
                opacity: 0,
                y: -30,
            },
            { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, delay: 1.6 }
        );
        gsap.fromTo(
            `.${s.buttons} button:first-child`,
            {
                opacity: 0,
                x: -80,
            },
            { opacity: 1, x: 0, duration: 0.3, delay: 1.9 }
        );
        gsap.fromTo(
            `.${s.buttons} button:last-child`,
            {
                opacity: 0,
                x: 80,
            },
            { opacity: 1, x: 0, duration: 0.3, delay: 1.9 }
        );
    }, []);
    return (
        <div className={`wrapper ${s.item__wrapper}`}>
            <Routing page="Агродрон AGR A22" childPage={["Товар"]} />
            <div className={s.itemInfoBlock}>
                <div className={s.itemPictures}>
                    <span className={s.mainPhoto}>
                        <img src={droneAGR} alt="" />
                    </span>
                    <span className={`${s.activePhoto} ${s.downPhoto}`}>
                        <img src={droneAGR} alt="" />
                    </span>
                    <span className={s.downPhoto}>
                        <img src={droneAGRTop} alt="" />
                    </span>
                    <span className={s.downPhoto}>
                        <img src={droneAGRLeft} alt="" />
                    </span>
                </div>
                <div className={s.itemInfo}>
                    <h2 className={s.itemName}>Дрон опрыскиватель AGR A22</h2>
                    <p className={s.article}>Артикуль: 12358</p>
                    <div className={s.columns}>
                        <ul>
                            {description1.map((e) => {
                                return (
                                    <li>
                                        <img src={e.pic} alt="" />
                                        <p>{e.text}</p>
                                    </li>
                                );
                            })}
                        </ul>
                        <ul>
                            {description2.map((e) => {
                                return (
                                    <li>
                                        <img src={e.pic} alt="" />
                                        <p>{e.text}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <p className={s.description}>Все характеристики</p>
                    <div className={s.price}>
                        <p>
                            <span className="priceNum">$15001.27</span>
                        </p>
                        <div className={s.amount}>
                            <span className={s.minus}>-</span>
                            <p>1</p>
                            <span className={s.plus}>+</span>
                        </div>
                    </div>
                    <div className={s.buttons}>
                        <button className={s.filled}>Добавить в корзину</button>
                        <button>Купить в 1 клик</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
