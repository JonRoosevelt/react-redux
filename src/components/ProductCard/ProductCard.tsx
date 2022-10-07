import React, { FC } from "react";
import "./Productcard.css";

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
    <div className="Product">
      <h1>{props.title}</h1>
      <img src={props.image} />
      <p className="product-description">{props.description}</p>
      <p className="product-price">${props.price}</p>
    </div>
  );
};
