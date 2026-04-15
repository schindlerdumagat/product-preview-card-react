import ProductCard from "./components/ProductCard";

export default function App() {

  const PRODUCT = {
    category: "perfume",
    title: "Gabrielle Essence Eau De Parfum",
    description: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
    price: {
      current: 149.99,
      previous: 169.99
    },
  }

  return (
    <main>
      <h1 className="visually-hidden">Gabrielle Essence Eau De Parfum</h1>
      <ProductCard key={PRODUCT.title} product={PRODUCT} />
    </main>
  )
}
