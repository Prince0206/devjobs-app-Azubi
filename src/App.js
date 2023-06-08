import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import  JobDetails from "./pages/JobsDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobdetails/:id" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
