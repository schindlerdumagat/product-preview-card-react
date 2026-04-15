import Button from "./Button";
import "./productCard.css";

export default function ProductCard() {

    function handleAddToCart () {
        alert("Product Added To Cart");
    }

    return (
        <div className="product">
            <picture>
                <source srcSet="/assets/images/image-product-desktop.jpg" media="(min-width: 48rem)"/>
                <img className="product__banner" src="/assets/images/image-product-cropped.jpg" alt="A bottle of Gabrielle Essence Eau De Parfum perfume with leaves at the sides." width={350} height={342} />
            </picture>
            <div className="product__content">
                <div className="product__introduction">
                    <p className="product__tag">perfume</p>
                    <h2 className="product__title">Gabrielle Essence Eau De Parfum</h2>
                    <p className="product__description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                </div>
                <p className="product__price">
                    <strong className="product__current-price">$149.99</strong>
                    <s className="product__previous-price">$169.99</s>
                </p>
                <Button onAddToCard={handleAddToCart}><img src="/assets/images/icon-cart.svg" alt="" width={18} height={18}/>Add to Cart</Button>
            </div>
        </div>
    )

}