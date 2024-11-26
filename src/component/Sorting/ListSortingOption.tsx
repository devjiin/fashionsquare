import React from "react";

export default function ListSortingOption() {
  return (
    <ul className="list__sorting-option">
      <li className="list-item list-item--active">
        <a
          className="link"
          role="button"
          aria-label="판매 인기순으로 정렬하기"
          href="/n/fashionsquare/category?s=8"
        >
          <img
            src="//script.gmarket.co.kr/build/mobile/image/single/fashionsquare/component/sorting/icon_sort_hot_3x.png"
            loading="lazy"
            decoding="async"
            width="32"
            height="32"
            className="image"
            alt="판매 인기순"
          />
          판매 인기순
        </a>
      </li>
      <li className="list-item">
        <a
          className="link"
          role="button"
          aria-label="낮은 가격순으로 정렬하기"
          href="/n/fashionsquare/category?s=1"
        >
          <img
            src="//script.gmarket.co.kr/build/mobile/image/single/fashionsquare/component/sorting/icon_sort_low_3x.png"
            loading="lazy"
            decoding="async"
            width="32"
            height="32"
            className="image"
            alt="낮은 가격순"
          />
          낮은 가격순
        </a>
      </li>
      <li className="list-item">
        <a
          className="link"
          role="button"
          aria-label="높은 가격순으로 정렬하기"
          href="/n/fashionsquare/category?s=2"
        >
          <img
            src="//script.gmarket.co.kr/build/mobile/image/single/fashionsquare/component/sorting/icon_sort_high_3x.png"
            loading="lazy"
            width="32"
            height="32"
            className="image"
            alt="높은 가격순"
          />
          높은 가격순
        </a>
      </li>
    </ul>
  );
}
