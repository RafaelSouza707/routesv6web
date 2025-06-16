import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main";
import Teste from "./components/Teste";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}></Route>
          <Route path="instituicaodeensino"></Route>
          <Route path="teste" element={<Teste/>}></Route>
        </Route>
      </Routes>
    </Router>
)
}

export default App
