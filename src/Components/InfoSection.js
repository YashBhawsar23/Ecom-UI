import React from "react";
import "./Styles/InfoSection.css";

const InfoSection = () => {
  const features = [
    {
      id: 1,
      imgSrc: "images/Info/f1.png",
      alt: "free shipping",
      text: "Free Shipping",
    },
    {
      id: 2,
      imgSrc: "images/Info/f2.png",
      alt: "online order",
      text: "On Schedule",
    },
    {
      id: 3,
      imgSrc: "images/Info/f3.png",
      alt: "save money",
      text: "Save Money",
    },
    {
      id: 4,
      imgSrc: "images/Info/f4.png",
      alt: "promotions",
      text: "promotions",
    },
    {
      id: 5,
      imgSrc: "images/Info/f5.png",
      alt: "happy sell",
      text: "happy sell",
    },
    {
      id: 6,
      imgSrc: "images/Info/f6.png",
      alt: "24/7 support",
      text: "24/7 support",
    },
  ];

  return (
    <section className="features">
      {features.map((feature) => (
        <div key={feature.id} className="f-box">
          <img src={feature.imgSrc} alt={feature.alt} />
          <h6 className="text">{feature.text}</h6>
        </div>
      ))}
    </section>
  );
};

export default InfoSection;
