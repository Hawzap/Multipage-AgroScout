import s from "./AdditionalProduct.module.scss";
import droneAGR from "../../../images/drone_AGRA22.png";
import parrotSequoia from "../../../images/ParrotSequoia.png";
import pixhawk from "../../../images/Pixhawk.png";
import basket from "../../../images/icons/iconBasket.svg";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { animateHeadline } from "../../common/headlineAnimation";
export const AdditionalProduct = () => {
    const offer = [
        {
            name: "Агродрон AGR A22",
            image: droneAGR,
            description: { brand: "AGR", model: "101-0101" },
            price: 15001.27,
        },
        {
            name: "Камера Parrot Sequoia2",
            image: parrotSequoia,
            description: { brand: "STS", model: "10-105" },
            price: 5655.8,
        },
        {
            name: "Контроллер Pixhawk 2.1",
            image: pixhawk,
            description: { brand: "STS", model: "200-01" },
            price: 433.61,
        },
    ];
    useEffect(() => {
        const scrollTgParam = {
            trigger: `.${s.products}`,
            start: `-20% center`,
        };
        animateHeadline(s.title);
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: scrollTgParam,
        });
        tl.fromTo(
            `.${s.product__wrapper}`,
            {
                opacity: 0,
                scaleY: 0,
                transformOrigin: `top`,
            },
            {
                opacity: 1,
                scaleY: 1,
                duration: 0.6,
                stagger: 0.3,

                onComplete: () => {
                    gsap.to(`.${s.product__wrapper}`, {
                        y: -150,
                        transform: `none`,
                        opacity: 0,
                        scrollTrigger: {
                            trigger: `.${s.products}`,
                            start: "45% top",
                            scrub: 0.5,
                        },
                    });
                    gsap.set(`.${s.product__wrapper}`, {
                        clearProps: "transform",
                    });
                },
            }
        ).fromTo(
            `.itemAct`,
            {
                opacity: 0,
                scale: 0,
                transformOrigin: `center`,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.4,
                stagger: 0.3,
                onComplete: () => {
                    gsap.to(`.itemAct`, {
                        scale: 0,
                        transformOrigin: `center`,
                        opacity: 0,
                        scrollTrigger: {
                            trigger: `.${s.products}`,
                            start: "45% top",
                            scrub: 0.5,
                        },
                    });
                },
            }
        );
        gsap.fromTo(
            `.${s.totalPrice} p`,
            {
                y: -100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: 0.7,
                scrollTrigger: scrollTgParam,
            }
        );
        gsap.fromTo(
            `.${s.totalPrice} .${s.filledBtn}`,
            {
                x: -80,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                delay: 0.7,
                scrollTrigger: scrollTgParam,
                onComplete: () => {
                    gsap.to(`.${s.filledBtn}`, {
                        x: -100,
                        opacity: 0,
                        scrollTrigger: {
                            trigger: `.${s.products}`,
                            start: "45% top",
                            scrub: 0.5,
                        },
                    });
                },
            }
        );
        gsap.fromTo(
            `.${s.totalPrice} button:last-child`,
            {
                x: 80,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.6,
                delay: 0.7,
                scrollTrigger: scrollTgParam,
                onComplete: () => {
                    gsap.to(`.${s.totalPrice} button:last-child`, {
                        x: 100,
                        opacity: 0,
                        scrollTrigger: {
                            trigger: `.${s.products}`,
                            start: "45% top",
                            scrub: 0.5,
                        },
                    });
                },
            }
        );
    }, []);
    return (
        <div className={`wrapper ${s.additprod__wrapper}`}>
            <h2 className={s.title}>С этим товаром часто покупают </h2>
            <div className={s.mainBlock}>
                <div className={s.products}>
                    {offer.map((e, i) => {
                        return (
                            <div
                                className={`${s.product__wrapper} ${
                                    !i ? s.mainProduct : ""
                                }`}
                            >
                                {i === offer.length - 1 ? (
                                    <div
                                        className={`${s.lastItem} itemAct`}
                                    ></div>
                                ) : (
                                    <div
                                        className={`${s.ordinary} itemAct`}
                                    ></div>
                                )}
                                <div className={s.product}>
                                    <img src={e.image} alt="" />
                                    <div className={s.main__info}>
                                        <h3>{e.name}</h3>
                                        <div className={s.description}>
                                            <p>Бренд: {e.description.brand}</p>
                                            <p>Модель: {e.description.model}</p>
                                        </div>
                                        <p className={s.price}>${e.price}</p>
                                        <div className={s.amount}>
                                            <span className={s.minus}>-</span>
                                            <p>1</p>
                                            <span className={s.plus}>+</span>
                                        </div>
                                    </div>
                                </div>
                                {i !== 0 ? (
                                    <div className={s.removeItem}>
                                        <img src={basket} alt="" />
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                        );
                    })}
                    <div className={s.totalPrice}>
                        <p>
                            $<span>21090.68</span>
                        </p>
                        <button className={s.filledBtn}>
                            Добавить в корзину
                        </button>
                        <button>Собрать свой комплект</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
