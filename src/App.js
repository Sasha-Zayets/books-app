import React from "react";
import DefaultLayout from "./layouts/Default";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
