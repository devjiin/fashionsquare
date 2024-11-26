import React from "react";
import CheckBox from "./fragments/Checkbox";

export default function BrandInfo({
  data,
  word,
  activeTab,
  selectedBrands,
  setSelectedBrands,
}) {
  const arr = Object.keys(data.indexes);
  return data.indexes[word] === undefined ? (
    <div className="box__brand-notice">
      <p className="text">브랜드가 없습니다.</p>
      <span>다른 브랜드를 선택해주세요.</span>
    </div>
  ) : (
    <div className="box__brand-info">
      <ul className="list__brand">
        {arr.map((item, i) => {
          return (
            word === item &&
            data.indexes[item].map((val) => {
              return (
                <li className="list-item" key={val}>
                  <CheckBox
                    brand={data.brands[val]}
                    brandNameKey={
                      activeTab === "tab1" ? "brandNameKr" : "brandNameEn"
                    }
                    selectedBrands={selectedBrands}
                    setSelectedBrands={setSelectedBrands}
                  />
                </li>
              );
            })
          );
        })}
      </ul>
    </div>
  );
}
