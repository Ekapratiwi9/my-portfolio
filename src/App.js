import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProjectDetail from "./Pages/ProjectDetail";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/project/:slug"} element={<ProjectDetail />} />
          {/* <Route path={"*"} element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
