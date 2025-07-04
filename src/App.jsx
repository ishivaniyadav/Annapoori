import React from "react";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./pages/home/landing-page/Navbar";
import HomeLayout from "./pages/home/HomeLayout";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Stripe from "./pages/StripePage";
import SuccessPage from "./pages/SuccessPage";
import FailurePage from "./pages/FailurePage";
import Foundation from "./pages/Foundation";
import Volunteers from "./pages/Volunteers";
import Events from "./pages/Events";

const App = () => {
  return (
    <div className="text-[#FAFAFA]">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/stripe" element={<Stripe />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/failure" element={<FailurePage />} />
        </Routes>
      </Router>
      <Toaster />
    </div>
  );
};

export default App;
