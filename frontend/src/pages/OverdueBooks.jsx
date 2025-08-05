import React, { useState, useEffect } from "react";

const initialBooks = [
  {
    id: "007",
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Gang of Four",
    memberName: "Robert Johnson",
    memberId: "LIB001025",
    dueDate: "2025-07-15",
    daysOverdue: 19,
    priority: "critical",
    fine: 95,
  },
  {
    id: "003",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    memberName: "Maria Garcia",
    memberId: "LIB001087",
    dueDate: "2025-07-18",
    daysOverdue: 16,
    priority: "critical",
    fine: 80,
  },
  {
    id: "002",
    title: "Code Complete",
    author: "Steve McConnell",
    memberName: "David Wilson",
    memberId: "LIB001156",
    dueDate: "2025-07-20",
    daysOverdue: 14,
    priority: "critical",
    fine: 70,
  },
  {
    id: "001",
    title: "Refactoring: Improving the Design of Existing Code",
    author: "Martin Fowler",
    memberName: "Sarah Brown",
    memberId: "LIB001298",
    dueDate: "2025-07-25",
    daysOverdue: 9,
    priority: "high",
    fine: 45,
  },
  {
    id: "004",
    title: "You Don't Know JS: Scope & Closures",
    author: "Kyle Simpson",
    memberName: "Michael Davis",
    memberId: "LIB001345",
    dueDate: "2025-07-27",
    daysOverdue: 7,
    priority: "high",
    fine: 35,
  },
  {
    id: "005",
    title: "Clean Architecture",
    author: "Robert C. Martin",
    memberName: "Emma Wilson",
    memberId: "LIB001456",
    dueDate: "2025-07-30",
    daysOverdue: 4,
    priority: "medium",
    fine: 20,
  },
  {
    id: "006",
    title: "Effective Java",
    author: "Joshua Bloch",
    memberName: "James Anderson",
    memberId: "LIB001567",
    dueDate: "2025-08-01",
    daysOverdue: 2,
    priority: "medium",
    fine: 10,
  },
  {
    id: "008",
    title: "Spring in Action",
    author: "Craig Walls",
    memberName: "Lisa Thompson",
    memberId: "LIB001678",
    dueDate: "2025-08-02",
    daysOverdue: 1,
    priority: "medium",
    fine: 5,
  },
];

const OverdueBooks = () => {
  const [books, setBooks] = useState(initialBooks);
  const [filters, setFilters] = useState({
    priority: "all",
    member: "",
    book: "",
  });

  const applyFilters = () => {
    alert("Filters applied! (Backend integration required)");
  };

  const collectFine = (memberId, amount) => {
    if (window.confirm(`Collect fine of ₹${amount} from member ${memberId}?`)) {
      alert(`Fine collection for ₹${amount} initiated (Backend required)`);
    }
  };

  const contactMember = (memberId) => {
    if (window.confirm(`Send overdue notice to member ${memberId}?`)) {
      alert(`Notice sent to member ${memberId} (Backend required)`);
    }
  };

  const filteredBooks = books.filter((book) => {
    const matchPriority =
      filters.priority === "all" || book.priority === filters.priority;
    const matchMember =
      book.memberName.toLowerCase().includes(filters.member.toLowerCase()) ||
      book.memberId.toLowerCase().includes(filters.member.toLowerCase());
    const matchBook = book.title
      .toLowerCase()
      .includes(filters.book.toLowerCase());

    return matchPriority && matchMember && matchBook;
  });

  return (
    <>
      <style>{`
        * {
          margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

        body {
          font - family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f8f9fa;
        color: #333;
        line-height: 1.6;
      }

        .container {
          max - width: 1400px;
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
          font - size: 1.5rem;
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
          border - color: #333;
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

        .header-content-page {
          display: flex;
        justify-content: space-between;
        align-items: center;
      }

        .page-title-section h1 {
          font - size: 2rem;
        color: #333;
        margin-bottom: 0.5rem;
      }

        .page-title-section p {
          color: #666;
        font-size: 1.1rem;
      }

        .alert-urgent {
          background: #f8d7da;
        border: 1px solid #f5c6cb;
        color: #721c24;
        padding: 1rem;
        border-radius: 5px;
        margin-bottom: 2rem;
        display: flex;
        align-items: center;
        gap: 0.8rem;
      }

        .alert-icon {
          font - size: 1.2rem;
        font-weight: bold;
      }

        .summary-cards {
          display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
          font - size: 2rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

        .summary-label {
          color: #666;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

        .critical {
          color: #dc3545;
      }

        .warning {
          color: #ffc107;
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
          margin - bottom: 0.5rem;
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

        .btn {
          padding: 0.6rem 1.2rem;
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

        .btn-secondary {
          background: transparent;
        color: #333;
        border: 2px solid #333;
      }

        .btn-secondary:hover {
          background: #333;
        color: #fff;
      }

        .overdue-section {
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

        .overdue-table {
          width: 100%;
        border-collapse: collapse;
      }

        .overdue-table th,
        .overdue-table td {
          padding: 1rem;
        text-align: left;
        border-bottom: 1px solid #e9ecef;
      }

        .overdue-table th {
          background: #f8f9fa;
        font-weight: 600;
        color: #333;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

        .overdue-table tr:hover {
          background: #f8f9fa;
      }

        .overdue-table tr:last-child td {
          border - bottom: none;
      }

        .book-info {
          display: flex;
        flex-direction: column;
      }

        .book-title {
          font - weight: 500;
        color: #333;
        margin-bottom: 0.2rem;
      }

        .book-author {
          font - size: 0.9rem;
        color: #666;
        font-style: italic;
      }

        .member-info {
          display: flex;
        flex-direction: column;
      }

        .member-name {
          font - weight: 500;
        color: #333;
        margin-bottom: 0.2rem;
      }

        .member-id {
          font - size: 0.9rem;
        color: #666;
      }

        .overdue-badge {
          padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
        text-transform: uppercase;
      }

        .overdue-critical {
          background: #f8d7da;
        color: #721c24;
      }

        .overdue-high {
          background: #fff3cd;
        color: #856404;
      }

        .overdue-medium {
          background: #ffeaa7;
        color: #856404;
      }

        .fine-amount {
          font - weight: 500;
        font-size: 1.1rem;
        color: #dc3545;
      }

        .actions-cell {
          display: flex;
        gap: 0.5rem;
      }

        .btn-small {
          padding: 0.3rem 0.6rem;
        font-size: 0.8rem;
        border-radius: 3px;
      }

        .btn-collect {
          background: #dc3545;
        color: #fff;
      }

        .btn-collect:hover {
          background: #c82333;
      }

        .priority-critical {
          background: #fff5f5 !important;
        border-left: 4px solid #dc3545;
      }

        .priority-high {
          background: #fffbf0 !important;
        border-left: 4px solid #ffc107;
      }

        @media (max-width: 768px) {
        .overdue - table {
          font - size: 0.9rem;
        }

        .overdue-table th,
        .overdue-table td {
          padding: 0.75rem 0.5rem;
        }

        .filters-grid {
          grid - template - columns: 1fr;
        }

        .actions-cell {
          flex - direction: column;
        }
      }
      `}</style>
      <div className="container">
        <header>
          <div className="header-content">
            <div className="logo">Library Management System</div>
            <a href="librarian-dashboard.html" className="back-link">
              ← Back to Dashboard
            </a>
          </div>
        </header>

        <main className="main-content">
          <div className="page-header">
            <div className="page-title-section">
              <h1>Overdue Books</h1>
              <p>Track and manage books past their return due date</p>
            </div>
          </div>

          <div className="alert-urgent">
            <div className="alert-icon">🚨</div>
            <div>
              <strong>Urgent Action Required:</strong> 3 books are critically
              overdue (15+ days). Please contact members immediately and collect
              outstanding fines.
            </div>
          </div>

          <div className="summary-cards">
            <div className="summary-card">
              <div className="summary-number critical">{books.length}</div>
              <div className="summary-label">Total Overdue</div>
            </div>
            <div className="summary-card">
              <div className="summary-number critical">
                {books.filter((b) => b.daysOverdue >= 15).length}
              </div>
              <div className="summary-label">Critical (15+ days)</div>
            </div>
            <div className="summary-card">
              <div className="summary-number warning">
                {books.filter((b) => b.daysOverdue >= 7 && b.daysOverdue < 15)
                  .length}
              </div>
              <div className="summary-label">High Priority (7+ days)</div>
            </div>
            <div className="summary-card">
              <div className="summary-number">
                ₹{books.reduce((sum, b) => sum + b.fine, 0)}
              </div>
              <div className="summary-label">Total Fines Due</div>
            </div>
          </div>

          <div className="filters-section">
            <div className="filters-grid">
              <div className="filter-group">
                <label>Priority Level</label>
                <select
                  value={filters.priority}
                  onChange={(e) =>
                    setFilters({ ...filters, priority: e.target.value })
                  }
                >
                  <option value="all">All Overdue Books</option>
                  <option value="critical">Critical (15+ days)</option>
                  <option value="high">High (7-14 days)</option>
                  <option value="medium">Medium (1-6 days)</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Member</label>
                <input
                  type="text"
                  value={filters.member}
                  onChange={(e) =>
                    setFilters({ ...filters, member: e.target.value })
                  }
                  placeholder="Search by member name or ID..."
                />
              </div>
              <div className="filter-group">
                <label>Book</label>
                <input
                  type="text"
                  value={filters.book}
                  onChange={(e) =>
                    setFilters({ ...filters, book: e.target.value })
                  }
                  placeholder="Search by book title..."
                />
              </div>
              <div className="filter-group">
                <button className="btn" onClick={applyFilters}>
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          <div className="overdue-section">
            <div className="section-header">
              <h2>Overdue Books List</h2>
              <span className="results-info">
                {filteredBooks.length} books overdue
              </span>
            </div>

            <table className="overdue-table">
              <thead>
                <tr>
                  <th>Book Details</th>
                  <th>Member</th>
                  <th>Copy ID</th>
                  <th>Due Date</th>
                  <th>Days Overdue</th>
                  <th>Priority</th>
                  <th>Fine Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.map((book) => (
                  <tr
                    key={book.id}
                    className={`priority-${book.priority}`}
                  >
                    <td className="book-info">
                      <div className="book-title">{book.title}</div>
                      <div className="book-author">by {book.author}</div>
                    </td>
                    <td className="member-info">
                      <div className="member-name">{book.memberName}</div>
                      <div className="member-id">{book.memberId}</div>
                    </td>
                    <td>
                      <strong>#{book.id}</strong>
                    </td>
                    <td>{new Date(book.dueDate).toLocaleDateString()}</td>
                    <td
                      style={{
                        fontWeight: "bold",
                        color:
                          book.daysOverdue >= 15
                            ? "#dc3545"
                            : book.daysOverdue >= 7
                              ? "#ffc107"
                              : "#856404",
                      }}
                    >
                      {book.daysOverdue} days
                    </td>
                    <td>
                      <span className={`overdue-badge overdue-${book.priority}`}>
                        {book.priority.charAt(0).toUpperCase() +
                          book.priority.slice(1)}
                      </span>
                    </td>
                    <td className="fine-amount">₹{book.fine}</td>
                    <td className="actions-cell">
                      <button
                        className="btn btn-collect btn-small"
                        onClick={() =>
                          collectFine(book.memberId, book.fine)
                        }
                      >
                        Collect Fine
                      </button>
                      <button
                        className="btn btn-secondary btn-small"
                        onClick={() =>
                          contactMember(book.memberId)
                        }
                      >
                        Contact
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
};

export default OverdueBooks;
