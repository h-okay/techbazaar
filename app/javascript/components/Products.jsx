import React, { useState, useEffect } from "react";
import Product from "./Product";

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
    <div className="grid md:grid-cols-6 grid-cols-2 mx-auto lg:w-2/3 w-full py-20 px-5 gap-5">
      {products.map((product, index) => (
        <Product key={"product_" + index} product={product} />
      ))}
    </div>
  );
}
