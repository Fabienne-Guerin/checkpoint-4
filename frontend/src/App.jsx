import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
