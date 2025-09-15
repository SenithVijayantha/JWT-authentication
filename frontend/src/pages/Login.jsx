// src/pages/Login.jsx
import { useState } from "react";
import { Link } from "react-router";
import api from "../api.js";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <form
      className="card bg-base-100 border-primary border-2 w-full max-w-sm shrink-0 shadow-2xl"
      // role="form"
      onSubmit={handleSubmit}
    >
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            onChange={handleChange}
          />
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            onChange={handleChange}
          />
          <p className="text-success font-medium">{message}</p>
          <button type="submit" className="btn btn-primary mt-4">
            Login
          </button>
          <Link
            to={"/register"}
            className="btn btn-soft btn-primary btn-outline mt-4"
          >
            Register
          </Link>
        </fieldset>
      </div>
    </form>
  );
}
