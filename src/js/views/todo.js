import React, {useState} from "react";

import "../../styles/todo.css";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [, setCount] = useState(0);

  return (
    <div className="container">
      <div className="main-div">
        <p>To Do's</p>
        <div className="input-div">
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                onKeyDown={(e) => keyPress(e)}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
              ></input>
            </div>
            <div className="col-1">
              <button id="my_add_btn" onClick={() => addTodo()}>
                Task
              </button>
            </div>
          </div>
          <ul id="my-list" className="todo-container"></ul>
        </div>
      </div>
    </div>
  );
};
