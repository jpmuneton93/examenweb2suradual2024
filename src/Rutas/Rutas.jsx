import { Home } from "../Home/Home";

import { Routes,Route } from "react-router-dom";

export function Rutas() {
    return (
      <>
        <Routes>
  
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
      </>
    );
  }