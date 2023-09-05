import { Route, Routes } from "react-router-dom";
import { VendorCreate } from "../vendors/vendor-create";
import { Dashboard } from "../App";
import { CodePlayground } from "../code-playground/code-playground";

export const routes = {
  dashboard: `/`,
  vendors: {
    create: `/vendors/create`,
    detail: `/vendors/:id`,
    listing: `/vendors`,
  },
  codePlayground: `/code-playground`,
};

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Dashboard />} path={routes.dashboard} />
      <Route element={<VendorCreate />} path={routes.vendors.create} />
      <Route element={<CodePlayground />} path={routes.codePlayground} />
    </Routes>
  );
};
