import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landingpage } from "./routes/Landingpage/Landingpage";
import { Home } from "./routes/Home/Home";
import { About } from "./routes/About/About";
import { Projects } from "./routes/Projects/Projects";
import { Contact } from "./routes/Contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Jaya-React-Portfolio/" element={<Landingpage />}>
            <Route index element={<Home />} />
            <Route path="/Jaya-React-Portfolio/about" element={<About />} />
            <Route
              path="/Jaya-React-Portfolio/projects"
              element={<Projects />}
            />
            <Route path="/Jaya-React-Portfolio/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
