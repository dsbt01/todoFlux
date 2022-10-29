import React, {useState, useEffect, useContext} from "react";

import "../../styles/todo.css";

import { Context } from "../store/appContext";


export const Todo = () => {
  const [, setCount] = useState(0);
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="main-div">
        <p>To Do's</p>
        <div className="input-div">
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                onKeyDown={(e) => actions.keyPress(e)}
                onChange={(e) => actions.updateTaskToEnter(e.target.value)}
                value={store.inputValue}
              ></input>
            </div>
            <div className="col-1">
              <button id="my_add_btn" onClick={() => actions.addTodo()}>
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