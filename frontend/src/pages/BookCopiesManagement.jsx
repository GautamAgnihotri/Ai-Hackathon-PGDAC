import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BookCopiesManagement() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [rackFilter, setRackFilter] = useState("all");

  const applyFilters = () => {
    console.log("Applying filters:", { statusFilter, rackFilter });
    alert(
      "Filters applied! Results would be updated.\n(Backend integration required)"
    );
  };

  const relocateCopy = (copyId) => {
    const newRack = prompt("Enter new rack location for Copy #" + copyId + ":");
    if (newRack) {
      console.log("Relocate copy", copyId, "to rack", newRack);
      alert(
        `Copy #${copyId} relocated to Rack ${newRack}\n(Backend integration required)`
      );
    }
  };

  const editCopy = (copyId) => {
    console.log("Edit copy:", copyId);
    alert(`Opening edit form for Copy #${copyId}\n(Backend integration required)`);
  };

  const issueCopy = (copyId) => {
    const memberId = prompt("Enter member ID to issue Copy #" + copyId + " to:");
    if (memberId) {
      console.log("Issue copy", copyId, "to member", memberId);
      alert(
        `Copy #${copyId} issued to member ${memberId}\n(Backend integration required)`
      );
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
      }

      .book-info {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 1.5rem;
      }

      .book-details h1 {
        font-size: 1.8rem;
        color: #333;
        margin-bottom: 0.3rem;
      }

      .book-details .author {
        color: #666;
        font-style: italic;
        margin-bottom: 0.5rem;
      }

      .book-details .meta {
        color: #666;
        font-size: 0.9rem;
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

      .summary-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        margin-top: 1.5rem;
      }

      .summary-card {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid #e9ecef;
        text-align: center;
      }

      .summary-number {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.3rem;
      }

      .summary-label {
        color: #666;
        font-size: 0.8rem;
        text-transform: uppercase;
      }

      .available {
        color: #28a745;
      }

      .issued {
        color: #dc3545;
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

      .filter-group select {
        padding: 0.6rem;
        border: 2px solid #e9ecef;
        border-radius: 5px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
      }

      .filter-group select:focus {
        outline: none;
        border-color: #333;
      }

      .copies-section {
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

      .copies-grid {
        padding: 1.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5rem;
      }

      .copy-card {
        border: 2px solid #e9ecef;
        border-radius: 8px;
        padding: 1.5rem;
        transition: all 0.3s ease;
      }

      .copy-card.available {
        border-color: #28a745;
        background: #f8fff8;
      }

      .copy-card.issued {
        border-color: #dc3545;
        background: #fff8f8;
      }

      .copy-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }

      .copy-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      .copy-id {
        font-size: 1.2rem;
        font-weight: bold;
        color: #333;
      }

      .copy-status {
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
        text-transform: uppercase;
      }

      .status-available {
        background: #d4edda;
        color: #155724;
      }

      .status-issued {
        background: #f8d7da;
        color: #721c24;
      }

      .copy-details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-bottom: 1rem;
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

      .issue-info {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 5px;
        margin-bottom: 1rem;
        font-size: 0.9rem;
        color: #666;
      }

      .copy-actions {
        display: flex;
        gap: 0.5rem;
        justify-content: flex-end;
      }

      .btn-small {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
        border-radius: 3px;
      }

      @media (max-width: 768px) {
        .book-info {
          flex-direction: column;
          gap: 1rem;
        }

        .header-actions {
          flex-direction: column;
          width: 100%;
        }

        .copies-grid {
          grid-template-columns: 1fr;
        }

        .copy-details {
          grid-template-columns: 1fr;
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
          <div className="page-header">
            <div className="book-info">
              <div className="book-details">
                <h1>Clean Code: A Handbook of Agile Software Craftsmanship</h1>
                <div className="author">by Robert C. Martin</div>
                <div className="meta">
                  Book ID: #001 | Subject: Programming | ISBN: 978-0132350884
                </div>
              </div>
              <div className="header-actions">
                {/* <a href="add-book-copy.html?bookId=1" className="btn">
                  + Add New Copy
                </a> */}
                <Link to="/add-book-copy?bookId=1" className="btn">+ Add New Copy</Link>
                {/* <a href="edit-book.html?bookId=1" className="btn btn-secondary">
                  Edit Book Info
                </a> */}
                <Link to="/edit-book?bookId=1" className="btn btn-secondary">Edit Book Info</Link>
              </div>
            </div>

            <div className="summary-cards">
              <div className="summary-card">
                <div className="summary-number">5</div>
                <div className="summary-label">Total Copies</div>
              </div>
              <div className="summary-card">
                <div className="summary-number available">3</div>
                <div className="summary-label">Available</div>
              </div>
              <div className="summary-card">
                <div className="summary-number issued">2</div>
                <div className="summary-label">Currently Issued</div>
              </div>
              <div className="summary-card">
                <div className="summary-number">₹2,499</div>
                <div className="summary-label">Book Price</div>
              </div>
            </div>
          </div>

          <div className="filters-section">
            <div className="filters-grid">
              <div className="filter-group">
                <label htmlFor="statusFilter">Filter by Status</label>
                <select
                  id="statusFilter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Copies</option>
                  <option value="available">Available Only</option>
                  <option value="issued">Issued Only</option>
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="rackFilter">Filter by Rack</label>
                <select
                  id="rackFilter"
                  value={rackFilter}
                  onChange={(e) => setRackFilter(e.target.value)}
                >
                  <option value="all">All Racks</option>
                  <option value="1">Rack 1</option>
                  <option value="2">Rack 2</option>
                  <option value="3">Rack 3</option>
                  <option value="4">Rack 4</option>
                </select>
              </div>
              <div className="filter-group">
                <button className="btn" onClick={applyFilters}>
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          <div className="copies-section">
            <div className="section-header">
              <h2>Individual Copies</h2>
              <span>5 total copies</span>
            </div>

            <div className="copies-grid">
              {/* Copy #001 */}
              <div className="copy-card available">
                <div className="copy-header">
                  <div className="copy-id">Copy #001</div>
                  <div className="copy-status status-available">Available</div>
                </div>

                <div className="copy-details">
                  <div className="detail-item">
                    <span className="detail-label">Rack Location</span>
                    <span className="detail-value">Rack 2</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Condition</span>
                    <span className="detail-value">Good</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Added Date</span>
                    <span className="detail-value">Jan 15, 2023</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Last Borrowed</span>
                    <span className="detail-value">Jul 10, 2025</span>
                  </div>
                </div>

                <div className="copy-actions">
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => relocateCopy("001")}
                  >
                    Relocate
                  </button>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => editCopy("001")}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => issueCopy("001")}
                  >
                    Issue
                  </button>
                </div>
              </div>

              {/* Copy #002 */}
              <div className="copy-card available">
                <div className="copy-header">
                  <div className="copy-id">Copy #002</div>
                  <div className="copy-status status-available">Available</div>
                </div>

                <div className="copy-details">
                  <div className="detail-item">
                    <span className="detail-label">Rack Location</span>
                    <span className="detail-value">Rack 2</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Condition</span>
                    <span className="detail-value">Excellent</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Added Date</span>
                    <span className="detail-value">Jan 15, 2023</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Last Borrowed</span>
                    <span className="detail-value">Never</span>
                  </div>
                </div>

                <div className="copy-actions">
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => relocateCopy("002")}
                  >
                    Relocate
                  </button>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => editCopy("002")}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => issueCopy("002")}
                  >
                    Issue
                  </button>
                </div>
              </div>

              {/* Copy #003 */}
              <div className="copy-card available">
                <div className="copy-header">
                  <div className="copy-id">Copy #003</div>
                  <div className="copy-status status-available">Available</div>
                </div>

                <div className="copy-details">
                  <div className="detail-item">
                    <span className="detail-label">Rack Location</span>
                    <span className="detail-value">Rack 2</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Condition</span>
                    <span className="detail-value">Good</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Added Date</span>
                    <span className="detail-value">Mar 10, 2024</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Last Borrowed</span>
                    <span className="detail-value">Jun 5, 2025</span>
                  </div>
                </div>

                <div className="copy-actions">
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => relocateCopy("003")}
                  >
                    Relocate
                  </button>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => editCopy("003")}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => issueCopy("003")}
                  >
                    Issue
                  </button>
                </div>
              </div>

              {/* Copy #004 */}
              <div className="copy-card issued">
                <div className="copy-header">
                  <div className="copy-id">Copy #004</div>
                  <div className="copy-status status-issued">Issued</div>
                </div>

                <div className="copy-details">
                  <div className="detail-item">
                    <span className="detail-label">Issued To</span>
                    <span className="detail-value">John Doe (LIB001234)</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Issue Date</span>
                    <span className="detail-value">Aug 3, 2025</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Due Date</span>
                    <span className="detail-value">Aug 10, 2025</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Days Remaining</span>
                    <span className="detail-value">7 days</span>
                  </div>
                </div>

                <div className="issue-info">
                  Currently issued to member. Return processing available from
                  Issue History page.
                </div>
              </div>

              {/* Copy #005 */}
              <div className="copy-card issued">
                <div className="copy-header">
                  <div className="copy-id">Copy #005</div>
                  <div className="copy-status status-issued">Issued</div>
                </div>

                <div className="copy-details">
                  <div className="detail-item">
                    <span className="detail-label">Issued To</span>
                    <span className="detail-value">Alice Smith (LIB001235)</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Issue Date</span>
                    <span className="detail-value">Jul 29, 2025</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Due Date</span>
                    <span className="detail-value">Aug 5, 2025</span>
                  </div>
                  <div className="detail-item">
                    <span
                      className="detail-value"
                      style={{ color: "#ffc107" }}
                    >
                      2 days
                    </span>
                  </div>
                </div>

                <div className="issue-info">
                  Due soon! Consider sending reminder to member.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
