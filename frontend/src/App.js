import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Containers/Login/Login";
import "./App.css";

function App() {
  return (
    <div className="main-app-container">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}



export default App;