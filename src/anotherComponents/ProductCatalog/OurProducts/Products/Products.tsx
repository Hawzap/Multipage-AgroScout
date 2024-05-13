import { ProductCard } from "../../../common/ProductCard/ProductCard";
import s from "./Products.module.scss";
import droneAGR from "../../../../images/drone_AGRA22.png";
import droneSTSM8 from "../../../../images/drone_STSM8.png";
import droneSTSM1550 from "../../../../images/drone_STSM1550.png";
import sl from "../../../common/ProductCard/ProductCard.module.scss";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
            `.${sl.product__wrapper}`,
            {
                opacity: 0,
                scale: 0,
                transformOrigin: `center`,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: `.${s.products}`,
                },
            }
        );
    }, []);
    return (
        <div className={s.products__wrapper}>
            <p className={s.subtitle}>каталог продукции </p>
            <div className={s.products}>
                {drones.map((e) => {
                    return <ProductCard product={e} />;
                })}
                {drones.map((e) => {
                    return <ProductCard product={e} />;
                })}
            </div>
        </div>
    );
};
