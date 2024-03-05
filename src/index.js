import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductSummary from "./pages/ProductSummary";
import ProductList from "./pages/ProductList";
import '../src/utils/i18n'

const router = createBrowserRouter([
  {
    path: "/osk",
    element: <App/>,
  },
  {
    path: "/sum",
    element: <ProductSummary/>,
  },
  {
    path: "/productlist",
    element: <ProductList/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
