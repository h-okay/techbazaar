import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Product({ product }) {
  const [value, setValue] = useState(0);

  function handleValue(value, min, max) {
    if (value <= max && value >= min) {
      setValue(value);
      return;
    }
  }

  function handleButton(value, type, min, max) {
    if (type == "add") {
      handleValue(value + 1, min, max);
    }
    if (type == "remove") {
      handleValue(value - 1, min, max);
    }
  }

  function handleQuantity(quantity) {
    if (quantity > 0) {
      return `In Stock: ${quantity}`;
    }
    return `Out of Stock`;
  }

  function handleDiscount(price, discount) {
    return (price - price * discount * 0.01).toFixed(2);
  }

  console.log(value);
  return (
    <div className="flex flex-col border border-black rounded-md p-4">
      <img src="https://placehold.co/400" className="rounded-md"></img>
      <div className="flex flex-col items-center justify-center pt-3">
        <h3 className="font-bold text-2xl">{product.name}</h3>
        <p className="">{handleQuantity(product.quantity)}</p>
        {product.discount ? (
          <div className="flex gap-5">
            <p className="line-through">{product.price}</p>
            <p>{handleDiscount(product.price, product.discount)}</p>
          </div>
        ) : (
          <p>{product.price}</p>
        )}
      </div>
      <div className="flex justify-between item-center pt-3">
        <Minus
          size={25}
          strokeWidth={1.5}
          className="hover:cursor-pointer"
          onClick={() => handleButton(value, "remove", 0, product.quantity)}
        />
        <p
          type="number"
          /* onChange={(e) => handleValue(e.target.value, 0, product.quantity)} */
          className="flex-1 text-center text-lg"
        >
          {value}
        </p>
        <Plus
          size={25}
          strokeWidth={1.5}
          className="hover:cursor-pointer"
          onClick={() => handleButton(value, "add", 0, product.quantity)}
        />
      </div>
    </div>
  );
}
