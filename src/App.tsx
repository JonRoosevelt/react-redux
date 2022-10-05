import React, { useEffect, useState } from "react";
import { Product, ProductCard } from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json)
      .then((products) => console.log(products));
  }, []);

  return (
    <div className="App">
      <aside className="cart"></aside>
      <main className="products"></main>
    </div>
  );
}

export default App;
