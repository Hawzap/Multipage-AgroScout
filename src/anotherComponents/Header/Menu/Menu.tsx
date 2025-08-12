import s from "./Menu.module.scss";
import main from "../../../images/menuIcons/main.svg";
import entomophagous from "../../../images/menuIcons/entomophagous.svg";
import spraying from "../../../images/menuIcons/spraying.svg";
import monitoring from "../../../images/menuIcons/monitoring.svg";
import catalog from "../../../images/menuIcons/catalog.svg";
import news from "../../../images/menuIcons/news.svg";
import aboutUs from "../../../images/menuIcons/aboutUs.svg";
import contacts from "../../../images/menuIcons/contact.svg";
import whatsApp from "../../../images/menuIcons/whatsApp.svg";
import telegram from "../../../images/menuIcons/telegram.svg";
import wechat from "../../../images/menuIcons/wechat.svg";
import { NavLink } from "react-router-dom";

export const Menu: React.FC<{
    isActive: boolean;
    menuItemsRef: { current: HTMLDivElement | null };
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isActive, menuItemsRef, setIsActive }) => {
    const menuItems = [
        {
            icon: main,
            title: "Главная",
            link: "",
        },
        {
            icon: entomophagous,
            title: "Энтомофаги",
            link: "entomophagous",
        },
        {
            icon: spraying,
            title: "Опрыскивание",
            link: "spraying",
        },
        {
            icon: monitoring,
            title: "Картография и мониторинг",
            link: "cartography",
        },
        {
            icon: catalog,
            title: "Каталог продукции",
            link: "catalog",
        },
        {
            icon: news,
            title: "Новости",
            link: "news",
        },
        {
            icon: aboutUs,
            title: "О компании",
            link: "aboutus",
        },
        {
            icon: contacts,
            title: "Контакты",
            link: "contacts",
        },
    ];
    const socialNet = [whatsApp, telegram, wechat];
    return (
        <div
            ref={menuItemsRef}
            className={`${s.menu} ${isActive ? s.activeMenu : ""}`}
        >
            <ul className={s.menuItems}>
                {menuItems.map((e) => {
                    return (
                        <li
                            className={s.menuItem}
                            onClick={() => {
                                setIsActive(false);
                            }}
                        >
                            <span>
                                <img src={e.icon} alt={e.title} />
                            </span>
                            <NavLink
                                to={e.link}
                                className={({ isActive }) =>
                                    isActive
                                        ? `${s.activeLink} ${s.link}`
                                        : s.link
                                }
                            >
                                {e.title}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
            <div className={s.line}></div>
            <div className={s.socialNet}>
                {socialNet.map((e) => (
                    <img src={e} className={s.socialMediaImg} alt="" />
                ))}
            </div>
        </div>
    );
};
