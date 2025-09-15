import { Routes, Route, Link } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <div>
        {/* Simple Navbar */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/register">Register</Link> |{" "}
          <Link to="/login">Login</Link> | <Link to="/profile">Profile</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Welcome to MERN Auth</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
