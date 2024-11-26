import React from "react";
import { Route, Routes } from "react-router-dom";
import Category from "./component/Category/Category";
import Brand from "./component/Brand/Brand";

export default function Router({ data }) {
    const contentData = {
		brand: {
			brandData: data.brandData,
			brandsTab: data.brandsTab,
		},
		category: {
			categories: data.categories,

		}
	}
  return (
    <Routes>
      <Route path="/" element={<Brand data={contentData.brand} />}></Route>
      <Route path="/category" element={<Category />}></Route>
    </Routes>
  );
}
