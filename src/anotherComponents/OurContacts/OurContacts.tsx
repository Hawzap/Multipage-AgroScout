import { Routing } from "../common/Routing/Routing";
import s from "./OurContacts.module.scss";
import map from "../../images/map.png";
import { useEffect } from "react";
import { animateHeadline } from "../common/headlineAnimation";
import gsap from "gsap";

export const OurContacts = () => {
    useEffect(() => {
        animateHeadline(s.headline);

        gsap.fromTo(
            `.${s.adress} h3`,
            {
                opacity: 0,
                y: -55,
            },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.in" }
        );
        gsap.fromTo(
            `.${s.ourInfo}`,
            {
                opacity: 0,
                x: -55,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.7,
                ease: "power2.out",
            }
        );
        gsap.fromTo(
            `.${s.mainInfo}`,
            {
                opacity: 0,
                y: -55,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.3,
                stagger: 0.8,
                ease: "expo.out",
            }
        );
        gsap.fromTo(
            `.${s.adress} button`,
            {
                opacity: 0,
                x: -100,
                transformOrigin: `center`,
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                delay: 0.8,
            }
        );
    }, []);
    return (
        <div className={`${s.contacts__wrapper}`}>
            <div className={s.contacts__block}>
                <Routing page="Контакты" />
                <h2 className={s.headline}>Как с нами связаться</h2>
                <div className={s.contacts}>
                    <div className={s.adress}>
                        <p className={s.subTitle}>контакты</p>
                        <h3>AgroScout</h3>
                        <p className={s.ourInfo}>Наш адрес:</p>
                        <p className={s.mainInfo}>Россия, г. Москва</p>
                        <p className={s.ourInfo}>Наш телефон:</p>
                        <p className={`${s.mainInfo} ${s.special}`}>
                            +7 987 654 3210
                        </p>
                        <button>Написать нам</button>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577343.986015187!2d36.726183617872415!3d55.580256968843315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sua!4v1715614983354!5m2!1sru!2sua"
                        height="100%"
                        loading="lazy"
                        className={s.map}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};
