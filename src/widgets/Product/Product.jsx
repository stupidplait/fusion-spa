import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../features/quantity/QuantitySlice";

export function Product({ title, price, image }) {
    const dispatch = useDispatch();

    return (
        <div className="item">
            <NavLink to="/catalog" className="max-h-80 overflow-hidden mb-2">
                <img src={image} alt="product" className="img" />
            </NavLink>
            <h4 className="flex-auto mb-2 mx-2 tracking-tight">{title}</h4>
            <div className="px-2 pb-2 flex justify-between items-center gap-2">
                <p className="text-md font-semibold tracking-tight">{price} ₽</p>
                <button onClick={() => dispatch(addToCart())} className="btn text-sm">В корзину</button>
            </div>
        </div>
    );
}