import React from "react";
import CollectionPreview from "../../components/CollectionPreview/collection-preview";

import Hats from "../../data/hats";

function ShopPage() {
  return (
    <div className="container shop-page">
      <CollectionPreview data={Hats} />
    </div>
  );
}

export default ShopPage;
