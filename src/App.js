import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page
import ArgonautsListPage from "./pages/ArgonautsListPage";
import AddArgonaut from "./components/AddArgonaut";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ArgonautsListPage />} />
          <Route path="/add-argonaut" element={<AddArgonaut />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
