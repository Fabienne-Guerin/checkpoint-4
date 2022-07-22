import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import AdminProducts from "./pages/AdminProducts";
import AdminProduct from "./pages/AdminProduct";
import AdminForm from "./pages/AdminForm"
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AdminProducts" element={<AdminProducts />} />
          <Route path="/AdminProducts/:id" element={<AdminProduct />} />
          <Route path="/createproduct" element={<AdminForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
