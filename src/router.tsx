import { Route, Routes } from "react-router-dom";

import { AppLayout } from "./page/_layouts/app";
import { AuthLayout } from "./page/_layouts/auth";
import { Dashboard } from "./page/app/dashboard";
import { Signin } from "./page/auth/signin";

export function Router() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
      </Route>
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
