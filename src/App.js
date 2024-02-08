import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Doctors from "./pages/doctors";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route index path="/home" element={<Home />} />
          <Route path="/about" />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
