import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Cart } from "../Pages/Cart";
import { Finish } from "../Pages/Finish";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Finish" element={<Finish />} />
      <Route path="/*" element={<Finish />} />
    </Routes>
  );
}

export default AppRoutes;