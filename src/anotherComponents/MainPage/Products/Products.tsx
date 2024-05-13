import s from "./Product.module.scss";
import droneAGR from "../../../images/drone_AGRA22.png";
import droneSTSM8 from "../../../images/drone_STSM8.png";
import droneSTSM1550 from "../../../images/drone_STSM1550.png";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { animateHeadline } from "../../common/headlineAnimation";

export const Products = () => {
    const drones = [
        {
            name: "Агродрон AGR A22",
            image: droneAGR,
            description: { brand: "AGR", model: "101-0101" },
            price: 15001.27,
        },
        {
            name: "Дрон- Картограф STS M8",
            image: droneSTSM8,
            description: { brand: "STS", model: "101-11" },
            price: 18206.3,
        },
        {
            name: "Дрон - Картограф STS M1550",
            image: droneSTSM1550,
            description: { brand: "STS", model: "100-10" },
            price: 13802.86,
        },
    ];
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            `.${s.product__wrapper}`,
            {
                opacity: 0,
                scale: 0,
                transformOrigin: `center`,
            },
            {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: `.${s.products}`,
                    start: `-50% center`,
                    end: "45% center",
                    scrub: 1,
                },
            }
        );

        animateHeadline(s.headline);
    }, []);
    return (
        <div
            className={`${window.innerWidth > 768 ? `wrapper` : ""} ${
                s.products__wrapper
            }`}
        >
            <h2 className={s.headline}>Наши предложения</h2>
            <div className={s.products}>
                <p className={s.leftText}>топ продаж</p>
                {drones.map((e) => {
                    return (
                        <div className={s.product__wrapper}>
                            <div className={s.product}>
                                <img src={e.image} alt="" />
                                <div className={s.main__info}>
                                    <h3>{e.name}</h3>
                                    <div className={s.description}>
                                        <p>Бренд: {e.description.brand}</p>
                                        <p>Модель: {e.description.model}</p>
                                    </div>
                                    <p className={s.price}>${e.price}</p>
                                    <button className={s.add}>
                                        Добавить в корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
