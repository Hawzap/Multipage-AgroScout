import { DroneInfo } from "../common/DroneInfo/DroneInfo";
import { AdditionalProduct } from "./AdditionalProduct/AdditionalProduct";
import { Benefits } from "./Benefits/Benefits";
import { ItemInfo } from "./ItemInfo/ItemInfo";
import droneAGRA22 from "../../images/droneA2221.jpg";
import droneАg3pro from "../../images/droneАg3pro.jpg";
import droneGA22Flying from "../../images/droneGA22Flying.jpg";
import { Production } from "./Production/Production";
import { Characteristics } from "./Characteristics/Characteristics";
import { SimiliarProducts } from "./SimiliarProducts/SimiliarProducts";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ItemPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        gsap.registerPlugin(ScrollTrigger);
        const droneInfo = gsap.utils.toArray(
            ".droneInfo__wrapper"
        ) as HTMLDivElement[];
        droneInfo.forEach((drone: HTMLDivElement) => {
            const scrollTg = {
                trigger: drone,
            };
            const title = drone.children[0];
            const info = drone.children[1];
            const img = drone.children[2];
            gsap.fromTo(
                title,
                { opacity: 0, y: -100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: drone,
                    },
                }
            );
            gsap.fromTo(
                info,
                { opacity: 0, x: -100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    delay: 0.3,
                    scrollTrigger: scrollTg,
                }
            );
            gsap.fromTo(
                img,
                { opacity: 0, scaleX: 0, transformOrigin: `center` },
                {
                    opacity: 1,
                    scaleX: 1,
                    duration: 0.6,

                    ease: `back.inOut`,
                    scrollTrigger: {
                        trigger: drone,
                        start: `10% 75%`,
                    },
                }
            );
            gsap.to(drone, {
                opacity: 0,
                scrollTrigger: {
                    trigger: drone,
                    start: `83% center`,
                    scrub: 0.4,
                },
            });
        });
    }, []);
    return (
        <>
            <ItemInfo />
            <Benefits />
            <AdditionalProduct />
            <DroneInfo
                title="Дрон опрыскиватель AGR A22"
                info="A22RTK продолжает превосходство классической конструкции сельскохозяйственного беспилотника AGR. Имеет литой корпус и цельнолитое литье, что увеличивает максимальную нагрузку дрона до 22 кг. Недавно разработанное Т-образное сопло выводит эффективность работы на новый уровень; Интеллектуальная система управления полетом AG3Pro предназначена для точного и эффективного продвижения технологической модернизации и инноваций в развитии сельскохозяйственной отрасли"
                picture={droneAGRA22}
            />
            <DroneInfo
                title="Интеллектуальная система управления полетом AG3 Pro"
                info="Несколько схем обновления, интеграция модулей, стабильная и надежная арифметика.
                Интегрируйте 20 материнских плат, основной блок управления, цифровую связь, RTK и другие модули в простой конструкции, нет необходимости в соединительных проводах между предыдущими модулями, IP67, меньший вес модуля управления"
                picture={droneАg3pro}
            />
            <Production />
            <DroneInfo
                title="Точное предотвращение препятствий, лучшая защита для безопасности"
                info="A22 RTK поддерживает радар миллиметрового диапазона, моделирующий поверхность земли, и радар предотвращения препятствий для отслеживания рельефа местности и предупреждения о столкновении с препятствиями. Если вы столкнулись с препятствиями, вы можете парить или обходить препятствия, чтобы повысить безопасность полета."
                picture={droneGA22Flying}
            />
            <Characteristics />
            <SimiliarProducts />
        </>
    );
};
export const ItemPageMemo = React.memo(ItemPage);
