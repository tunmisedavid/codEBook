import { Navigate, Route, Routes } from "react-router-dom";
import { Cart, Dashboard, Home, Login, Order, PageNotFOund, ProductDetail, Products, Register } from "../pages";
import ProtectedRoutes from "./ProtectedRoutes";
const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="landing" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          path="cart"
          element={
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          }
        />
        <Route
          path="order-summary"
          element={
            <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<PageNotFOund />} />
      </Routes>
    </>
  );
};

export default Allroutes;
