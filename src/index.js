import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// // For Axios Interceptors
// import axios from "axios";

// // For GET requests
// axios.interceptors.request.use(
//   (req) => {
//     // Add configurations here
//     return req;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

// // For POST requests
// axios.interceptors.response.use(
//   (res) => {
//     // Add configurations here
//     if (res.status === 201) {
//       console.log("Posted Successfully");
//     }
//     return res;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
