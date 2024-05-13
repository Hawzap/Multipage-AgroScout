import s from "./Footer.module.scss";
import logo from "../../images/logo.png";
import phoneIcon from "../../images/icons/phoneIcone.svg";
import vk from "../../images/icons/vk.png";
import instagram from "../../images/icons/instagram.png";
import tiktok from "../../images/icons/tik-tok.png";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`wrapper ${s.footer__wrapper}`}>
                <div className={s.logo}>
                    <img src={logo} alt="logo" className={s.logoPic} />
                    <img src={phoneIcon} alt="phone" />
                    <p>+7 987 654 3210</p>
                </div>
                <div className={s.mainInfo}>
                    <p>Подписывайтесь на наши соц. сети</p>
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
                </div>
            </div>
        </footer>
    );
};
