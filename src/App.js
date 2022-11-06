import React, { useReducer } from "react";
import "./styles.css";

const initialState = {
  num1: 0,
  num3: "",
  num2: "",
  value: 0,
  operator: "",
};
const reducer = (state, action) => {
  console.log(state, action.payload);
  switch (action.type) {
    case "AC":
      return { ...state, operator: "", num2: "", num1: 0, value: 0 };

    case "C":
      if (state.num2.length > 1) {
        return { ...state, num2: state.num2.slice(0, -1) };
      } else {
        return { ...state, num2: "" };
      }

    case "op":
      if (!state.value) {
        return {
          ...state,
          operator: action.payload,
          num1: state.num2,
          num2: "",
        };
      } else {
        return {
          ...state,
          operator: action.payload,
          num2: "",
        };
      }

    case "eq":
      if (state.operator === "+") {
        console.log("addition");
        return {
          ...state,
          value: +state.num1 + +state.num2,
          num1: +state.num1 + +state.num2,
          num2: "",
          operator: "",
        };
      } else if (state.operator === "-") {
        console.log("subtraction");
        return {
          ...state,
          value: +state.num1 - +state.num2,
          num1: +state.num1 - +state.num2,
          num2: "",
          operator: "",
        };
      } else if (state.operator === "*") {
        console.log("multiplication");
        return {
          ...state,
          value: +state.num1 * +state.num2,
          num1: +state.num1 * +state.num2,
          num2: "",
          operator: "",
        };
      } else if (state.operator === "/") {
        console.log("division");
        return {
          ...state,
          value: +state.num1 / +state.num2,
          num1: +state.num1 / +state.num2,
          num2: "",
          operator: "",
        };
      } else return state;

    case "num":
      if (state.num2 === "" && action.payload === ".") {
        return { ...state, num2: "0" + action.payload };
      } else if (state.num2 === "") {
        return { ...state, num2: action.payload };
      } else {
        if (action.payload === "." && state.num2.includes(".")) {
          return state;
        } else {
          return { ...state, num2: state.num2 + action.payload };
        }
      }

    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state, state.value);
  return (
    <div>
      <h1>Calculator</h1>

      <div className="calculator">
        <div className="container">
          <div className="display">
            {!state.value ? state.num2 : state.value}
            <span className="cursor" />
          </div>
          <button className="btn" onClick={() => dispatch({ type: "AC" })}>
            AC
          </button>
          <button className="btn" onClick={() => dispatch({ type: "C" })}>
            C
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "op", payload: "*" })}
          >
            x
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "op", payload: "/" })}
          >
            /
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "num", payload: "7" })}
          >
            7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "num", payload: "8" })}
          >
            8
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "num", payload: "9" })}
          >
            9
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "op", payload: "+" })}
          >
            +
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "num", payload: "4" })}
          >
            4
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "num", payload: "5" })}
          >
            5
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "num", payload: "6" })}
          >
            6
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "op", payload: "-" })}
          >
            -
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "num", payload: "1" })}
          >
            1
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "num", payload: "2" })}
          >
            2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "num", payload: "3" })}
          >
            3
          </button>
          <button
            className="btn zero "
            onClick={() => dispatch({ type: "num", payload: "0" })}
          >
            0
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "num", payload: "." })}
          >
            .
          </button>
          <button className="btn eq" onClick={() => dispatch({ type: "eq" })}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
