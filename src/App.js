import { Route, Routes, useLocation } from "react-router-dom";
import "./commonStyles/index.css";
import DefaultLayout from "./components/default_layout/index";
import CustomeLayout from "./components/custome_layout/index";
import Home from "./pages/Home/index";
import BrithDay from "./pages/BrithDay/index";
import BasicPackage from "./pages/Basicpackage/index";
import "./commonStyles/index.css";
import { AnimatePresence } from "framer-motion";
import SingleProduct from "./pages/Single_Product";
import Cart from "./pages/Cart";
import PaymentPorccess from "./pages/Payment-Process";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "./store/auth";
// import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  const location = useLocation();
  const userData = localStorage.getItem("user-info");
  const userInfo = JSON.parse(userData);
  const { user } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();
  useEffect(() => {
    if (userData) {
      dispatch(getUserData(userInfo.id));
    }
  }, []);
  return (
    <div className="App">
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<DefaultLayout userInfo={user} />}>
            <Route index element={<Home />}></Route>
            <Route path="/basicPackage" element={<BasicPackage />}></Route>
            <Route path="/brithDay" element={<BrithDay />}></Route>
            <Route path="/product/:id" element={<SingleProduct />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route
              path="/payment-process"
              element={
                // <ProtectedRoute>
                <PaymentPorccess />
                // </ProtectedRoute>
              }
            ></Route>
          </Route>
          <Route path="/about" element={<CustomeLayout />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
