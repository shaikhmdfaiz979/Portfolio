import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Footer from "./components/Footer";
import {ScrollToTop} from "./components/ScrollToTop";
function App() {
  return (
    <Router>
      <div className="min-h-screen transition-colors duration-500">
        <Navbar />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
