import React from "react";
import CollectionPreview from "../../components/CollectionPreview/collection-preview";

import Sneakers from "../../data/sneakers";

function ShopPage() {
  return (
    <div className="container shop-page">
      <CollectionPreview data={Sneakers} />
    </div>
  );
}

export default ShopPage;
