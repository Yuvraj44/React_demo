import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeRoutes from "./EmployeeRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<EmployeeRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
