import CartIcon from "../assets/icon-cart.svg";
import styles from "./Button.module.css";

export default function Button({ children, onAddToCard }) {

    return (
        <button className={styles.btn} onClick={onAddToCard}>
            <img src={CartIcon} alt="" width={18} height={18}/>
            {children}
        </button>
    )

}