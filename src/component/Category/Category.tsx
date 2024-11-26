import React from "react";
import SubCategory from "./SubCategory";
import HeaderTopFilter from "../Filter/HeaderTopFilter";
import Sort from "../Sorting/Sort";

export default function Category() {
  return (
    <>
      <SubCategory />
      <HeaderTopFilter />
      <Sort />
    </>
  );
}
