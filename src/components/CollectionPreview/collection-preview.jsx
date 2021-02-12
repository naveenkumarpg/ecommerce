import React from "react";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ data }) => {
  console.log(data);
  const { title, items } = data;

  return (
    <div className="container collection-preview">
      <h1 className="title">{title}</h1>
      <div className="row preview">
        {items.map((product) => {
          const { id, name, price } = product;
          return (
            <div
              key={id}
              className="collection-item col-sm-12 col-md-6 col-lg-3 "
            >
              <img
                className="image"
                src="https://dummyimage.com/450x600/f3f3f3/333.jpg"
                alt="shoppable item"
              />
              <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPreview;
