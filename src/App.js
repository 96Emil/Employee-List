import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PageOne from "./Components/PageOne";
import PageTwo from "./Components/PageTwo";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/PageOne" element={<PageOne />} />
          <Route path="/PageTwo" element={<PageTwo />} />
        </Routes>
        <Link className="page-link" to="PageOne">
          1
        </Link>
        <Link className="page-link" to="PageTwo">
          2
        </Link>
      </div>
    </Router>
  );
}

