import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/index.scss";
import { RouterProvider } from "react-router-dom";
import router from "@/route";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
