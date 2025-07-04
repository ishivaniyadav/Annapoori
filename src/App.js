import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/StripePage";
import SuccessPage from "./pages/SuccessPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
