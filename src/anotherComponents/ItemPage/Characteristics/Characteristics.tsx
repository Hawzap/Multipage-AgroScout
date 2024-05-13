import { useEffect } from "react";
import s from "./Characteristics.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Characteristics = () => {
    const features = [
        {
            title: "Летательный аппарат",
            feature:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit magnam nisi, sint dolorum accusantium molestias modi aspernatur, non, provident iusto unde. Omnis molestias sed, est aspernatur ea veniam rerum?",
        },
        {
            title: "Основные характеристики",
            feature:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit magnam nisi, sint dolorum accusantium molestias modi aspernatur, non, provident iusto unde. Omnis molestias sed, est aspernatur ea veniam rerum?",
        },
        {
            title: "Функции БПЛА",
            feature:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente recusandae ipsa, similique odio libero magnam a impedit officia, iusto enim, assumenda culpa voluptatem itaque expedita facilis quam! Itaque, optio modi? At blanditiis, similique nostrum laborum quis est? Consequatur veritatis accusantium sequi vel et eos debitis cumque, aperiam porro quos beatae quidem voluptates? Quibusdam asperiores sapiente nesciunt ratione illo libero quo! Quisquam atque optio nihil a delectus illum. Non temporibus ex consequuntur rerum ipsam dicta adipisci asperiores deleniti cupiditate doloremque eligendi, consectetur, ab magnam eveniet minima recusandae dolorum provident tempore odit! Asperiores deserunt, modi nemo doloremque libero blanditiis tempora reiciendis quos corrupti accusantium obcaecati quo mollitia rerum odit consequuntur praesentium voluptate suscipit magni velit commodi illum eos quas delectus laborum. Aspernatur! Totam asperiores ducimus omnis labore corporis nisi molestias culpa ipsam, sed perspiciatis amet nemo doloribus commodi facilis mollitia veritatis, officia voluptatum? Error aperiam magni quibusdam blanditiis, totam obcaecati rerum unde?",
        },
        {
            title: "Комплектация",
            feature:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit magnam nisi, sint dolorum accusantium molestias modi aspernatur, non, provident iusto unde. Omnis molestias sed, est aspernatur ea veniam rerum?",
        },
        {
            title: "Отдельно приобретаются",
            feature:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sit magnam nisi, sint dolorum accusantium molestias modi aspernatur, non, provident iusto unde. Omnis molestias sed, est aspernatur ea veniam rerum?",
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
                    trigger: `.${s.features}`,
                    // start: `-8% center`,
                },
            }
        );
        gsap.fromTo(
            `.${s.feature}`,
            {
                x: -150,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: `.${s.features}`,
                    start: `-8% center`,
                },
                onComplete: () => {
                    gsap.to(`.${s.feature}`, {
                        xPercent: 40,
                        opacity: 0,
                        stagger: -0.3,
                        scrollTrigger: {
                            trigger: `.${s.featuresBlock}`,
                            scrub: 0.6,
                            start: `40% center`,
                            end: `140%`,
                        },
                    });
                },
            }
        );
    }, []);
    return (
        <div className={`wrapper ${s.features__wrapper}`}>
            <h2 className={s.title}>Характеристики</h2>
            <div className={s.features}>
                <p className={s.subTitle}>характеристики</p>
                <div className={s.featuresBlock}>
                    {features.map((e) => {
                        return (
                            <div className={s.feature}>
                                <div className={s.featureHeader}>
                                    <h3>{e.title}</h3>
                                    <span className={s.featureState}></span>
                                </div>
                                <p>{e.feature}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
