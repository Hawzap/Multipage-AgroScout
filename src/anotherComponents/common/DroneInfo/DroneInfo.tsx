import s from "./DroneInfo.module.scss";
import { FC } from "react";

type DroneInfoProps = {
    title: string;
    info: string;
    picture: string;
    uniqueStyle?: string;
};

export const DroneInfo: FC<DroneInfoProps> = ({
    title,
    info,
    picture,
    uniqueStyle,
}) => {
    return (
        <div className={`wrapper ${s.info__wrapper} droneInfo__wrapper`}>
            <h2 className={s.title}>{title}</h2>
            <p className={s.info}>{info}</p>
            <span className={s.picture}>
                <img src={picture} alt="" />
            </span>
        </div>
    );
};
