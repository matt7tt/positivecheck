import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientDashboard from "@/polymet/pages/client-dashboard";

export default function ClientDashboardPrototype() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<ClientDashboard />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
