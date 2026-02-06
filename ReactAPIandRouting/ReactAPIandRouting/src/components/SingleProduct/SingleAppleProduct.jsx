import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleAppleProduct.css";

export default function SingleAppleProduct() {
  const { id } = useParams(); // read ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchSingle = async () => {
      try {
        const res = await fetch(`http://localhost:3001/iphone/${id}`);
        const data = await res.json();

        setProduct(data);
      } catch (error) {
        console.log("Error fetching single product:", error);
      }
    };

    fetchSingle();
  }, [id]);

  if (!product) {
    return <p className="loading">Loading product...</p>;
  }

  return (
    <section className="single-product-wrapper">
      <div className="single-left">
        <img src={product.Product_img} className="single-img" />
      </div>

      <div className="single-right">
        <h1 className="single-title">{product.Product_name}</h1>

        <p className="single-brief">{product.Product_brief_description}</p>

        <p className="single-desc">{product.Product_description}</p>

        <p className="single-price">Starting at: {product.Starting_price}</p>
        <p className="single-range">{product.Price_range}</p>

        <a
          className="single-link"
          href={product.Product_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
