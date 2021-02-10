import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item col-sm-12 col-md-6 col-lg-3 ">
    <img className="image" src={`${imageUrl}`} alt="shoppable item" />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
