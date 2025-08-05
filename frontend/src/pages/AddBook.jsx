import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddNewBook() {
  const [formData, setFormData] = useState({
    bookTitle: "",
    author: "",
    subject: "",
    isbn: "",
    price: "",
    description: "",
    copyOption: "later",
    copyCount: 1,
    defaultRack: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes for controlled inputs
  function handleChange(e) {
    const { name, value, type } = e.target;
    let val = value;
    if (type === "number") {
      val = value === "" ? "" : Number(value);
      if (name === "price" && val < 0) val = 0;
    }
    setFormData((prev) => ({ ...prev, [name]: val }));
  }

  // Real-time ISBN formatting on input
  function handleIsbnChange(e) {
    let value = e.target.value.replace(/[^\d]/g, "");
    if (value.length >= 3) {
      value = "978-" + value.substring(3);
    }
    setFormData((prev) => ({ ...prev, isbn: value }));
  }

  // Handle radio copy option change
  function handleCopyOptionChange(e) {
    setFormData((prev) => ({ ...prev, copyOption: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    // Basic validation
    if (
      !formData.bookTitle.trim() ||
      !formData.author.trim() ||
      !formData.subject ||
      !formData.isbn.trim() ||
      !formData.price
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    // ISBN validation (basic format check)
    const isbnPattern = /^978-\d{10}$/;
    if (!isbnPattern.test(formData.isbn)) {
      setErrorMessage("Please enter a valid ISBN in format: 978-XXXXXXXXX");
      return;
    }

    // Price validation
    if (formData.price <= 0) {
      setErrorMessage("Price must be greater than 0.");
      return;
    }

    // Copy validation if adding now
    if (formData.copyOption === "now") {
      if (!formData.copyCount || !formData.defaultRack) {
        setErrorMessage("Please specify copy count and rack location.");
        return;
      }
    }

    console.log("Book data to be submitted:", formData);
    setSuccessMessage(
      `Book "${formData.bookTitle}" has been successfully added to the library!`
    );

    setTimeout(() => {
      if (
        window.confirm(
          "Book added successfully! Would you like to add another book?"
        )
      ) {
        setFormData({
          bookTitle: "",
          author: "",
          subject: "",
          isbn: "",
          price: "",
          description: "",
          copyOption: "later",
          copyCount: 1,
          defaultRack: "",
        });
        setSuccessMessage("");
      } else {
        window.location.href = "books-catalog.html";
      }
    }, 1500);
  }

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

      .form-group input::placeholder,
      .form-group textarea::placeholder {
        color: #aaa;
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

      .form-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid #e9ecef;
      }

      .copy-section {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid #e9ecef;
        margin-top: 1rem;
      }

      .copy-section h3 {
        color: #333;
        margin-bottom: 1rem;
      }

      .copy-options {
        display: flex;
        gap: 2rem;
        margin-bottom: 1rem;
      }

      .radio-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .radio-group input[type="radio"] {
        width: auto;
        margin: 0;
      }

      .dynamic-copies {
        display: none;
      }

      .dynamic-copies.show {
        display: block;
      }

      .copy-inputs {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
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

        .copy-options {
          flex-direction: column;
          gap: 1rem;
        }
      }
    `}</style>
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">Library Management System</div>
            {/* <a href="books-catalog.html" className="back-link">
              ← Back to Catalog
            </a> */}
            <Link to="/books-catalog" className="back-link">← Back to Catalog</Link>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h1>Add New Book</h1>
              <p>Register a new book title in the library system</p>
            </div>

            {errorMessage && (
              <div className="error-message" style={{ display: "block" }}>
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="success-message" style={{ display: "block" }}>
                {successMessage}
              </div>
            )}

            <form id="addBookForm" onSubmit={handleSubmit}>
              <div className="form-section">
                <h2>Book Information</h2>

                <div className="form-group">
                  <label htmlFor="bookTitle">
                    Book Title <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="bookTitle"
                    name="bookTitle"
                    placeholder="Enter the complete book title"
                    required
                    value={formData.bookTitle}
                    onChange={handleChange}
                  />
                  <div className="help-text">
                    Enter the full title as it appears on the book cover
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="author">
                      Author <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="author"
                      name="author"
                      placeholder="Author name(s)"
                      required
                      value={formData.author}
                      onChange={handleChange}
                    />
                    <div className="help-text">
                      For multiple authors, separate with commas
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      Subject <span className="required">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
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
                    <label htmlFor="isbn">
                      ISBN <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="isbn"
                      name="isbn"
                      placeholder="978-XXXXXXXXX"
                      required
                      value={formData.isbn}
                      onChange={handleIsbnChange}
                    />
                    <div className="help-text">
                      13-digit ISBN number (including hyphens)
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="price">
                      Price (₹) <span className="required">*</span>
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      required
                      value={formData.price}
                      onChange={handleChange}
                    />
                    <div className="help-text">Book purchase price in rupees</div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description (Optional)</label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Brief description or summary of the book..."
                    value={formData.description}
                    onChange={handleChange}
                  />
                  <div className="help-text">
                    Optional book summary or description for library records
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h2>Initial Copies</h2>

                <div className="copy-section">
                  <h3>How many copies would you like to add initially?</h3>

                  <div className="copy-options">
                    <div className="radio-group">
                      <input
                        type="radio"
                        id="addLater"
                        name="copyOption"
                        value="later"
                        checked={formData.copyOption === "later"}
                        onChange={handleCopyOptionChange}
                      />
                      <label htmlFor="addLater">Add copies later</label>
                    </div>

                    <div className="radio-group">
                      <input
                        type="radio"
                        id="addNow"
                        name="copyOption"
                        value="now"
                        checked={formData.copyOption === "now"}
                        onChange={handleCopyOptionChange}
                      />
                      <label htmlFor="addNow">Add copies now</label>
                    </div>
                  </div>

                  <div
                    className={`dynamic-copies ${formData.copyOption === "now" ? "show" : ""
                      }`}
                    id="copyInputs"
                  >
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="copyCount">Number of Copies</label>
                        <input
                          type="number"
                          id="copyCount"
                          name="copyCount"
                          min="1"
                          max="20"
                          value={formData.copyCount}
                          onChange={handleChange}
                        />
                        <div className="help-text">
                          How many physical copies to add (1-20)
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="defaultRack">Default Rack Location</label>
                        <select
                          id="defaultRack"
                          name="defaultRack"
                          value={formData.defaultRack}
                          onChange={handleChange}
                        >
                          <option value="">Select Rack</option>
                          <option value="1">Rack 1</option>
                          <option value="2">Rack 2</option>
                          <option value="3">Rack 3</option>
                          <option value="4">Rack 4</option>
                          <option value="5">Rack 5</option>
                          <option value="6">Rack 6</option>
                          <option value="7">Rack 7</option>
                          <option value="8">Rack 8</option>
                        </select>
                        <div className="help-text">Rack where copies will be placed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn">
                  Add Book to Library
                </button>
                {/* <a href="books-catalog.html" className="btn btn-secondary">
                  Cancel
                </a> */}
                <Link to="/books-catalog" className="btn btn-secondary">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
