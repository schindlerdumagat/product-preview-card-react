import ProductCard from "./components/ProductCard";

export default function App() {

  const PRODUCTS = [
    {
      category: "perfume",
      title: "Gabrielle Essence Eau De Parfum",
      description: "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
      price: {
        current: 149.99,
        previous: 169.99
      },
    },
    {
      category: "electronics",
      title: "Sony Wireless Noise-Canceling Headphones",
      description: "Experience pure sound with our flagship wireless headphones, designed to immerse you in your music without distractions.",
      price: {
        current: 229.99,
        previous: 269.99
      },
    },
    {
      category: "clothing",
      title: " Salomon Speedcross 6 Gore-Tex",
      description: "Dominate the most challenging terrain with the legendary grip of the Speedcross 6. This updated version is lighter and offers even faster mud evacuation for ultimate confidence on wet, slippery paths.",
      price: {
        current: 119.99,
        previous: 139.99
      },
    },
]

  return (
    <main>
      <h1 className="visually-hidden">Gabrielle Essence Eau De Parfum</h1>
      <ul style={{ 
        display: "flex", 
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
      }}>
        {PRODUCTS.map(product => <ProductCard product={product} />)}
      </ul>
    </main>
  )
}
