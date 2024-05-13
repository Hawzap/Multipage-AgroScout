import s from "./SimiliarProducts.module.scss";
import droneSTSM1500 from "../../../images/droneSTSM1500.png";
import droneSTSM8 from "../../../images/drone_STSM8.png";
import droneSTSM1550 from "../../../images/drone_STSM1550.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export const SimiliarProducts = () => {
    const drones = [
        {
            name: "Картограф STS M1500",
            image: droneSTSM1500,
            description: { brand: "STS", model: "100-10" },
            price: 13802.86,
        },
        {
            name: "Дрон - Картограф STS M8",
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
            `.${s.title}`,
            {
                scaleX: 0,
                opacity: 0,
                transformOrigin: `left`,
            },
            {
                scaleX: 1,
                opacity: 1,
                duration: 0.6,
                scrollTrigger: {
                    trigger: `.${s.products}`,
                    // start: `-8% center`,
                },
            }
        );
        gsap.fromTo(
            `.${s.product__wrapper}`,
            {
                scaleY: 0,
                transformOrigin: `top`,
                opacity: 0,
            },
            {
                scaleY: 1,
                opacity: 1,
                duration: 0.4,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: `.${s.products}`,
                    start: `-8% center`,
                },
            }
        );
    }, []);
    return (
        <div className={`${s.wrapper} ${s.similiarproducts__wrapper}`}>
            <h2 className={s.title}>Похожие товары</h2>
            <div className={s.products}>
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
