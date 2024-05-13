import React, { useEffect, useRef, useState } from "react";
import s from "./Header.module.scss";
import logo from "../../images/logo.png";
import phoneIcon from "../../images/icons/phoneIcone.svg";
import vk from "../../images/icons/vk.png";
import instagram from "../../images/icons/instagram.png";
import tiktok from "../../images/icons/tik-tok.png";
import busket from "../../images/icons/busket.png";
import { Menu } from "./Menu/Menu";
import { Link } from "react-router-dom";

type Language = "ru" | "en";

export const Header: React.FC = () => {
    const [isActive, setIsActive] = useState(false);
    const [lang, setLang] = useState<Language>("ru");
    const menuRef = useRef<HTMLDivElement>(null);
    const menuItemsRef = useRef<HTMLDivElement>(null);
    const changeLang = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLParagraphElement;
        const value = target.textContent?.toLowerCase();
        if (value === "ru" || value === "en") {
            setLang(value);
        }
    };
    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (
                menuRef.current &&
                //@ts-ignore
                !menuRef.current.contains(e.target) &&
                //@ts-ignore
                !menuItemsRef.current?.contains(e.target)
            ) {
                setIsActive(false);
            }
        });
    }, []);
    return (
        <header className={s.header__wrapper}>
            <div className={`wrapper ${s.header}`}>
                <div className={s.logo}>
                    <Link to="/">
                        <img src={logo} alt="logo" className={s.logoPic} />
                    </Link>
                    <img src={phoneIcon} alt="phone" />
                    <p>+7 987 654 3210</p>
                </div>
                <nav className={s.mainInfo}>
                    <div className={s.socialMedia}>
                        <div>
                            <img src={vk} alt="" />
                        </div>
                        <div>
                            <img src={instagram} alt="" />
                        </div>
                        <div>
                            <img src={tiktok} alt="" />
                        </div>
                    </div>
                    <div className={s.langs}>
                        <p
                            className={lang === "en" ? s.activeLang : ""}
                            onClick={changeLang}
                        >
                            EN
                        </p>
                        <p
                            className={lang === "ru" ? s.activeLang : ""}
                            onClick={changeLang}
                        >
                            RU
                        </p>
                    </div>
                    <div className={s.otherThings}>
                        <div>
                            <img src={busket} alt="" />
                        </div>
                        <div
                            ref={menuRef}
                            className={`${s.menu} ${
                                isActive ? s.activeMenu : ""
                            }`}
                            onClick={() => {
                                setIsActive(!isActive);
                            }}
                        >
                            <span></span>
                            <span className={s.middle}></span>
                            <span></span>
                        </div>
                    </div>
                </nav>
                <Menu isActive={isActive} menuItemsRef={menuItemsRef} />
            </div>
        </header>
    );
};
