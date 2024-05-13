import s from "./BenefitsOfEntomophages.module.scss";
import saving from "../../../images/icons/saving.png";
import wallet from "../../../images/icons/wallet.svg";
import ownProduction from "../../../images/icons/ownProduction.svg";
import efficiency from "../../../images/icons/efficiency.svg";
import wideRange from "../../../images/icons/wideRange.svg";
import droneOne from "../../../images/icons/iconDroneone.svg";
import { InfoBlocks } from "../../common/InfoBlocks/InfoBlocks";
import { animateHeadline } from "../../common/headlineAnimation";
import { useEffect } from "react";
import sl from "../../common/InfoBlocks/InfoBlocks.module.scss";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

export const BenefitsOfEntomophages = () => {
    const benefits = [
        {
            icon: saving,
            title: "Доступная цена",
            content:
                "Низкая стоимость по сравнению с расходами на химическую обработку растений.",
        },
        {
            icon: wallet,
            title: "Экономия",
            content:
                "Низкие затраты на внесение трихограмм, златоглазки и габробракону по сравнению с трационными методами обработки",
        },
        {
            icon: ownProduction,
            title: "Эффективность",
            content:
                "Высокая эффективность, снижение потерь урожайности в результате обработки с/х культур более чем на 90%.",
        },
        {
            icon: efficiency,
            title: "Оперативность",
            content:
                "За 60 минут полета дрон со специальным дозатором обрабатывает до 100 гектаров.",
        },
        {
            icon: wideRange,
            title: "Широкий спектр действия",
            content:
                "Двукратное внесение позволяет уничтожать несколько поколений вредителей.",
        },
        {
            icon: droneOne,
            title: "Равномерное распределение",
            content:
                "Внесение с БПЛА гарантирует внедрение особей трихограммы, златогласки, габробракрну равномерно на всех участках поля",
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
        <div className={`wrapper ${s.benefits__wrapper}`}>
            <h2 className={s.headline}>Плюсы использования</h2>
            <InfoBlocks arr={benefits} isNeed={false} leftText="преимущества" />
        </div>
    );
};
