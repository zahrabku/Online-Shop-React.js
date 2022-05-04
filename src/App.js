import { Home } from "./components/Home";
import "./styles/window-styles.css";
import { Product } from "./components/Product";
import { AboutUs } from "./components/AboutUs";
import Navbar from "./components/navbar";
import { Route, Routes, Redirect } from "react-router-dom";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} exact element={<Home />} />
        <Route path={"/product/:id"} element={<AboutUs />} />
        <Route path={"/product"} element={<Product />} />
        <Route path={"/notFound"} element={<NotFound />} />
        <Route path={"/aboutus/:blah?"} element={<AboutUs />} />
        {/* <Redirect from="/article" to={"/aboutus"} />
        <Redirect to="/notFound" /> */}
      </Routes>
    </div>
  );
}

export default App;
