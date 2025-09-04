import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import AllProducts from "./pages/shop/AllProducts";
import Mens from "./pages/shop/Mens";
import Womens from "./pages/shop/Womens";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/shop" element={<Shop />}>
          <Route index element={<AllProducts />} />
          <Route path="mens" element={<Mens />} />
          <Route path="womens" element={<Womens />} />
        </Route>

        <Route path="/cart" element={<NotFound />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
