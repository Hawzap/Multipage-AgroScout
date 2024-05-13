import { FC } from "react";
import s from "./SliderImg.module.scss";
import arrow from "../../../images/icons/iconArrow.png";
import bgS from "../../../images/fontside.png";
import bgSMedia from "../../../images/fontSideMedia.png";

export const SliderImg: FC<{ img: string }> = ({ img }) => {
    return (
        <div className={s.sliderImg}>
            <span className={s.mainImg}>
                <picture>
                    <source srcSet={bgSMedia} media="(max-width: 768px)" />
                    <img src={bgS} alt="" className={s.fontSide} />
                </picture>
                <img src={img} alt="" />
            </span>
            {/* <div className={s.sliderBtn}>
                <div className={s.moveBg}>
                    <img src={arrow} alt="" className={s.arrow} />
                    <div className={s.circles}>
                        {[...new Array(5)].map((e: undefined, i: number) => {
                            return (
                                <span
                                    className={`${s.circle} ${
                                        i === 0 ? s.active : ""
                                    }`}
                                ></span>
                            );
                        })}
                    </div>
                    <img
                        src={arrow}
                        alt=""
                        className={`${s.rotatedArrow} ${s.arrow}`}
                    />
                </div>
            </div> */}
        </div>
    );
};
