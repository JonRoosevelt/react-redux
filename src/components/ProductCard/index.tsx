import React, { FC } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity: number;
  image: string;
}

export const ProductCard: FC<Product> = (props) => {
  return (
    <div className="product">
      <h1>{props.title}</h1>
      <img src={props.image} />
      <p>{props.description}</p>
      <span>{props.price}</span>
    </div>
  );
};
