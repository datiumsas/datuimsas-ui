
import Home from "pages/Home";
import GlobalStyles from "styles/GlobalStyles";
import "tailwindcss/lib/css/preflight.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "pages/ContactUs";

function App() {   
      return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/contact-us" element={ <ContactUs/>}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
