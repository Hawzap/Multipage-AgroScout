import { useEffect } from "react";
import s from "./HiddenText.module.scss";

export const HiddenText: React.FC<{ text: string; specialClass?: string }> = ({
    text,
    specialClass,
}) => {
    useEffect(() => {
        const textContainer = document.querySelector(`.${s.info} p`);
        const splitedText = text.split("");
        if (splitedText.length > 450 && textContainer) {
            const mainText = splitedText.slice(0, 320).join("");
            const subText = splitedText.slice(320);
            const joinedText = subText.join("");
            const hiddenText = document.createElement("span");
            hiddenText.classList.add(`${s.hidenContent}`);
            hiddenText.textContent = joinedText;
            textContainer.textContent = mainText;
            textContainer.append(hiddenText);
        } else if (textContainer) {
            textContainer.textContent = text;
        }
    }, []);
    return (
        <div className={s.hiddenText}>
            <div className={`${s.info}`}>
                <p className={specialClass}></p>
            </div>
        </div>
    );
};
