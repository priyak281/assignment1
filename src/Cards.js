import React from "react";

import MediaCard from "./Card";
import data from "./Data";
const Cards = () => {
  return (
    <div>
      {data.cardData.map((item, index) => {
        return (
          <MediaCard
            key={index}
            img={item.img}
            title={item.title}
            url={item.url}
          />
        );
      })}
    </div>
  );
};
export default Cards;
