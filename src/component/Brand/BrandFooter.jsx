import React from "react";

export default function BrandFooter({ selectedBrands, setSelectedBrands }) {
  const deleteBtn = (e) => {
    e.target.parentElement.remove();
  };

  const resetBrands = () => {
    // setSelectedBrands({});
  };

  return (
    <div className="box__brand-footer">
      {selectedBrands.length > 0 && (
        <div className="box__filter-wrap">
          <div className="box__filter">
            {selectedBrands.map((item) => {
              const { brandName, brandSeq } = item || {};
              return (
                <span className="text__filter" key={`brand-` + brandSeq}>
                  {brandName}
                  <button
                    type="button"
                    className="button__delete"
                    onClick={(e) => deleteBtn(e)}
                  >
                    <span className="for-a11y">삭제</span>
                  </button>
                </span>
              );
            })}
          </div>
          <div className="box__reset">
            <button
              type="button"
              className="button__reset"
              onClick={resetBrands}
            >
              <span className="for-a11y">선택 초기화</span>
            </button>
          </div>
        </div>
      )}

      <div className="box__button">
        <button type="button" className="button__cancel">
          취소
        </button>
        <button type="button" className="button__apply">
          적용
        </button>
      </div>
    </div>
  );
}
