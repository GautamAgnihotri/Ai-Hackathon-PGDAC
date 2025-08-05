import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditBook = () => {
  const [formData, setFormData] = useState({
    bookTitle: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    subject: "programming",
    isbn: "978-0132350884",
    price: 2499.0,
    description:
      "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. This book presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship.",
  });

  const [messages, setMessages] = useState({
    error: "",
    success: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePriceChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      price: parseFloat(e.target.value),
    }));
  };

  const handleISBNInput = (e) => {
    let value = e.target.value.replace(/[^\d]/g, "");
    if (value.length >= 3) {
      value = "978-" + value.substring(3);
    }
    setFormData((prev) => ({
      ...prev,
      isbn: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages({ error: "", success: "" });

    const { bookTitle, author, subject, isbn, price } = formData;

    if (!bookTitle || !author || !subject || !isbn || !price) {
      setMessages({ error: "Please fill in all required fields." });
      return;
    }

    const isbnPattern = /^978-\d{10}$/;
    if (!isbnPattern.test(isbn)) {
      setMessages({
        error: "Please enter a valid ISBN in format: 978-XXXXXXXXXX",
      });
      return;
    }

    if (price <= 0) {
      setMessages({ error: "Price must be greater than 0." });
      return;
    }

    console.log("Book update data:", formData);
    setMessages({
      success: `Book "${formData.bookTitle}" has been successfully updated!`,
    });

    setTimeout(() => {
      setMessages({ error: "", success: "" });
    }, 3000);
  };

  const confirmDelete = () => {
    const confirm1 = window.confirm(
      "Are you sure you want to delete this book?\n\nWarning: This will also delete all copies and issue history. This action cannot be undone."
    );
    if (!confirm1) return;

    const confirm2 = window.confirm(
      "This book has 2 copies currently issued. Deleting will affect active borrowers. Continue?"
    );
    if (!confirm2) return;

    console.log("Delete book confirmed");
    alert("Book deletion functionality requires backend integration.");
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
        line-height: 1.6;
      }

      .container {
        max-width: 900px;
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
        font-size: 1.5rem;
        font-weight: bold;
        color: #333;
      }

      .back-link {
        color: #333;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border: 1px solid #e9ecef;
        border-radius: 5px;
        transition: all 0.3s ease;
      }

      .back-link:hover {
        border-color: #333;
      }

      .main-content {
        padding: 2rem 0;
      }

      .form-container {
        background: #fff;
        padding: 3rem;
        border-radius: 10px;
        border: 1px solid #e9ecef;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }

      .form-header {
        text-align: center;
        margin-bottom: 2rem;
      }

      .form-header h1 {
        font-size: 2rem;
        color: #333;
        margin-bottom: 0.5rem;
      }

      .form-header p {
        color: #666;
        font-size: 1.1rem;
      }

      .book-id-info {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid #e9ecef;
        margin-bottom: 2rem;
        text-align: center;
      }

      .book-id-info strong {
        color: #333;
        font-size: 1.1rem;
      }

      .form-section {
        margin-bottom: 2rem;
      }

      .form-section h2 {
        font-size: 1.3rem;
        color: #333;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #e9ecef;
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-bottom: 1.5rem;
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

      .required {
        color: #dc3545;
      }

      .form-group input,
      .form-group select,
      .form-group textarea {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #e9ecef;
        border-radius: 5px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
        font-family: inherit;
      }

      .form-group input:focus,
      .form-group select:focus,
      .form-group textarea:focus {
        outline: none;
        border-color: #333;
      }

      .form-group textarea {
        resize: vertical;
        min-height: 100px;
      }

      .help-text {
        font-size: 0.9rem;
        color: #666;
        margin-top: 0.3rem;
      }

      .btn {
        padding: 0.75rem 1.5rem;
        border: 2px solid #333;
        background: #333;
        color: #fff;
        text-decoration: none;
        font-weight: 500;
        border-radius: 5px;
        transition: all 0.3s ease;
        cursor: pointer;
        font-size: 1rem;
        display: inline-block;
      }

      .btn:hover {
        background: #555;
        border-color: #555;
      }

      .btn-secondary {
        background: transparent;
        color: #333;
      }

      .btn-secondary:hover {
        background: #333;
        color: #fff;
      }

      .btn-danger {
        background: #dc3545;
        border-color: #dc3545;
        color: #fff;
      }

      .btn-danger:hover {
        background: #c82333;
        border-color: #bd2130;
      }

      .form-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid #e9ecef;
      }

      .current-copies {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid #e9ecef;
        margin-top: 1rem;
      }

      .current-copies h3 {
        color: #333;
        margin-bottom: 1rem;
      }

      .copies-summary {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        text-align: center;
      }

      .copy-stat {
        display: flex;
        flex-direction: column;
      }

      .copy-number {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.2rem;
      }

      .copy-label {
        font-size: 0.8rem;
        color: #666;
        text-transform: uppercase;
      }

      .available {
        color: #28a745;
      }

      .issued {
        color: #dc3545;
      }

      .total {
        color: #333;
      }

      .error-message {
        background: #f8d7da;
        border: 1px solid #f5c6cb;
        color: #721c24;
        padding: 0.75rem;
        border-radius: 5px;
        margin-bottom: 1rem;
        display: none;
      }

      .success-message {
        background: #d4edda;
        border: 1px solid #c3e6cb;
        color: #155724;
        padding: 0.75rem;
        border-radius: 5px;
        margin-bottom: 1rem;
        display: none;
      }

      @media (max-width: 768px) {
        .form-row {
          grid-template-columns: 1fr;
        }

        .form-actions {
          flex-direction: column;
        }
      }
    `}</style>
      <div className="edit-book">
        <header className="header">
          <div className="container">
            <div className="header-content">
              <div className="logo">Library Management System</div>
              {/* <a href="books-catalog.html" className="back-link">
                ← Back to Catalog
              </a> */}
              <Link to="/books-catalog" className="back-link">
                ← Back to Catalog
              </Link>
            </div>
          </div>
        </header>

        <main className="main-content">
          <div className="container">
            <div className="form-container">
              <div className="form-header">
                <h1>Edit Book</h1>
                <p>Modify existing book information</p>
              </div>

              <div className="book-id-info">
                <strong>Book ID: #001</strong> | Currently has 5 copies (3
                available, 2 issued)
              </div>

              {messages.error && (
                <div className="error-message">{messages.error}</div>
              )}
              {messages.success && (
                <div className="success-message">{messages.success}</div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-section">
                  <h2>Book Information</h2>

                  <div className="form-group">
                    <label>
                      Book Title <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="bookTitle"
                      value={formData.bookTitle}
                      onChange={handleChange}
                      required
                    />
                    <div className="help-text">Enter the complete book title</div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>
                        Author <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                      />
                      <div className="help-text">
                        For multiple authors, separate with commas
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        Subject <span className="required">*</span>
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Subject</option>
                        <option value="programming">Programming</option>
                        <option value="science">Science</option>
                        <option value="mathematics">Mathematics</option>
                        <option value="literature">Literature</option>
                        <option value="history">History</option>
                        <option value="philosophy">Philosophy</option>
                        <option value="business">Business</option>
                        <option value="arts">Arts</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>
                        ISBN <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="isbn"
                        value={formData.isbn}
                        onChange={handleISBNInput}
                        required
                      />
                      <div className="help-text">
                        13-digit ISBN number (including hyphens)
                      </div>
                    </div>
                    <div className="form-group">
                      <label>
                        Price (₹) <span className="required">*</span>
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handlePriceChange}
                        step="0.01"
                        min="0"
                        required
                      />
                      <div className="help-text">
                        Book purchase price in rupees
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Description (Optional)</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                    <div className="help-text">
                      Optional book summary or description
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h2>Copy Information</h2>
                  <div className="current-copies">
                    <h3>Current Copy Status</h3>
                    <div className="copies-summary">
                      <div className="copy-stat">
                        <div className="copy-number total">5</div>
                        <div className="copy-label">Total Copies</div>
                      </div>
                      <div className="copy-stat">
                        <div className="copy-number available">3</div>
                        <div className="copy-label">Available</div>
                      </div>
                      <div className="copy-stat">
                        <div className="copy-number issued">2</div>
                        <div className="copy-label">Currently Issued</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn">
                    Update Book Information
                  </button>
                  {/* <a href="book-copies-management.html" className="btn btn-secondary">
                    Manage Copies
                  </a> */}
                  <Link to="/book-copies-management" className="btn btn-secondary">
                    Manage Copies
                  </Link>
                  {/* <a href="books-catalog.html" className="btn btn-secondary">
                    Cancel
                  </a> */}
                  <Link to="/books-catalog" className="btn btn-secondary">
                    Cancel
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={confirmDelete}
                  >
                    Delete Book
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default EditBook;
