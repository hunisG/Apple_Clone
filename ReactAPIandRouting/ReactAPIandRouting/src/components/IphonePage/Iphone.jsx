import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Iphone.css";

export default function Iphone() {
  const [iphoneList, setIphoneList] = useState([]);

  console.log(iphoneList);
  useEffect(() => {
    const fetchIphones = async () => {
      try {
        const res = await fetch("http://localhost:3001/iphones");
        const data = await res.json();
        console.log(data);
        setIphoneList(data);
      } catch (error) {
        console.log("Error fetching iPhones:", error);
      }
    };

    fetchIphones();
  }, []);

  return (
    <section className="iphone-section">
      <h1 className="iphone-title">iPhone Products</h1>

      <div className="iphone-grid">
        {iphoneList.map((item) => (
          <div key={item.Product_id} className="iphone-card">
            <img src={item.Product_img} className="iphone-img" />

            <h2>{item.Product_name}</h2>

            <p>{item.Product_brief_description}</p>

            <p className="price">Starting at: {item.Starting_price}</p>
            <a className="learn-btn" href={`/iphone/${item.Product_id}`}>
              Learn More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
