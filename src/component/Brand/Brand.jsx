import React, { useState } from "react";
import BrandTab from "./BrandTab";
import BrandInfo from "./BrandInfo";
import BrandFooter from "./BrandFooter";

export default function Brand({ data }) {
  const { brandsTab } = data || {};
  const [activeTab, setActiveTab] = useState(brandsTab.currentTabId);
  const [word, setWord] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  return (
    <div className="box__brand-index box__brand-section">
      <BrandTab
        data={data.brandsTab}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setWord={setWord}
      />
      <BrandInfo
        data={data.brandData.brandInfo}
        word={word}
        activeTab={activeTab}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
      />
      <BrandFooter
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
      />
    </div>
  );
}
