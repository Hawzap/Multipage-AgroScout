import { useEffect } from "react";
import { HiddenText } from "../../common/HiddenText/HiddenText";
import s from "./AboutUs.module.scss";
import { animateHeadline } from "../../common/headlineAnimation";

export const AboutUs = () => {
    useEffect(() => {
        animateHeadline(`headlineAU`);
    }, []);

    return (
        <div className={`wrapper ${s.aboutUs}`}>
            <h2 className={`${s.headline} headlineAU`}>Кто мы такие</h2>
            <HiddenText text="Компания STS.center применяет высокотехнологичные агродроны и БПЛА, которые модернизированы и собраны нашими инженерами для сельского и лесного хозяйства, а также для промышленности. В СТС Центр работают опытные агрономы, энтомологи, пилоты, менеджеры и инженеры. Сегодня мы имеем один из самых современных парков дронов в России, что позволяет нам выполнять работы широкого спектра от простой аэрофотосъемки до лидарного сканирования местности и тепловизионного контроля. Внедрение беспилотных технологий в вашем бизнесе поможет сэкономить время и деньги, а также позволит получить большое преимущество перед вашими конкурентами." />
        </div>
    );
};
