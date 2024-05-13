import s from "./WhereWeWork.module.scss";
import stupidCountry from "../../../images/404country.png";
import { useEffect } from "react";
import { animateHeadline } from "../headlineAnimation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const WhereWeWork: React.FC<{ mb?: number }> = ({ mb }) => {
    let blockIndent = mb ? { marginBottom: `${mb}px` } : {};
    const regionsOne = [
        "1.Московская область",
        "2. Ростовская область",
        "3. Краснодарский край",
        "4. Ставропольский край",
        "5. Северная Осетия",
        "6. Кабардино-Балкария",
        "7. Пензеская область",
        "8. Белгородская область",
        "9. Саратовская область",
        "10. Воронежская область",
        "11. Волгоградская область",
        "12. Астраханская область",
    ];

    const regionsTwo = [
        "13. Самарская область",
        "14. Липецкая область",
        "15. Орловская область",
        "16. Курская область",
        "17. Ульяновская область",
        "18. Карачаево-Черкессия",
        "19. Брянская область",
        "20. Республика Татарстан",
        "21. Тамбовская область",
        "22. Тульская область",
        "23. Калужская область",
    ];
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        animateHeadline(s.headline);
        gsap.fromTo(
            `.${s.region}`,
            { opacity: 0, y: -70 },
            {
                opacity: 1,
                y: 0,
                duration: 0.3,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: `.${s.ourPlaces}`,
                },
                onComplete: function () {
                    gsap.to(`.${s.region}`, {
                        y: -100,
                        opacity: 0,
                        scrollTrigger: {
                            trigger: `.${s.ourPlaces}`,
                            scrub: true,
                            start: "65% center",
                        },
                    });
                },
            }
        );
        gsap.fromTo(
            `.${s.regions__wrapper} img`,
            {
                scale: 0,
                transformOrigin: `center`,
            },
            {
                scale: 1,
                duration: 0.7,
                delay: 0.7,
                scrollTrigger: {
                    trigger: `.${s.ourPlaces}`,
                },
            }
        );
    }, []);
    return (
        <div className={`wrapper ${s.regions__wrapper}`} style={blockIndent}>
            <h2 className={s.headline}>Где мы работаем</h2>
            <img src={stupidCountry} alt="" />
            <div className={s.ourPlaces}>
                <p className={s.leftText}>карта россии</p>
                <ul className={s.firstUl}>
                    {regionsOne.map((e) => {
                        return <li className={s.region}>{e}</li>;
                    })}
                </ul>
                <ul>
                    {regionsTwo.map((e) => {
                        return <li className={s.region}>{e}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};
