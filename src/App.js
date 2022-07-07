import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/Header/index.jsx";
import Safes from "./pages/Safes/index.jsx";
import VaultAppRoles from "./pages/VaultAppRoles/index.jsx";
import ServiceAccounts from "./pages/ServiceAccounts/index.jsx";
import IAMServiceAccounts from "./pages/IAMServiceAccounts/index.jsx";
import AzureActiveDirectory from "./pages/AzureActiveDirectory/index.jsx";

function App() {
  return (
    <Router>
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<Safes />} />
        <Route path="/VaultAppRoles" element={<VaultAppRoles />} />
        <Route path="/ServiceAccounts" element={<ServiceAccounts />} />
        <Route path="/IAMServiceAccounts" element={<IAMServiceAccounts />} />
        <Route
          path="/AzureActiveDirectory"
          element={<AzureActiveDirectory />}
        />
        <Route path="*" element={<Safes />} />
      </Routes>
    </Router>
  );
}

export default App;
