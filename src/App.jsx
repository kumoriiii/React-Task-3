import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import AllProducts from "./pages/shop/AllProducts";
import Mens from "./pages/shop/Mens";
import Womens from "./pages/shop/Womens";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Nested Routes for Shop */}
        <Route path="/shop" element={<Shop />}>
          <Route index element={<AllProducts />} /> {/* default */}
          <Route path="mens" element={<Mens />} />
          <Route path="womens" element={<Womens />} />
        </Route>
      </Routes>
    </div>
  );
}
