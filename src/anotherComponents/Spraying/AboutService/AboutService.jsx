import s from "./AboutService.module.scss";
import { Routing } from "../../common/Routing/Routing";
import { HiddenText } from "../../common/HiddenText/HiddenText";
import { useEffect } from "react";
import { animateHeadline } from "../../common/headlineAnimation";

export const AboutService = () => {
    useEffect(() => {
        animateHeadline(s.headline);
    }, []);
    return (
        <div className={`wrapper ${s.aboutService__wrapper}`}>
            <Routing page="Опрыскивание" />
            <h2 className={s.headline}>Об Услуге</h2>
            <HiddenText text="Внесение средств защиты растений (СЗР) с помощью дронов является более точным по сравнению с традиционными способы внесения, позволяет обработку поля на этапах развития, когда доступ наземных опрыскивателей не возможен, а также позволяет точечную обработку очагов болезней." />
        </div>
    );
};
