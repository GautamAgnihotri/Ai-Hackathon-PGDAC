import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    console.log("Registration attempt:", formData);
    alert("Registration functionality will be implemented with backend integration");
  };

  return (
    <>
      <style>
        {`
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
            padding: 2rem 0;
          }

          .register-container {
            background: #fff;
            padding: 3rem 2.5rem;
            border-radius: 10px;
            border: 1px solid #e9ecef;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 500px;
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

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
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
            font-weight: 500;
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

          .terms {
            font-size: 0.85rem;
            color: #666;
            margin-bottom: 1.5rem;
            line-height: 1.4;
          }

          .terms a {
            color: #333;
          }

          @media (max-width: 768px) {
            .form-row {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 480px) {
            .register-container {
              margin: 1rem;
              padding: 2rem 1.5rem;
            }

            .back-home {
              position: static;
              text-align: center;
              margin-bottom: 2rem;
            }
          }
        `}
      </style>

      <div className="back-home">
        {/* <a href="/">← Back to Home</a> */}
        <Link to="/">Back to Home</Link>
      </div>

      <div className="register-container">
        <div className="logo">
          <h1>Join Our Library</h1>
          <p>Create your member account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="terms">
            By creating an account, you agree to our terms of service and privacy
            policy. Monthly membership fees apply as per library policy.
          </div>

          <button type="submit" className="btn">Create Account</button>
        </form>

        <div className="form-footer">
          <div className="divider">Already have an account?</div>
          {/* <a href="/login">Sign In</a> */}
          <Link to="/login">Sign In</Link>
        </div>
      </div>
    </>
  );
}
