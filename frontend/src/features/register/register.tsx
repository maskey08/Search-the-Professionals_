import type { AxiosError, AxiosResponse } from "axios";
import { register } from "../../shared/config/api";
import { useState, type ChangeEvent, type FormEvent } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    register(formData)
      .then((res: AxiosResponse) => {
        console.log("Registration successful:", res);
        alert("Registration successful!");
      })
      .catch((error: AxiosError) => {
        console.error("Registration error:", error);
        alert("Registration failed!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="page">
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="register-title">Register</h2>
          <input
            className="register-input"
            placeholder="E-mail"
            name="email"
            onChange={handleChange}
            value={formData.email}
            type="email"
          />
          <input
            className="register-input"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            value={formData.username}
            type="text"
          />
          <input
            className="register-input"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            type="password"
          />
          <input
            className="register-input"
            placeholder="Role (e.g. Developer, Designer)"
            name="role"
            onChange={handleChange}
            value={formData.role}
            type="text"
          />
          <button className="register-button" type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
          <p className="switcher">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{ color: "blue", cursor: "pointer" }}
            >
              Login here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
