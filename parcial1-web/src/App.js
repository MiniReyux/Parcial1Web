import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Stores from "./components/Stores";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

