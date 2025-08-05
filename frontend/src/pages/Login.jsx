import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginLibrarian } from "../services/authService";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      const result = await loginLibrarian(email, password);

      console.log(result);

      if (result.status == "success") {
        toast.success("Welcome!")
        sessionStorage.setItem("token", result.data.token)
        sessionStorage.setItem("name", result.data.name)
        navigate("/dashboard")
      }
      else {
        toast.error("Incorrect credentials!")
      }
    }
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f8f9fa;
          color: #333;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .login-container {
          background: #fff;
          padding: 3rem 2.5rem;
          border-radius: 10px;
          border: 1px solid #e9ecef;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }

        .logo {
          text-align: center;
          margin-bottom: 2rem;
        }

        .logo h1 {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .logo p {
          color: #666;
          font-size: 0.9rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #333;
        }

        .form-group input {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e9ecef;
          border-radius: 5px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: #333;
        }

        .form-group input::placeholder {
          color: #aaa;
        }

        .btn {
          width: 100%;
          padding: 0.75rem;
          background: #333;
          color: #fff;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .btn:hover {
          background: #555;
        }

        .form-footer {
          margin-top: 2rem;
          text-align: center;
        }

        .form-footer a {
          color: #333;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .form-footer a:hover {
          text-decoration: underline;
        }

        .divider {
          margin: 1.5rem 0;
          text-align: center;
          color: #666;
          font-size: 0.9rem;
        }

        .back-home {
          position: absolute;
          top: 2rem;
          left: 2rem;
        }

        .back-home a {
          color: #333;
          text-decoration: none;
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
          border: 1px solid #e9ecef;
          border-radius: 5px;
          background: #fff;
          transition: all 0.3s ease;
        }

        .back-home a:hover {
          border-color: #333;
        }

        @media (max-width: 480px) {
          .login-container {
            margin: 1rem;
            padding: 2rem 1.5rem;
          }

          .back-home {
            position: static;
            text-align: center;
            margin-bottom: 2rem;
          }
        }
      `}</style>

      <div className="back-home">
        {/* <a href="/">← Back to Home</a> */}
        <Link to="/">Back to Home</Link>
      </div>

      <div className="login-container">
        <div className="logo">
          <h1>Sign In</h1>
          <p>Access your library account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn">
            Sign In
          </button>
        </form>

        <div className="form-footer">
          <a href="/forgot-password">Forgot your password?</a>
          <div className="divider">Don't have an account?</div>
          {/* <a href="/register" style={{ fontWeight: 500 }}>
            Create Account
          </a> */}
          <Link to="/register">Create Account</Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
