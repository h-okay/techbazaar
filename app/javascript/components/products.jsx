import React, { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchProducts() {
    const response = await fetch("/api/products");
    const json = await response.json();
    setProducts(json.products);
  }

  useEffect(() => {
    setLoading(true);
    fetchProducts().catch(console.error);
    setLoading(false);
    return () => {};
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {products.map((product, index) => (
          <li key={"product_" + index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
