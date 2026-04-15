import CartIcon from "../assets/icon-cart.svg";
import styles from "./Button.module.css";

export default function Button({ children, onAddToCart }) {

    return (
        <button className={styles.btn} onClick={onAddToCart}>
            <img src={CartIcon} alt="" width={18} height={18}/>
            {children}
        </button>
    )

}