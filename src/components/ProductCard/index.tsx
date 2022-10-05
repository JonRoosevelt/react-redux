import React, { FC } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
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
