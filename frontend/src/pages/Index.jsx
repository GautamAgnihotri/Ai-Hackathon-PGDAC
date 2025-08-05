import { Link } from "react-router-dom";

const Index = () => {
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
            line-height: 1.6;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          header {
            background: #fff;
            border-bottom: 2px solid #e9ecef;
            padding: 1rem 0;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: #333;
          }

          .nav-buttons {
            display: flex;
            gap: 1rem;
          }

          .btn {
            padding: 0.7rem 1.5rem;
            border: 2px solid #333;
            background: transparent;
            color: #333;
            text-decoration: none;
            font-weight: 500;
            border-radius: 5px;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .btn:hover {
            background: #333;
            color: #fff;
          }

          .btn-primary {
            background: #333;
            color: #fff;
          }

          .btn-primary:hover {
            background: #555;
          }

          .hero {
            text-align: center;
            padding: 4rem 0;
            background: #fff;
          }

          .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: #333;
          }

          .hero p {
            font-size: 1.2rem;
            color: #666;
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          .features {
            padding: 4rem 0;
            background: #f8f9fa;
          }

          .features-heading {
            text-align: center;
            margin-bottom: 2rem;
            font-size: 2rem;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .feature-card {
            background: #fff;
            padding: 2rem;
            border-radius: 8px;
            border: 1px solid #e9ecef;
            text-align: center;
          }

          .feature-card h3 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: #333;
          }

          .feature-card p {
            color: #666;
          }

          .cta {
            text-align: center;
            padding: 4rem 0;
            background: #333;
            color: #fff;
          }

          .cta h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
          }

          .cta p {
            font-size: 1.1rem;
            margin-bottom: 2rem;
          }

          .cta .btn {
            border-color: #fff;
            color: #fff;
          }

          .cta .btn:hover {
            background: #fff;
            color: #333;
          }

          footer {
            background: #fff;
            border-top: 1px solid #e9ecef;
            padding: 2rem 0;
            text-align: center;
            color: #666;
          }

          @media (max-width: 768px) {
            .hero h1 {
              font-size: 2rem;
            }

            .nav-buttons {
              flex-direction: column;
              gap: 0.5rem;
            }

            .header-content {
              flex-direction: column;
              gap: 1rem;
            }
          }
        `}
      </style>
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">Library Management System</div>
            <div className="nav-buttons">
              {/* <a href="/login" className="btn">
                Sign In
              </a> */}
              <Link to="/login" className="btn">Sign In</Link>
              <Link to="/register" className="btn">Join Library</Link>
              {/* <a href="/register" className="btn btn-primary">
                Join Library
              </a> */}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Welcome to Our Library</h1>
            <p>
              A comprehensive digital solution for managing library operations,
              book circulation, and member services with ease and efficiency.
            </p>
            <a href="/login" className="btn btn-primary">
              Get Started
            </a>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2 className="features-heading">System Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>For Members</h3>
                <p>
                  Search and discover books, check availability, manage borrowed
                  items, and track your reading history.
                </p>
              </div>
              <div className="feature-card">
                <h3>For Librarians</h3>
                <p>
                  Complete library operations including book management, member
                  services, payment collection, and circulation control.
                </p>
              </div>
              <div className="feature-card">
                <h3>For Owners</h3>
                <p>
                  Business oversight with financial reports, asset tracking, and
                  comprehensive analytics for informed decision making.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h2>Ready to Get Started?</h2>
            <p>
              Join our library community and experience seamless book management
            </p>
            {/* <a href="/register" className="btn">
              Create Account
            </a> */}
            <Link to="/register" className="btn">Create Account</Link>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 Library Management System. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
