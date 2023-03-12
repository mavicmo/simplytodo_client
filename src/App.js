import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
