import Home from "./pages/Home";
import Studentportal from "./pages/studentportal";
import Admin from "./pages/Admin";
import StudentportalEmail from "./pages/studentportalEmail"
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/studentportal" element={<Studentportal />} />
        <Route path="/studentportalEmail" element={<StudentportalEmail />} />

      </Routes>
    </div>
  );
}

export default App;
