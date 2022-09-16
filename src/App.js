import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles.scss";
import HomeComponent from "./pages/home/Home";
import ResponseComponent from "./pages/response/Response";
import ItemComponent from "./pages/item/Item";
import HeaderComponent from "./components/header.component";

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/items" element={<ResponseComponent />} />
          <Route path="/items/:id" element={<ItemComponent />} />
        </Routes>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
