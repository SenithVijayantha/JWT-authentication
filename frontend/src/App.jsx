import { Routes, Route, Link } from "react-router";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        {/* Simple Navbar */}
        {/* <nav>
          <Link to="/">Home</Link> | <Link to="/register">Register</Link> |{" "}
          <Link to="/login">Login</Link> | <Link to="/profile">Profile</Link>
        </nav> */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
