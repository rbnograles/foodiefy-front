import { Route, Routes } from "react-router-dom";

import { NotFound, TestPage } from "~/pages";

const AppRoutes = () => (
  <Routes>
    {/* auth */}
    <Route path="/" element={<TestPage />} />

    {/* 404 */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
