import s from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
type ProductProps = {
    product: {
        name: string;
        image: string;
        description: {
            brand: string;
            model: string;
        };
        price: number;
    };
};
export const ProductCard: React.FC<ProductProps> = ({ product }) => {
    const { name, image, description, price } = product;
    return (
        <div className={s.product__wrapper}>
            <div className={s.product}>
                <img src={image} alt="" />
                <div className={s.main__info}>
                    <h3>{name}</h3>
                    <div className={s.description}>
                        <p>Бренд: {description.brand}</p>
                        <p>Модель: {description.model}</p>
                    </div>
                    <p className={s.price}>${price}</p>
                    <button className={s.add}>Добавить в корзину</button>
                </div>
            </div>
        </div>
    );
};
