import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { bubbleSort } from "./function/wayToSort";
import { createRandomArray } from "./function/createRamdomArray";
const WayToSort = ["Chọn cách sắp xếp", "BubleSort", "MergeSort"];
function App() {
  const [randomArray, setRandomArray] = useState([]);
  const [sortArray, setSortArray] = useState([]);
  const [showRandom, setShowRandom] = useState(true);
  const [sortWay, setSortWay] = useState("");

  const handelCreateArray = () => {
    const array = createRandomArray();
    console.log("array :", array, "abcdefghijklmnopqrstuvwxyz".toUpperCase());
    setRandomArray(array);
  };
  const handleChangeSelectSortWay = (e) => {
    console.log(e);
    setSortWay(e);
    if (e == "BubleSort") {
      const input = randomArray;
      const sort = bubbleSort(input);
      setSortArray(sort);
    }
  };
  console.log("random :", randomArray);
  return (
    <div style={{ padding: "24px" }}>
      Intern test
      <div>Tạo một mảng 1000 chuỗi random, sắp xếp nó theo 5 cách</div>
      <button onClick={() => handelCreateArray()}>Tạo mảng</button>
      {randomArray?.length > 0 && (
        <div>
          <div>Mảng random được tạo là: </div>
          <button
            onClick={() => {
              setShowRandom(!showRandom);
            }}
          >
            {showRandom ? "Ẩn mảng" : "Hiện mảng"}
          </button>
          {showRandom && (
            <div style={{ padding: "24px" }}>
              {randomArray.map((item) => (
                <div style={{ display: "inline-block" }}>{item} ; </div>
              ))}
            </div>
          )}
          <div>Chọn cách sắp xếp mảng</div>
          <select
            onChange={(e) => {
              handleChangeSelectSortWay(e.target.value);
            }}
          >
            {WayToSort.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>

          {sortArray?.length && (
            <div>
              <div>Đã sắp xếp mảng theo thuật toán {sortWay}</div>
              <div>Mảng sau sắp xếp:</div>
              {sortArray.map((item) => (
                <div style={{ display: "inline-block" }}>{item} ; </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
