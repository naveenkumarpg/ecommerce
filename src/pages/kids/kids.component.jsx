import React from "react";
import CollectionPreview from "../../components/CollectionPreview/collection-preview";

import Kids from "../../data/kids";

function ShopPage() {
  return (
    <div className="container shop-page">
      <CollectionPreview data={Kids} />
    </div>
  );
}

export default ShopPage;
