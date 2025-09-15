// src/pages/Register.jsx
import { useState } from "react";
import api from "../api.js";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/register", form);
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <div className="w-full flex justify-center min-h-screen items-center">
      <form
        className="card  bg-base-300 border-primary border-2 w-full max-w-sm shrink-0 shadow-2xl"
        // role="form"
        onSubmit={handleSubmit}
      >
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              className="input"
              placeholder="Name"
              onChange={handleChange}
            />
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
              Register
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
}
