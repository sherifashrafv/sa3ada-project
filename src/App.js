import { Route, Routes, useLocation } from "react-router-dom";
import "./commonStyles/index.css";
import DefaultLayout from "./components/default_layout/index";
import CustomeLayout from "./components/custome_layout/index";
import Home from "./pages/Home/index";
import BrithDay from "./pages/BrithDay/index";
import BasicPackage from "./pages/Basicpackage/index";
import "./commonStyles/index.css";
import { AnimatePresence } from "framer-motion";
function App() {  
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/basicPackage" element={<BasicPackage />}></Route>
            <Route indexn path="/brithDay" element={<BrithDay />}></Route>
          </Route>
          <Route path="/about" element={<CustomeLayout />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
