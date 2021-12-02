import { useReducer } from "react";
import "./App.css";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "setcount":
        state = {
          ...state,
          count: state.count + 1,
        };
        break;
      case "setcountMinus":
        state = {
          ...state,
          count: state.count - 1,
        };
        break;
      case "setname":
        state = {
          ...state,
          name: "Mahamadaminov",
        };
        break;
    }

    return state;
  }

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    status: "student",
    name: "Ahrorbek",
    results: "active",
  });

  function setCount() {
    dispatch({ type: "setcount" });
  }

  function setCountMinus() {
    dispatch({ type: "setcountMinus" });
  }

  function setName() {
    dispatch({ type: "setname" });
  }

  return (
    <div className="app">
      <button onClick={setCount}>+</button>
      <p>{state.count}</p>
      <button onClick={setCountMinus}>-</button>

      <p>{state.name}</p>
      <button onClick={setName}>changeName</button>
    </div>
  );
}

export default App;
