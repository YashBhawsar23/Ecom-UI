import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import "./Styles/ProductSection.css";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      imgSrc: "images/products/f1.jpg",
      brand: "adidas",
      title: "Cartoon Astronaut T-Shirts",
      price: "₹849",
    },
    {
      id: 2,
      imgSrc: "images/products/f2.jpg",
      brand: "adidas",
      title: "Cartoon Astronaut T-Shirts",
      price: "₹849",
    },
    {
      id: 3,
      imgSrc: "images/products/f3.jpg",
      brand: "adidas",
      title: "Cartoon Astronaut T-Shirts",
      price: "₹849",
    },
    {
      id: 4,
      imgSrc: "images/products/f4.jpg",
      brand: "adidas",
      title: "Cartoon Astronaut T-Shirts",
      price: "₹849",
    },
    {
      id: 5,
      imgSrc: "images/products/f5.jpg",
      brand: "adidas",
      title: "Cartoon Astronaut T-Shirts",
      price: "₹849",
    },
    {
      id: 6,
      imgSrc: "images/products/f6.jpg",
      brand: "adidas",
      title: "Cartoon Astronaut T-Shirts",
      price: "₹849",
    },
    {
      id: 7,
      imgSrc: "images/products/f7.jpg",
      brand: "adidas",
      title: "Cartoon Astronaut T-Shirts",
      price: "₹849",
    },
    {
      id: 8,
      imgSrc: "images/products/f8.jpg",
      brand: "adidas",
      title: "Cartoon Astronaut T-Shirts",
      price: "₹849",
    },
  ];

  return (
    <div className="pro-section">
      <section className="product-section section-p1">
        <h1>Latest Collection </h1>
        <div className="pro-collection">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imgSrc} alt="product image" />
              <h4>{product.title}</h4>
              <div className="fix">
                <h4>{product.price}</h4>
                <button className="add-to-cart-btn">
                  <FaCartShopping className="cart-icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
