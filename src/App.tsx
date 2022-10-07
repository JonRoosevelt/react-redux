import React, { useEffect, useState } from "react";
import "./App.css";
import { Product, ProductCard } from "./components/ProductCard/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setIsLoading(false);
      })
      .catch((err) =>
        setError("An error happening while getting the products")
      );
  }, []);

  return (
    <div className="App">
      <aside className="cart"></aside>
      <main className="products">
        {products?.map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
        {isLoading && <h1>Loading...</h1>}
        {error && <strong>{error}</strong>}
      </main>
    </div>
  );
}

export default App;
