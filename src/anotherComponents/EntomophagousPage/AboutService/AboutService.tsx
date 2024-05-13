import { useEffect } from "react";
import { HiddenText } from "../../common/HiddenText/HiddenText";
import { Routing } from "../../common/Routing/Routing";
import s from "./AboutService.module.scss";
import { animateHeadline } from "../../common/headlineAnimation";

export const AboutService = () => {
    useEffect(() => {
        animateHeadline(s.headline);
    }, []);
    return (
        <div className={`wrapper ${s.aboutService__wrapper}`}>
            <Routing page="Энтомофаги" />
            <h2 className={s.headline}>Об Услуге</h2>
            <HiddenText text="Компания AGROSCOUT за время научной работы  совместно с ведущими  НИИ страны разработала высокоэффективный метод защиты посевов от вредителей с использованием энтомофагов.  Самый современный технопарк в стране, позволяет нам точно и быстро вносить трихограмму, златоглазку и габробракон на любых посевных площадях, включая труднодоступные участки, без применения тяжелой техники. " />
        </div>
    );
};
