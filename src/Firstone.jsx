import React, { useState } from "react";

function Firstone() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const writing = (event) => {
    setInputList(event.target.value);
  };
  const addItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItem = (key) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== key;
      });
    });
  };
  return (
    <div className="">
      <div className="card">
        <h1>The list</h1>
        <input
          className="input"
          type="text"
          placeholder="Enter something"
          value={inputList}
          onChange={writing}
        ></input>
        <button onClick={addItem}> + </button>
        <ul>
          {Items.map((interval, key) => {
            return (
              <>
                <button onClick={deleteItem(key)}>*</button>
                <li>{interval}</li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Firstone;
