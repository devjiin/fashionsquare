import React, { useState } from "react";
export default function CheckBox({
  val,
  name,
  selectObj,
  selectedBrands,
  setSelectedBrands,
  setBrandVal,
}) {
  const [isChecked, setIsChecked] = useState(false);
    // const handleClick = (e, name) => {
    //   setSelectedBrands([...selectInput, name]);
    //   setBrandVal(e.target.value);
    // };

  const handleChange = (e) => {
    setIsChecked(!isChecked);
    setBrandVal(e.target.value);
    setSelectedBrands([...selectedBrands, name]);
  };
  return (
    <>
      <input
        type="checkbox"
        id={`inp` + val}
        checked={isChecked}
        onChange={(e) => handleChange(e)}
        value={val}
      />
      <label htmlFor={`inp` + val}>{name}</label>
    </>
  );
}
