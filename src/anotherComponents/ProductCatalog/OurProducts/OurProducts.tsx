import s from "./OurProducts.module.scss";
import { Routing } from "../../common/Routing/Routing";
import { Categories } from "./Categories/Categories";
import { Products } from "./Products/Products";
import { useEffect } from "react";
import { animateHeadline } from "../../common/headlineAnimation";

export const OurProducts = () => {
    useEffect(() => {
        animateHeadline(s.headline, s.both);
    }, []);
    return (
        <div className={`wrapper ${s.ourProducts__wrapper}`}>
            <Routing page="Каталог продукции" />
            <h2 className={s.headline}>Наши предложения</h2>
            <div className={s.both}>
                <Categories />
                <Products />
            </div>
        </div>
    );
};
