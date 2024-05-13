import s from "./Categories.module.scss";
import droneIcon from "../../../../images/icons/iconDrone.svg";
import droneExo from "../../../../images/icons/iconDroneExo.svg";
import motorcycle from "../../../../images/icons/iconMotorcycle.svg";
import adapter from "../../../../images/icons/iconAdapter.svg";
import coding from "../../../../images/icons/IconCoding.svg";
import sprayingDrone from "../../../../images/icons/iconSpray.svg";
import mapDrone from "../../../../images/icons/iconDroneMap.svg";
import camera from "../../../../images/icons/iconCamera.svg";
import mylcamera from "../../../../images/icons/iconMylcamera.svg";
import thermal from "../../../../images/icons/iconThermal.svg";
import settings from "../../../../images/icons/iconSettings.svg";
import battery from "../../../../images/icons/iconBattery.svg";
import ian from "../../../../images/icons/iconIan.svg";
import generator from "../../../../images/icons/iconGenerator.svg";
import equalizer from "../../../../images/icons/iconEqualizer.svg";
import map from "../../../../images/icons/iconMap.svg";
import droneSettings from "../../../../images/icons/iconSettingsdron.svg";
import { MouseEventHandler, MutableRefObject, useEffect, useRef } from "react";
import { Li } from "./Li/Li";
import sl from "./Li/Li.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const Categories = () => {
    const categories = [
        {
            icon: droneIcon,
            name: "БПЛА Самолетного типа",
        },
        {
            icon: droneExo,
            name: "БПЛА мультироторного типа",
            child: [
                {
                    icon: sprayingDrone,
                    name: "Дроны опрыскиватели",
                },
                {
                    icon: mapDrone,
                    name: "Дроны для картографии",
                },
            ],
        },
        {
            icon: motorcycle,
            name: "Полезные нагрузки",
            child: [
                {
                    icon: camera,
                    name: "Фотокамеры",
                },
                {
                    icon: mylcamera,
                    name: "Мультиспектральные камеры",
                },
                {
                    icon: thermal,
                    name: "Гиростабилизированные видеокамеры и тепловизоры",
                },
                {
                    icon: settings,
                    name: "Cпециализированные модули",
                },
            ],
        },
        {
            icon: adapter,
            name: "Комплектующие",
            child: [
                {
                    icon: battery,
                    name: "Батареи",
                },
                {
                    icon: ian,
                    name: "Зарядные устройства",
                },
                {
                    icon: generator,
                    name: "Генераторы",
                },
                {
                    icon: equalizer,
                    name: "Пульты управления",
                },
                {
                    icon: map,
                    name: "Пульты управления",
                },
                {
                    icon: droneSettings,
                    name: "Привязные системы для коптеров",
                },
            ],
        },
        {
            icon: coding,
            name: "Программное обеспечение",
        },
    ];
    const categoriesEl: MutableRefObject<HTMLDivElement | null> = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            `.${s.subTitle} h3`,
            {
                y: -60,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: `.${s.categories}`,
                },
            }
        );
        gsap.fromTo(
            `.${s.subTitle} .line`,
            {
                scaleX: 0,
                transformOrigin: `center`,
                opacity: 0,
            },
            {
                scaleX: 1,
                opacity: 1,
                duration: 0.6,
                scrollTrigger: {
                    trigger: `.${s.categories}`,
                },
            }
        );
        gsap.fromTo(
            `.${s.categoriesBlock} > ul > li`,
            {
                x: -100,
                opacity: 0,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.4,
                stagger: 0.3,
                scrollTrigger: `.${s.categoriesBlock}`,
            }
        );
        gsap.fromTo(
            `.categoriesLine`,
            {
                scaleX: 0,
                transformOrigin: `center`,
                opacity: 0,
            },
            {
                scaleX: 1,
                opacity: 1,
                duration: 0.6,
                scrollTrigger: {
                    trigger: `.${s.categoriesBlock}`,
                    start: `-20% center`,
                },
            }
        );
        gsap.fromTo(
            `.producer`,
            {
                y: -70,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: `.${s.categoriesBlock}`,
                    start: `-12% center`,
                },
            }
        );
        gsap.fromTo(
            `.${s.filters} select`,
            {
                scale: 0,
                transformOrigin: `center`,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: `.${s.categoriesBlock}`,
                    start: `-12% center`,
                },
            }
        );
        gsap.fromTo(
            `.price h3`,
            {
                y: -70,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: `.${s.categoriesBlock}`,
                    start: `-5% center`,
                },
            }
        );
        gsap.fromTo(
            `.${s.inputs} input:first-child`,
            {
                x: -100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: `.${s.categoriesBlock}`,
                    start: `-5% center`,
                },
            }
        );
        gsap.fromTo(
            `.${s.inputs} input:last-child`,
            {
                x: 100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.5,
                scrollTrigger: {
                    trigger: `.${s.categoriesBlock}`,
                    start: `-5% center`,
                },
            }
        );
    }, []);
    return (
        <div className={s.categories}>
            <div
                className={s.subTitle}
                onClick={(e) => {
                    const targetEl = e.currentTarget as HTMLElement;
                    targetEl.classList.toggle(s.activeTitle);
                    categoriesEl.current?.classList.toggle(s.activeCategories);
                }}
            >
                <h3>Категории</h3>
                <div className={`${s.line} line`}></div>
            </div>
            <div className={s.categoriesBlock} ref={categoriesEl}>
                <ul>
                    {categories.map((e) => {
                        return <Li e={e} />;
                    })}
                </ul>
                <div className={`${s.line} categoriesLine`}></div>
                <div className={s.filters}>
                    <h3 className="producer">Производители</h3>
                    <select id="1">
                        <option value="Samsung">Samsung</option>
                        <option value="Apple">Apple</option>
                        <option value="LG">LG</option>
                    </select>
                    <div className="price">
                        <h3>Цена</h3>
                        <div className={s.inputs}>
                            <input type="text" placeholder="От" id="2" />
                            <input type="text" placeholder="До" id="3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
