import React from "react";
import CollectionPreview from "../../components/CollectionPreview/collection-preview";

import Womens from "../../data/womens";

function ShopPage() {
  return (
    <div className="container shop-page">
      <CollectionPreview data={Womens} />
    </div>
  );
}

export default ShopPage;
