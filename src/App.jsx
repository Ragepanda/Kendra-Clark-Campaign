import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Issues from "./pages/Issues";
import About from "./pages/About";
import WelcomeModal from "./components/WelcomeModal";
// import About from "./pages/About";
// import Endorsements from "./pages/Endorsements";
// import Contact from "./pages/Contact";

function DonateRedirect() {
  window.location.replace("https://secure.actblue.com/donate/votekendraclark");
  return null;
}

function EventRedirect() {
  window.location.replace("https://secure.actblue.com/donate/votekendraclark");
  return null;
}

function App() {
  return (
    <Router>
      <Navbar />
      <WelcomeModal />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="issues" element={<Issues />} />
        <Route path="about" element={<About />} />
        <Route path="donate" element={<DonateRedirect />} />
        <Route path="events" element={<EventRedirect />} />
        <Route path="event" element={<EventRedirect />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
