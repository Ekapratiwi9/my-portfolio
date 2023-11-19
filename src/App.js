import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import ProjectDetail from "./Pages/ProjectDetail";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/project/:slug"} element={<ProjectDetail />} />
          {/* <Route path={"*"} element={<NotFound />} /> */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
