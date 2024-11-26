import React from "react";
import ListSortingOption from "./ListSortingOption";

export default function Sort() {
  return (
    <div className="box__sorting-information">
      <div className="box__search-result">
        <span className="text__item-count text__emphasis">10,559</span>
        <span className="text">개의 검색 결과</span>
      </div>
      <div className="box__sorting">
        <button
          type="button"
          className="button__sorting"
          title="정렬 방식을 변경하려면 버튼을 클릭해 주세요."
          aria-haspopup="dialog"
          data-montelena-acode="200005750"
          data-montelena-page_type="3"
        >
          정렬
        </button>
        <div className="box__sorting-option" role="dialog" aria-modal="true">
          <div className="box__dimmed" aria-hidden="true"></div>
          <div className="box__option-content">
            <p className="text__title">정렬</p>
            <button type="button" className="button__close">
              닫기
            </button>
            <ListSortingOption />
          </div>
        </div>
      </div>
    </div>
  );
}
