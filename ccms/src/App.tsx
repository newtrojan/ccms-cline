// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { NewClaimForm } from "./components/claims/NewClaimForm";
import { ClaimInfoTab } from "./components/claims/tabs/ClaimInfoTab";
import { PartsTab } from "./components/claims/tabs/parts/PartsTab";
import { AnnexesTab } from "./components/claims/tabs/AnnexesTab";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/claims/new" element={<NewClaimForm />}>
            <Route index element={<Navigate to="claim-info" replace />} />
            <Route path="claim-info" element={<ClaimInfoTab />} />
            <Route path="parts" element={<PartsTab />} />
            <Route path="annexes" element={<AnnexesTab />} />
          </Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
