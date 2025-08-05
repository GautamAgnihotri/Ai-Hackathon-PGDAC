import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function IssueHistory() {
  const [dateFrom, setDateFrom] = useState('2025-07-01');
  const [dateTo, setDateTo] = useState('2025-08-03');
  const [statusFilter, setStatusFilter] = useState('all');
  const [memberFilter, setMemberFilter] = useState('');

  const transactions = [
    {
      id: '1',
      bookTitle: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      bookAuthor: 'Robert C. Martin',
      memberName: 'John Doe',
      memberId: 'LIB001234',
      copyId: '#004',
      issueDate: 'Aug 3, 2025',
      dueDate: 'Aug 10, 2025',
      returnDate: '-',
      status: 'Current',
      fine: '₹0',
      badgeClass: 'status-current',
    },
    {
      id: '2',
      bookTitle: 'The Pragmatic Programmer',
      bookAuthor: 'Andrew Hunt & David Thomas',
      memberName: 'Alice Smith',
      memberId: 'LIB001235',
      copyId: '#003',
      issueDate: 'Aug 1, 2025',
      dueDate: 'Aug 8, 2025',
      returnDate: '-',
      status: 'Current',
      fine: '₹0',
      badgeClass: 'status-current',
    },
    {
      id: '3',
      bookTitle: 'Design Patterns: Elements of Reusable Object-Oriented Software',
      bookAuthor: 'Gang of Four',
      memberName: 'Robert Johnson',
      memberId: 'LIB001025',
      copyId: '#007',
      issueDate: 'Jul 15, 2025',
      dueDate: 'Jul 22, 2025',
      returnDate: 'Aug 1, 2025',
      status: 'Late Return',
      fine: '₹50 (Paid)',
      badgeClass: 'status-overdue-returned',
    },
    // Add the rest of your data as needed...
  ];

  const applyFilters = () => {
    console.log('Applying filters:', {
      dateFrom,
      dateTo,
      statusFilter,
      memberFilter,
    });
    alert('Filters applied! Results would be updated.\n(Backend integration required)');
  };

  const viewDetails = (id) => {
    alert(`Opening detailed view for transaction ${id}\n(Backend integration required)`);
  };

  const processReturn = (id) => {
    if (window.confirm(`Process return for transaction ${id}?`)) {
      window.location.href = `return-book.html?transaction=${id}`;
    }
  };

  const printReceipt = (id) => {
    alert(`Generating receipt for transaction ${id}\n(Backend integration required)`);
  };

  return (
    <div>
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

        .page-title-section h1 {
          font - size: 2rem;
        color: #333;
        margin-bottom: 0.5rem;
      }

        .page-title-section p {
          color: #666;
        font-size: 1.1rem;
      }

        .stats-overview {
          display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

        .stat-card {
          background: #fff;
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid #e9ecef;
        text-align: center;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
      }

        .stat-number {
          font - size: 2rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 0.5rem;
      }

        .stat-label {
          color: #666;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

        .current {
          color: #007bff;
      }

        .returned {
          color: #28a745;
      }

        .overdue {
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

        .history-section {
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

        .history-table {
          width: 100%;
        border-collapse: collapse;
      }

        .history-table th,
        .history-table td {
          padding: 1rem;
        text-align: left;
        border-bottom: 1px solid #e9ecef;
      }

        .history-table th {
          background: #f8f9fa;
        font-weight: 600;
        color: #333;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

        .history-table tr:hover {
          background: #f8f9fa;
      }

        .history-table tr:last-child td {
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

        .status-badge {
          padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
        text-transform: uppercase;
      }

        .status-current {
          background: #cce5ff;
        color: #004085;
      }

        .status-returned {
          background: #d4edda;
        color: #155724;
      }

        .status-overdue-returned {
          background: #f8d7da;
        color: #721c24;
      }

        .date-cell {
          font - size: 0.9rem;
        color: #666;
      }

        .fine-amount {
          font - weight: 500;
      }

        .fine-paid {
          color: #28a745;
      }

        .fine-none {
          color: #666;
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
          border - color: #333;
        background: #f8f9fa;
      }

        .page-btn.active {
          background: #333;
        color: #fff;
        border-color: #333;
      }

        @media (max-width: 768px) {
        .history - table {
          font - size: 0.9rem;
        }

        .history-table th,
        .history-table td {
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
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">Library Management System</div>
            {/* <a href="librarian-dashboard.html" className="back-link">← Back to Dashboard</a> */}
            <Link to="/dashboard" className="back-link">← Back to Dashboard</Link>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="page-header">
            <div className="page-title-section">
              <h1>Issue History</h1>
              <p>Complete transaction history of all book issues and returns</p>
            </div>
          </div>

          <div className="stats-overview">
            <div className="stat-card"><div className="stat-number">342</div><div className="stat-label">Total Transactions</div></div>
            <div className="stat-card"><div className="stat-number current">89</div><div className="stat-label">Currently Issued</div></div>
            <div className="stat-card"><div className="stat-number returned">245</div><div className="stat-label">Returned</div></div>
            <div className="stat-card"><div className="stat-number overdue">8</div><div className="stat-label">Overdue</div></div>
            <div className="stat-card"><div className="stat-number">₹485</div><div className="stat-label">Fines Collected</div></div>
          </div>

          <div className="filters-section">
            <div className="filters-grid">
              <div className="filter-group">
                <label htmlFor="dateFrom">From Date</label>
                <input type="date" id="dateFrom" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
              </div>
              <div className="filter-group">
                <label htmlFor="dateTo">To Date</label>
                <input type="date" id="dateTo" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
              </div>
              <div className="filter-group">
                <label htmlFor="statusFilter">Status</label>
                <select id="statusFilter" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                  <option value="all">All Transactions</option>
                  <option value="current">Currently Issued</option>
                  <option value="returned">Returned</option>
                  <option value="overdue">Overdue</option>
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="memberFilter">Member</label>
                <input
                  type="text"
                  id="memberFilter"
                  placeholder="Search member..."
                  value={memberFilter}
                  onChange={(e) => setMemberFilter(e.target.value)}
                />
              </div>
              <div className="filter-group">
                <button className="btn" onClick={applyFilters}>Apply Filters</button>
              </div>
            </div>
          </div>

          <div className="history-section">
            <div className="section-header">
              <h2>Transaction History</h2>
              <span className="results-info">Showing 3 of 342 transactions</span>
            </div>

            <table className="history-table">
              <thead>
                <tr>
                  <th>Book Details</th>
                  <th>Member</th>
                  <th>Copy ID</th>
                  <th>Issue Date</th>
                  <th>Due Date</th>
                  <th>Return Date</th>
                  <th>Status</th>
                  <th>Fine</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn.id}>
                    <td className="book-info">
                      <div className="book-title">{txn.bookTitle}</div>
                      <div className="book-author">by {txn.bookAuthor}</div>
                    </td>
                    <td className="member-info">
                      <div className="member-name">{txn.memberName}</div>
                      <div className="member-id">{txn.memberId}</div>
                    </td>
                    <td><strong>{txn.copyId}</strong></td>
                    <td className="date-cell">{txn.issueDate}</td>
                    <td className="date-cell">{txn.dueDate}</td>
                    <td className="date-cell">{txn.returnDate}</td>
                    <td><span className={`status-badge ${txn.badgeClass}`}>{txn.status}</span></td>
                    <td className={`fine-amount ${txn.fine.includes('Paid') ? 'fine-paid' : 'fine-none'}`}>{txn.fine}</td>
                    <td className="actions-cell">
                      <button className="btn btn-secondary btn-small" onClick={() => viewDetails(txn.id)}>View</button>
                      {txn.status === 'Current' ? (
                        <button className="btn btn-secondary btn-small" onClick={() => processReturn(txn.id)}>Return</button>
                      ) : (
                        <button className="btn btn-secondary btn-small" onClick={() => printReceipt(txn.id)}>Receipt</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <div className="pagination-info">Showing 1-3 of 342 transactions</div>
              <div className="pagination-controls">
                {/* <a href="#" className="page-btn">Previous</a>
                <a href="#" className="page-btn active">1</a>
                <a href="#" className="page-btn">2</a>
                <a href="#" className="page-btn">3</a>
                <a href="#" className="page-btn">Next</a> */}
                <Link to="#" className="page-btn">Previous</Link>
                <Link to="#" className="page-btn active">1</Link>
                <Link to="#" className="page-btn">2</Link>
                <Link to="#" className="page-btn">3</Link>
                <Link to="#" className="page-btn">Next</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
