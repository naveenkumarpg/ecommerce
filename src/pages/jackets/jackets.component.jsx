import React from "react";
import CollectionPreview from "../../components/CollectionPreview/collection-preview";

import Jackets from "../../data/jackets";

function ShopPage() {
  return (
    <div className="container shop-page">
      <CollectionPreview data={Jackets} />
    </div>
  );
}

export default ShopPage;
