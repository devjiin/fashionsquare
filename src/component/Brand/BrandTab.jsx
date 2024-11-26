import classNames from "classnames";
import React, { useState } from "react";

export default function BrandTab({
  data,
  activeTab,
  setActiveTab,
  setBrandName,
}) {
  const { tabs, currentTabId } = data || {};
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const handleClickTab = (t) => {
    setActiveTab(t);
    setActiveCategoryIdx(0);
  };
  const handleClickCategory = (brand, idx) => {
    setActiveCategoryIdx(idx);
    setBrandName(brand);
  };

  return (
    <>
      <div className="box__brand-tab--sub" role="tablist">
        {tabs.map((t) => {
          const { id, tabName } = t || {};
          return (
            <button
              role="tab"
              id={id}
              className={classNames(
                "link__tab",
                activeTab === id && "selected"
              )}
              aria-selected={activeTab === id}
              aria-controls={id}
              key={id}
              onClick={() => handleClickTab(id)}
            >
              {tabName}
            </button>
          );
        })}
      </div>
      {tabs.map((t, idx) => {
        const { id } = t || {};
        const arr = t.items.split("");
        return (
          <div
            id={id}
            key={idx}
            role="tabpanel"
            className="box__brand-tabpanel"
            style={{ display: activeTab === id ? "block" : "none" }}
          >
            <ul className="list__category">
              {arr.map((item, i) => {
                return (
                  <li className="list-item" key={item}>
                    <a
                      href="#"
                      className={classNames(
                        "link__category",
                        activeCategoryIdx === i && "selected"
                      )}
                      onClick={() => handleClickCategory(item, i)}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
