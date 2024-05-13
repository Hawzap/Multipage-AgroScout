import s from "./ShortText.module.scss";
import { HiddenText } from "../../common/HiddenText/HiddenText";
import { Routing } from "../../common/Routing/Routing";

export const ShortText = () => {
    return (
        <div className={`wrapper ${s.shortTextWrapper}`}>
            <Routing page="О нас" />

            <HiddenText
                text="Дроны и БПЛА (беспилотные летальные аппараты) уже сегодня являются важным и стремительно развивающимся сегментом мирового рынка. И этот сегмент находит применение в абсолютно разных сферах жизнедеятельности человека. На сегодняшний день многие коммерческие компании рассматривают дроны и БПЛА в качестве прекрасного инструмента для решения различных задач. И эта тенденция только растет. Согласно исследованию Всемирной организации беспилотных систем (the Organization for Unmanned Vehicle Systems Worldwide),  только в сельском хозяйстве общая экономическая эффективность применения дронов к 2025 году составит около"
                specialClass={s.textPosition}
            />
        </div>
    );
};
