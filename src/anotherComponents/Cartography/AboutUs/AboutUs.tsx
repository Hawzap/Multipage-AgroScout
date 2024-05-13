import s from "./AboutUs.module.scss";
import { Routing } from "../../common/Routing/Routing";
import { HiddenText } from "../../common/HiddenText/HiddenText";
import { useEffect } from "react";
import { animateHeadline } from "../../common/headlineAnimation";

export const AboutUs = () => {
    useEffect(() => {
        animateHeadline(s.headline);
    }, []);
    return (
        <div className={`wrapper ${s.aboutUs__wrapper}`}>
            <Routing page="Картография и мониторинг" />
            <h2 className={s.headline}>Об Услуге</h2>
            <div className={s.hidden}>
                <HiddenText text="Аэрофотосъемка осуществляется с применением БПЛА Герскан" />
            </div>
        </div>
    );
};
