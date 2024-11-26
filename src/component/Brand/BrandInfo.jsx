import React from "react";
import CheckBox from "./fragments/Checkbox";

export default function BrandInfo({
  data,
  brandName,
  activeTab,
  selectedBrands,
  setSelectedBrands,
  setBrandVal,
}) {
  const arr = Object.keys(data.indexes);

  return data.indexes[brandName] === undefined ? (
    <div className="box__brand-notice">
      <p className="text">브랜드가 없습니다.</p>
      <span>다른 브랜드를 선택해주세요.</span>
    </div>
  ) : (
    <div className="box__brand-info">
      <ul className="list__brand">
        {arr.map((item, i) => {
          return (
            brandName === item &&
            data.indexes[item].map((val) => {
              const name =
                activeTab === "tab1"
                  ? data.brands[val].brandNameKr
                  : data.brands[val].brandNameEn;
              return (
                <li className="list-item" key={val}>
                  <CheckBox
                    val={val}
                    name={name}
                    selectObj = {data.brands[val]}
                    selectedBrands={selectedBrands}
                    setSelectedBrands={setSelectedBrands}
                    setBrandVal={setBrandVal}
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
