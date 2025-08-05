import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/IssueBook.css";

export default function IssueBook() {
  const [memberSearch, setMemberSearch] = useState("");
  const [bookSearch, setBookSearch] = useState("");
  const [selectedCopy, setSelectedCopy] = useState("");
  const [issueDate] = useState("August 3, 2025");
  const [returnDate] = useState("August 10, 2025");
  const [memberInfo] = useState({
    name: "John Doe",
    status: "Active",
    memberId: "LIB001234",
    email: "john.doe@email.com",
    phone: "+91 9876543210",
    paymentStatus: "Paid (Aug 30)",
    booksIssued: "2 / 3",
    outstandingFines: "₹0"
  });
  const [bookInfo] = useState({
    title: "Clean Code",
    status: "Available",
    author: "Robert C. Martin",
    subject: "Programming",
    isbn: "978-0132350884",
    totalCopies: 5,
    available: 3,
    issued: 2
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Issue book data:", {
      memberSearch,
      bookSearch,
      selectedCopy,
      issueDate,
      returnDate
    });
    // Backend API integration will go here
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">Library Management System</div>
            <Link to="/dashboard" className="back-link">← Back to Dashboard</Link>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="page-header">
            <h1>Issue Book</h1>
            <p>Issue books to registered library members</p>
          </div>

          <div className="issue-container">
            <div className="issue-form">
              <form onSubmit={handleSubmit}>
                <div className="form-section">
                  <h2>Member Information</h2>
                  <div className="form-group">
                    <label htmlFor="memberSearch">Search Member <span className="required">*</span></label>
                    <input type="text" id="memberSearch" value={memberSearch} onChange={(e) => setMemberSearch(e.target.value)} placeholder="Enter member ID, name, or email..." required />
                  </div>
                </div>

                <div className="form-section">
                  <h2>Book Information</h2>
                  <div className="form-group">
                    <label htmlFor="bookSearch">Search Book <span className="required">*</span></label>
                    <input type="text" id="bookSearch" value={bookSearch} onChange={(e) => setBookSearch(e.target.value)} placeholder="Enter book name, author, or ISBN..." required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="copySelect">Select Copy</label>
                    <select id="copySelect" value={selectedCopy} onChange={(e) => setSelectedCopy(e.target.value)}>
                      <option value="">First select a book</option>
                    </select>
                  </div>
                </div>

                <div className="issue-summary">
                  <h3>Issue Summary</h3>
                  <div className="summary-row">
                    <span>Issue Date:</span>
                    <span>{issueDate}</span>
                  </div>
                  <div className="summary-row">
                    <span>Return Due Date:</span>
                    <span>{returnDate}</span>
                  </div>
                  <div className="summary-row">
                    <span>Loan Period:</span>
                    <span>7 days</span>
                  </div>
                  <div className="summary-row">
                    <span>Fine Rate (if late):</span>
                    <span>₹5 per day</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                  <button type="submit" className="btn">Issue Book</button>
                  <button type="reset" className="btn btn-secondary">Reset Form</button>
                </div>
              </form>
            </div>

            <div className="info-panel">
              <div className="member-info">
                <div className="info-header">
                  <div className="info-title">{memberInfo.name}</div>
                  <div className="status-badge status-active">{memberInfo.status}</div>
                </div>
                <div className="info-details">
                  <div className="detail-item"><span className="detail-label">Member ID</span><span className="detail-value">{memberInfo.memberId}</span></div>
                  <div className="detail-item"><span className="detail-label">Email</span><span className="detail-value">{memberInfo.email}</span></div>
                  <div className="detail-item"><span className="detail-label">Phone</span><span className="detail-value">{memberInfo.phone}</span></div>
                  <div className="detail-item"><span className="detail-label">Payment Status</span><span className="detail-value" style={{ color: "#28a745" }}>{memberInfo.paymentStatus}</span></div>
                  <div className="detail-item"><span className="detail-label">Books Issued</span><span className="detail-value">{memberInfo.booksIssued}</span></div>
                  <div className="detail-item"><span className="detail-label">Outstanding Fines</span><span className="detail-value">{memberInfo.outstandingFines}</span></div>
                </div>
              </div>

              <div className="book-info">
                <div className="info-header">
                  <div className="info-title">{bookInfo.title}</div>
                  <div className="status-badge status-available">{bookInfo.status}</div>
                </div>
                <div className="info-details">
                  <div className="detail-item"><span className="detail-label">Author</span><span className="detail-value">{bookInfo.author}</span></div>
                  <div className="detail-item"><span className="detail-label">Subject</span><span className="detail-value">{bookInfo.subject}</span></div>
                  <div className="detail-item"><span className="detail-label">ISBN</span><span className="detail-value">{bookInfo.isbn}</span></div>
                  <div className="detail-item"><span className="detail-label">Total Copies</span><span className="detail-value">{bookInfo.totalCopies}</span></div>
                  <div className="detail-item"><span className="detail-label">Available</span><span className="detail-value" style={{ color: "#28a745" }}>{bookInfo.available}</span></div>
                  <div className="detail-item"><span className="detail-label">Currently Issued</span><span className="detail-value">{bookInfo.issued}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
