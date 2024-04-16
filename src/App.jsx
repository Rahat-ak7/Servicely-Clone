import "./App.css";
import Nav from "./components/Nav";
// import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Home from "./components/Home";
import { Services } from "./components/Services";
import Review from "./components/Review";
import Form from "./components/form";
import Loginform from "./components/LoginForm/Loginform";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<Home />}></Route>

          <Route path="/form" element={<Form />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/review" element={<Review />} />
          <Route path="/login" element={<Loginform />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
