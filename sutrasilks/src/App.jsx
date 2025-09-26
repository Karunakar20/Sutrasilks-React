// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import Products from "./Components/Pages/Products/Products";
import NewArrival from "./Components/Pages/NewArrival/NewArrival";
import BestSeller from "./Components/Pages/BestSeller/BestSeller";
import Account from "./Components/Pages/Account/Account";
import Wishlist from "./Components/Pages/Wishlist/Wishlist";
import Cart from "./Components/Pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="new" element={<NewArrival />} />
            <Route path="bestseller" element={<BestSeller />} />
            <Route path="account" element={<Account />} />
            <Route path="wislist" element={<Wishlist />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
