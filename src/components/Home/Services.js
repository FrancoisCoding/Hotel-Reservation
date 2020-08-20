import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState([
    {
      icon: <FaCocktail />,
      title: "Free Cocktails",
      info:
        "If you are looking for a place to enjoy the most innovative cocktails in Beach Resort, you are in luck, because we renewed our cocktail menu with some explosive and unrivalled combinations. ",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info:
        "Discover a captivating tropical paradise at Beach Resort. Overlooking the Caribbean sands of Palm Beach, our beautifully-styled hotel boasts spacious accommodations on the sunny beaches with exceptional resort amenities.",
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info:
        "The Beach Resort Shuttle makes getting around town easy and carefree.",
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info:
        "Our beers are crafted for a chosen few, a small cadre of renegades and rebels who enjoy a beer that pushes the limits of what is commonly accepted as taste.",
    },
  ]);
  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
