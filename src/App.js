import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Login from "./pages/login";
import ProfilePage from "./pages/profile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
