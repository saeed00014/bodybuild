import './index.css'

import React from "react";
import ReactDOM from "react-dom/client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cardSlice from "./store/cardSlice";
import signinSlice from "./store/signinSlice";

import App from "./App";

const store = configureStore({
  reducer: {
    card: cardSlice.reducer,
    signin: signinSlice.reducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
)
