import React, { useState } from "react";

export default function CheckBox({
  brand,
  brandNameKey,
  selectedBrands,
  setSelectedBrands,
}) {
  const { brandSeq } = brand || {};
  // const handleClick = (e, name) => {
  //   setSelectedBrands([...selectInput, name]);
  // };

  const handleChange = (e) => {
    if (e.target.checked) {
      setSelectedBrands([
        ...selectedBrands,
        { brandName: brand[brandNameKey], brandSeq: brandSeq },
      ]);
    } else {
      setSelectedBrands(
        selectedBrands.filter((brand) => brand.brandSeq !== brandSeq)
      );
    }
  };
  return (
    <>
      <input
        type="checkbox"
        id={`inp` + brandSeq}
        onChange={(e) => handleChange(e)}
        value={brandSeq}
      />
      <label htmlFor={`inp` + brandSeq}>{brand[brandNameKey]}</label>
    </>
  );
}
