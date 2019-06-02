import React from "react";
import ReactDOM from "react-dom";
import Board from "./containers/Board";
import { Provider } from "react-redux";
import store from "./configureStore";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Board />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
