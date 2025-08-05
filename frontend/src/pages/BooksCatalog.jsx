import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BooksCatalog() {
  // State for filters
  const [searchQuery, setSearchQuery] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const [rackFilter, setRackFilter] = useState("all");

  const applyFilters = () => {
    console.log("Applying filters:", {
      searchQuery,
      subjectFilter,
      availabilityFilter,
      rackFilter,
    });
    alert(
      "Filters applied! Results would be updated.\n(Backend integration required)"
    );
  };

  const viewBook = (bookId) => {
    console.log("View book:", bookId);
    alert(
      `Opening book details for ID: ${bookId}\n(Backend integration required)`
    );
  };

  const editBook = (bookId) => {
    console.log("Edit book:", bookId);
    alert(`Opening edit form for book ID: ${bookId}\n(Backend integration required)`);
  };

  const manageCopies = (bookId) => {
    console.log("Manage copies for book:", bookId);
    alert(
      `Opening copy management for book ID: ${bookId}\n(Backend integration required)`
    );
  };

  const addCopy = (bookId) => {
    console.log("Add copy for book:", bookId);
    alert(`Adding new copy for book ID: ${bookId}\n(Backend integration required)`);
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
        max-width: 1400px;
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

      .page-header {
        background: #fff;
        padding: 2rem;
        border-radius: 10px;
        border: 1px solid #e9ecef;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .page-title-section h1 {
        font-size: 2rem;
        color: #333;
        margin-bottom: 0.5rem;
      }

      .page-title-section p {
        color: #666;
        font-size: 1.1rem;
      }

      .header-actions {
        display: flex;
        gap: 1rem;
      }

      .btn {
        padding: 0.75rem 1.5rem;
        background: #333;
        color: #fff;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.3s ease;
        text-decoration: none;
        display: inline-block;
      }

      .btn:hover {
        background: #555;
      }

      .btn-secondary {
        background: transparent;
        color: #333;
        border: 2px solid #333;
      }

      .btn-secondary:hover {
        background: #333;
        color: #fff;
      }

      .inventory-summary {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .summary-card {
        background: #fff;
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid #e9ecef;
        text-align: center;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
      }

      .summary-number {
        font-size: 2rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 0.5rem;
      }

      .summary-label {
        color: #666;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .filters-section {
        background: #fff;
        padding: 1.5rem;
        border-radius: 10px;
        border: 1px solid #e9ecef;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
      }

      .filters-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        align-items: end;
      }

      .filter-group {
        display: flex;
        flex-direction: column;
      }

      .filter-group label {
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: #333;
      }

      .filter-group input,
      .filter-group select {
        padding: 0.6rem;
        border: 2px solid #e9ecef;
        border-radius: 5px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
      }

      .filter-group input:focus,
      .filter-group select:focus {
        outline: none;
        border-color: #333;
      }

      .books-section {
        background: #fff;
        border-radius: 10px;
        border: 1px solid #e9ecef;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }

      .section-header {
        padding: 1.5rem;
        border-bottom: 1px solid #e9ecef;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .section-header h2 {
        color: #333;
      }

      .results-info {
        color: #666;
        font-size: 0.9rem;
      }

      .books-grid {
        padding: 1.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 1.5rem;
      }

      .book-card {
        border: 2px solid #e9ecef;
        border-radius: 8px;
        padding: 1.5rem;
        transition: all 0.3s ease;
        background: #fff;
      }

      .book-card:hover {
        border-color: #333;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }

      .book-header {
        margin-bottom: 1rem;
      }

      .book-title {
        font-size: 1.2rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 0.3rem;
      }

      .book-author {
        color: #666;
        font-style: italic;
        margin-bottom: 0.5rem;
      }

      .book-subject {
        display: inline-block;
        padding: 0.2rem 0.6rem;
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 12px;
        font-size: 0.8rem;
        color: #333;
      }

      .book-details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin: 1rem 0;
      }

      .detail-item {
        display: flex;
        flex-direction: column;
      }

      .detail-label {
        font-size: 0.8rem;
        color: #666;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 0.2rem;
      }

      .detail-value {
        font-weight: 500;
        color: #333;
      }

      .copies-info {
        background: #f8f9fa;
        border-radius: 5px;
        padding: 1rem;
        margin: 1rem 0;
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

      .book-actions {
        display: flex;
        gap: 0.5rem;
        justify-content: flex-end;
      }

      .btn-small {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
        border-radius: 3px;
      }

      .pagination {
        padding: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #e9ecef;
      }

      .pagination-info {
        color: #666;
        font-size: 0.9rem;
      }

      .pagination-controls {
        display: flex;
        gap: 0.5rem;
      }

      .page-btn {
        padding: 0.4rem 0.8rem;
        border: 1px solid #e9ecef;
        background: #fff;
        color: #333;
        text-decoration: none;
        border-radius: 3px;
        font-size: 0.9rem;
        transition: all 0.3s ease;
      }

      .page-btn:hover {
        border-color: #333;
        background: #f8f9fa;
      }

      .page-btn.active {
        background: #333;
        color: #fff;
        border-color: #333;
      }

      @media (max-width: 768px) {
        .page-header {
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }

        .header-actions {
          flex-direction: column;
          width: 100%;
        }

        .books-grid {
          grid-template-columns: 1fr;
        }

        .filters-grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>

      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">Library Management System</div>
            {/* <a href="librarian-dashboard.html" className="back-link">
              ← Back to Dashboard
            </a> */}
            <Link to="/librarian-dashboard" className="back-link">← Back to Dashboard</Link>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="page-header">
            <div className="page-title-section">
              <h1>Books Catalog</h1>
              <p>Complete library inventory with copy management</p>
            </div>
            <div className="header-actions">
              {/* <a href="add-book.html" className="btn">
                + Add New Book
              </a> */}
              <Link to="/add-book" className="btn">+ Add New Book</Link>
              {/* <a href="add-book-copy.html" className="btn btn-secondary">
                + Add Copy
              </a> */}
              <Link to="/add-book-copy" className="btn btn-secondary">
                + Add Copy
              </Link>
            </div>
          </div>

          <div className="inventory-summary">
            <div className="summary-card">
              <div className="summary-number">247</div>
              <div className="summary-label">Total Books</div>
            </div>
            <div className="summary-card">
              <div className="summary-number">456</div>
              <div className="summary-label">Total Copies</div>
            </div>
            <div className="summary-card">
              <div className="summary-number">158</div>
              <div className="summary-label">Available</div>
            </div>
            <div className="summary-card">
              <div className="summary-number">89</div>
              <div className="summary-label">Currently Issued</div>
            </div>
            <div className="summary-card">
              <div className="summary-number">8</div>
              <div className="summary-label">Rack Locations</div>
            </div>
          </div>

          <div className="filters-section">
            <div className="filters-grid">
              <div className="filter-group">
                <label htmlFor="searchQuery">Search Books</label>
                <input
                  type="text"
                  id="searchQuery"
                  placeholder="Title, author, or ISBN..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="filter-group">
                <label htmlFor="subjectFilter">Subject</label>
                <select
                  id="subjectFilter"
                  value={subjectFilter}
                  onChange={(e) => setSubjectFilter(e.target.value)}
                >
                  <option value="all">All Subjects</option>
                  <option value="programming">Programming</option>
                  <option value="science">Science</option>
                  <option value="literature">Literature</option>
                  <option value="history">History</option>
                  <option value="mathematics">Mathematics</option>
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="availabilityFilter">Availability</label>
                <select
                  id="availabilityFilter"
                  value={availabilityFilter}
                  onChange={(e) => setAvailabilityFilter(e.target.value)}
                >
                  <option value="all">All Books</option>
                  <option value="available">Available</option>
                  <option value="out-of-stock">Out of Stock</option>
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="rackFilter">Rack Location</label>
                <select
                  id="rackFilter"
                  value={rackFilter}
                  onChange={(e) => setRackFilter(e.target.value)}
                >
                  <option value="all">All Racks</option>
                  <option value="1">Rack 1</option>
                  <option value="2">Rack 2</option>
                  <option value="3">Rack 3</option>
                </select>
              </div>

              <div className="filter-group">
                <button className="btn" onClick={applyFilters}>
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          <div className="books-section">
            <div className="section-header">
              <h2>Library Catalog</h2>
              <span className="results-info">Showing 247 books</span>
            </div>

            <div className="books-grid">
              {/* Book card #1 */}
              <div className="book-card">
                <div className="book-header">
                  <div className="book-title">
                    Clean Code: A Handbook of Agile Software Craftsmanship
                  </div>
                  <div className="book-author">by Robert C. Martin</div>
                  <div className="book-subject">Programming</div>
                </div>

                <div className="book-details">
                  <div className="detail-item">
                    <span className="detail-label">ISBN</span>
                    <span className="detail-value">978-0132350884</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Price</span>
                    <span className="detail-value">₹2,499</span>
                  </div>
                </div>

                <div className="copies-info">
                  <div className="copies-summary">
                    <div className="copy-stat">
                      <div className="copy-number total">5</div>
                      <div className="copy-label">Total</div>
                    </div>
                    <div className="copy-stat">
                      <div className="copy-number available">3</div>
                      <div className="copy-label">Available</div>
                    </div>
                    <div className="copy-stat">
                      <div className="copy-number issued">2</div>
                      <div className="copy-label">Issued</div>
                    </div>
                  </div>
                </div>

                <div className="book-actions">
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => viewBook("1")}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => editBook("1")}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => manageCopies("1")}
                  >
                    Copies
                  </button>
                </div>
              </div>

              {/* Book card #2 */}
              <div className="book-card">
                <div className="book-header">
                  <div className="book-title">The Pragmatic Programmer</div>
                  <div className="book-author">by Andrew Hunt & David Thomas</div>
                  <div className="book-subject">Programming</div>
                </div>

                <div className="book-details">
                  <div className="detail-item">
                    <span className="detail-label">ISBN</span>
                    <span className="detail-value">978-0201616224</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Price</span>
                    <span className="detail-value">₹1,899</span>
                  </div>
                </div>

                <div className="copies-info">
                  <div className="copies-summary">
                    <div className="copy-stat">
                      <div className="copy-number total">3</div>
                      <div className="copy-label">Total</div>
                    </div>
                    <div className="copy-stat">
                      <div className="copy-number available">1</div>
                      <div className="copy-label">Available</div>
                    </div>
                    <div className="copy-stat">
                      <div className="copy-number issued">2</div>
                      <div className="copy-label">Issued</div>
                    </div>
                  </div>
                </div>

                <div className="book-actions">
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => viewBook("2")}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => editBook("2")}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => manageCopies("2")}
                  >
                    Copies
                  </button>
                </div>
              </div>

              {/* Book card #3 */}
              <div className="book-card">
                <div className="book-header">
                  <div className="book-title">
                    Design Patterns: Elements of Reusable Object-Oriented Software
                  </div>
                  <div className="book-author">by Gang of Four</div>
                  <div className="book-subject">Programming</div>
                </div>

                <div className="book-details">
                  <div className="detail-item">
                    <span className="detail-label">ISBN</span>
                    <span className="detail-value">978-0201633612</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Price</span>
                    <span className="detail-value">₹3,299</span>
                  </div>
                </div>

                <div className="copies-info">
                  <div className="copies-summary">
                    <div className="copy-stat">
                      <div className="copy-number total">4</div>
                      <div className="copy-label">Total</div>
                    </div>
                    <div className="copy-stat">
                      <div className="copy-number available">0</div>
                      <div className="copy-label">Available</div>
                    </div>
                    <div className="copy-stat">
                      <div className="copy-number issued">4</div>
                      <div className="copy-label">Issued</div>
                    </div>
                  </div>
                </div>

                <div className="book-actions">
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => viewBook("3")}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => editBook("3")}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-primary btn-small"
                    onClick={() => addCopy("3")}
                  >
                    Add Copy
                  </button>
                </div>
              </div>

              {/* Book card #4 */}
              <div className="book-card">
                <div className="book-header">
                  <div className="book-title">JavaScript: The Good Parts</div>
                  <div className="book-author">by Douglas Crockford</div>
                  <div className="book-subject">Programming</div>
                </div>

                <div className="book-details">
                  <div className="detail-item">
                    <span className="detail-label">ISBN</span>
                    <span className="detail-value">978-0596517748</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Price</span>
                    <span className="detail-value">₹1,599</span>
                  </div>
                </div>

                <div className="copies-info">
                  <div className="copies-summary">
                    <div className="copy-stat">
                      <div className="copy-number total">6</div>
                      <div className="copy-label">Total</div>
                    </div>
                    <div className="copy-stat">
                      <div className="copy-number available">4</div>
                      <div className="copy-label">Available</div>
                    </div>
                    <div className="copy-stat">
                      <div className="copy-number issued">2</div>
                      <div className="copy-label">Issued</div>
                    </div>
                  </div>
                </div>

                <div className="book-actions">
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => viewBook("4")}
                  >
                    View
                  </button>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => editBook("4")}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => manageCopies("4")}
                  >
                    Copies
                  </button>
                </div>
              </div>
            </div>

            <div className="pagination">
              <div className="pagination-info">Showing 1-4 of 247 books</div>
              <div className="pagination-controls">
                {/* <a href="#" className="page-btn">
                  Previous
                </a> */}
                <Link to="#" className="page-btn">
                  Previous
                </Link>
                {/* <a href="#" className="page-btn active">
                  1
                </a> */}
                <Link to="#" className="page-btn active">
                  1
                </Link>
                {/* <a href="#" className="page-btn">
                  2
                </a> */}
                <Link to="#" className="page-btn">
                  2
                </Link>
                {/* <a href="#" className="page-btn">
                  3
                </a> */}
                <Link to="#" className="page-btn">
                  3
                </Link>
                {/* <a href="#" className="page-btn">
                  Next
                </a> */}
                <Link to="#" className="page-btn">
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
