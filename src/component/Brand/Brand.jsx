import React, { useState } from "react";
import BrandTab from "./BrandTab";
import BrandInfo from "./BrandInfo";
import BrandFooter from "./BrandFooter";

export default function Brand({ data }) {
  const { brandsTab } = data || {};
  const [activeTab, setActiveTab] = useState(brandsTab.currentTabId);
  const [brandName, setBrandName] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [brandVal, setBrandVal] = useState("");
  return (
    <div className="box__brand-index box__brand-section">
      <BrandTab
        data={data.brandsTab}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setBrandName={setBrandName}
      />
      <BrandInfo
        data={data.brandData.brandInfo}
        brandName={brandName}
        activeTab={activeTab}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        setBrandVal={setBrandVal}
      />
      <BrandFooter
        selectedBrands={selectedBrands}
        brandVal={brandVal}
        setBrandVal={setBrandVal}
      />
    </div>
  );
}
