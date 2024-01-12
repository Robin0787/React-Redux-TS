import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import "./index.css";
import Home from "./pages/Home/Home.tsx";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
    <Toaster position="bottom-left" />
  </React.StrictMode>
);
