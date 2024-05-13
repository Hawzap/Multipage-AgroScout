import { useEffect, useState } from "react";
import s from "./Benefits.module.scss";
import sl from "../../common/InfoBlocks/InfoBlocks.module.scss";
import staff from "../../../images/icons/staff.png";
import equipment from "../../../images/icons/equipment.png";
import saving from "../../../images/icons/saving.png";
import efficiency from "../../../images/icons/efficiency.png";
import ownProduction from "../../../images/icons/ownProduction.svg";
import ownService from "../../../images/icons/ownService.svg";
import { InfoBlocks } from "../../common/InfoBlocks/InfoBlocks";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { animateHeadline } from "../../common/headlineAnimation";

export const Benefits = () => {
    const benefits = [
        {
            title: "Квалифицированные сотрудники",
            content:
                "Все наши сотрудники имеют многолетний опыт работы в сфере беспилотной авиации. Нами было реализовано множество проектов различной тематики и самой различной сложности.",
            icon: staff,
        },
        {
            title: "Высокотехнологичное оборудование",
            content:
                "Наша компания использует современное оборудование, которое обеспечивает высокое качество в выполнении поставленных задач.",
            icon: equipment,
        },
        {
            title: "Экономия",
            content:
                "Использование беспилотных технологий экономит вам много времени и денег. За счет отсутствия технологической колеи сохраняется до 6% урожая. Снижение расхода препаратов до 30%",
            icon: saving,
        },
        {
            title: "Оперативность",
            content:
                "За рабочую смену наши специалисты способны защитить более 1000 гектар ваших полей, кустарников и деревьев.",
            icon: efficiency,
        },
        {
            title: "Собственное производство ",
            content:
                "Мы разрабатываем и производим беспилотные летательные аппараты, поэтому знаем все тонкости их работы и можем настроить их под конкретные задачи и потребности клиентов.",
            icon: ownProduction,
        },
        {
            title: "Свой сервис",
            content:
                "Любой наш аппарат можно сдать на плановое техническое обслуживание или же в ремонт в наш собственный сервис, который гарантирует качество и оперативность выполнения работ.",
            icon: ownService,
        },
    ];
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        animateHeadline(s.headline);
        gsap.fromTo(
            `.${sl.benefit__wrapper}`,
            {
                opacity: 0,
                scale: 0,
                transformOrigin: "bottom",
                y: 100,
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.4,
                stagger: 0.2,
                scrollTrigger: `.${sl.benefits}`,
                onComplete: () => {
                    gsap.to(`.${sl.benefit__wrapper}`, {
                        opacity: 0,
                        scale: 0,
                        y: -150,
                        x: -150,
                        duration: 1,
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: `.${sl.benefits}`,
                            start: `50% center`,
                            scrub: 0.3,
                        },
                    });
                },
            }
        );
    }, []);
    return (
        <div className={`wrapper ${s.bf__block}`}>
            <h2 className={s.headline}>Почему нам доверяют?</h2>
            <InfoBlocks arr={benefits} isNeed={true} />
        </div>
    );
};
