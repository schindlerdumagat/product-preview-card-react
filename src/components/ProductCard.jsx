import { useState } from "react";
import Button from "./Button";
import MobileImage from "../assets/image-product-cropped.jpg";
import DesktopImage from "../assets/image-product-desktop.jpg";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {

    const [isAdded, setIsAdded] = useState(false);
    const { category, title, description, price } = product;

    function handleAddToCart () {
        setIsAdded(prev => !prev);
    }

    const buttonText = isAdded ? "Remove from Cart" : "Add to Cart";

    return (
        <div className={styles.product}>
            <picture>
                <source srcSet={DesktopImage} media="(min-width: 48rem)"/>
                <img className={styles.productBanner} src={MobileImage} alt="A bottle of Gabrielle Essence Eau De Parfum perfume with leaves at the sides." width={350} height={342} />
            </picture>
            <div className={styles.productContent}>
                <div className={styles.productIntroduction}>
                    <p className={styles.productTag}>{category}</p>
                    <h2 className={styles.productTitle}>{title}</h2>
                    <p className={styles.productDescription}>{description}</p>
                </div>
                <p className={styles.productPrice}>
                    <strong className={styles.productCurrentPrice}>${price.current}</strong>
                    <s className={styles.productPreviousPrice}>${price.previous}</s>
                </p>
                <Button onAddToCard={handleAddToCart}>{buttonText}</Button>
            </div>
        </div>
    )

}