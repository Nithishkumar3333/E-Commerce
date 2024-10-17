// import "./App.css";
import Appbar from "./Components/Pages/Appbar";
// import ProductDetailpage from "../src/Components/Pages/ProductDetailPage";
// import CategoryPage from "../src/Components/Pages/CategoryPage";
// import Cart from "../src/Components/Pages/Cart";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Appbar />} />
          {/* <Route path="/ProductDetailPage" element={<ProductDetailpage />} /> */}
          {/* <Route path="/CategoryPage" element={<CategoryPage />} /> */}
          {/* <Route path="/Cart" element={<Cart />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
