import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Tab() {
  const [activeTab, setActiveTab] = useState("brand");
  const handleClick = (t) => {
    if (t === "brand") {
			setActiveTab("brand");
    } else {
		setActiveTab("category");
    }
};
  return (
    <div className="box__brand-index box__brand-index--result">
      <div className="box__brand-index--inner">
        <div className="box__brand-tab">
          <Link
            to="/"
            className={classNames(
              "link__tab",
              activeTab === "brand" ? "selected" : null
            )}
            onClick={() => handleClick("brand")}
          >
            브랜드
          </Link>
          <Link
            to="/category"
            className={classNames(
              "link__tab",
              activeTab === "category" ? "selected" : null
            )}
            onClick={() => handleClick("category")}
          >
            카테고리
          </Link>
        </div>
      </div>
    </div>
  );
}
