import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import About from "./pages/About";
import Features from "./pages/Features";
import Tokenomics from "./pages/Tokenomics";
import HowItWorks from "./pages/HowItWorks";
import Roadmap from "./pages/Roadmap";
import FAQ from "./pages/FAQ";
import Join from "./pages/Join";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
