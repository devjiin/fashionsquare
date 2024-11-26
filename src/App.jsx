import React, { useEffect } from "react";

import Header from "./component/Header/Header";
import SkipNavigation from "./component/SkipNavigation/SkipNavigation";
import Tab from "./component/Tab/Tab";
import Router from "./Route";
import BottomNavigation from "./component/BottomNavigation/BottomeNavigation";
import dummyData from "./component/dummyData/dummyData.json";

async function fetchDataHandler() {
  //   const response = await fetch("/data/mockData.json");
  //   const data = response.json();
  //   console.log(data.data);
  //   const fashionsquareData = data.results.map((data: any) => {
  //     return console.log(data);
  //   });
}

export default function App() {
  //   const [mockData, setMockData] = useState({});
  useEffect(() => {
    // const fetchDataHandler = async () => {
    //   const response = await fetch("/data/mockData.json");
    //   const data = await response.json();
    //   setMockData(data);
    // };
    // fetchDataHandler();
    document.body.classList.add(
      "service__fashionsquare",
      "has-bnbar",
      "page__fashionsquare_lp"
    );
  }, []);
  return (
    <>
      <SkipNavigation />
      <Header />
      <div role="main">
        <div id="container">
          <div id="service__fashionsqure" className="box__fashionsqure-wrap">
            <Tab data={dummyData.tabs} />
            <Router data={dummyData} />
          </div>
        </div>
      </div>
      <BottomNavigation />
    </>
  );
}
