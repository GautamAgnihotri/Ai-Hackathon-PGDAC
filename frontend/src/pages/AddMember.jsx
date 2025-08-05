import React, { useState } from 'react';

const AddMember = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { fullName, email, phone } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (fullName.trim().length < 3) {
      alert('Full name must be at least 3 characters long.');
      return false;
    }
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
    if (!phoneRegex.test(phone)) {
      alert('Phone number must be exactly 10 digits.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch("http://localhost:3000/api/addMembers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
        })
      });

      if (res.ok) {
        const data = await res.json();
        alert("✅ Member added successfully!");
        console.log("Member added:", data);

        // reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
        });
      } else {
        const err = await res.json();
        alert("❌ " + (err.message || "Failed to add member"));
      }
    } catch (error) {
      console.error("Error adding member:", error);
      alert("❌ Server error. Please try again.");
    }  
  };

  return (
    <div className="page-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .page-container {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f8f9fa;
          color: #333;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
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
      `}</style>

      <div className="back-home">
        <a href="/librarian-dashboard">&larr; Dashboard</a>
      </div>

      <div className="register-container">
        <div className="logo">
          <h1>Add New Member</h1>
          <p>Create new member account</p>
        </div>

        <form id="registerForm" onSubmit={handleSubmit}>
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

          <div className="terms">
            The default password will be same as email id. Member can change it
            from his profile settings.
          </div>

          <button type="submit" className="btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMember;
