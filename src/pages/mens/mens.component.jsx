import React from "react";
import CollectionPreview from "../../components/CollectionPreview/collection-preview";

import Mens from "../../data/mens";

function ShopPage() {
  return (
    <div className="container shop-page">
      <CollectionPreview data={Mens} />
    </div>
  );
}

export default ShopPage;
