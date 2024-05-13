import s from "./InfoBlocks.module.scss";

type InfoBlocksType = {
    arr: {
        title: string;
        content: string;
        icon: string;
    }[];
    isNeed: boolean;
    leftText?: string;
};

export const InfoBlocks: React.FC<InfoBlocksType> = ({
    arr,
    isNeed,
    leftText = "",
}) => {
    return (
        <div className={s.benefits__wrapper}>
            <div className={`${s.benefits} ${isNeed ? s.bgImage : ""}`}>
                {arr.map((e) => {
                    return (
                        <div className={s.benefit__wrapper}>
                            <div className={s.benefit}>
                                <div className={s.benefit__title}>
                                    <img src={e.icon} alt="" />
                                    <p>{e.title}</p>
                                </div>
                                <p>{e.content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            {!!leftText ? <p className={s.leftText}>{leftText}</p> : <></>}
        </div>
    );
};
