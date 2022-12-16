import React from "react";

const DisplayProducts = ({ allProducts }) => {
  return (
    <div className="products-container">
      {allProducts?.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </div>
  );
};
export default DisplayProducts;
