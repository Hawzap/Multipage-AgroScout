import { MouseEventHandler } from "react";
import s from "./Li.module.scss";
type ElementType = {
    icon: string;
    name: string;
    child?: {
        icon: string;
        name: string;
    }[];
};

type LiProps = {
    e: ElementType;
};

const handleClick = (e: React.MouseEvent) => {
    const ell = e.currentTarget;
    const el = e.currentTarget.children[0] as HTMLDivElement;
    const child = el.children[1] as HTMLUListElement;

    if (ell.classList.contains(s.containChild)) {
        if (!ell.classList.contains(s.activeList)) {
            el.style.height = `${+child.offsetHeight + 50}px`;
        } else {
            el.style.height = `30px`;
        }
        ell.classList.toggle(s.activeList);
    }
};

export const Li: React.FC<LiProps> = ({ e }) => {
    return (
        <li
            key={e.icon}
            className={`${!!e.child ? s.containChild : ""}`}
            onClick={handleClick}
            data-height={
                e.child ? `${e.child.length * 30 + e.child.length * 20}` : 30
            }
        >
            <div className={s.li__wrapper}>
                <div className={s.liContainer}>
                    <img src={e.icon} alt="" />
                    <div className={s.nameContainer}>
                        <p>{e.name}</p>
                        {!!e.child ? (
                            <span className={s.subListToggle}></span>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                {!!e.child ? (
                    <ul className={s.sublist}>
                        {e.child.map((e) => {
                            return (
                                <li>
                                    <div className={s.liContainer}>
                                        <img src={e.icon} alt="" />
                                        <p>{e.name}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                ) : (
                    ""
                )}
            </div>
        </li>
    );
};
