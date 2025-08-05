// React conversion of Return Book page in JSX format
import React, { useState, useEffect, useRef } from 'react';
import "../assets/styles/returnBook.css"; // Externalize styles for better readability

const ReturnBook = () => {
  const [searchMethod, setSearchMethod] = useState('member');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [fineAmount, setFineAmount] = useState(0);
  const [messages, setMessages] = useState({ success: '', error: '' });
  const resultsRef = useRef(null);

  const mockIssuedBooks = [
    {
      id: 1,
      member: { id: 1234, name: 'John Doe' },
      book: {
        name: 'Clean Code',
        author: 'Robert C. Martin',
        copyId: '004',
      },
      issueDate: '2025-07-25',
      dueDate: '2025-08-01',
      status: 'overdue',
    },
    {
      id: 2,
      member: { id: 1235, name: 'Alice Smith' },
      book: {
        name: 'The Pragmatic Programmer',
        author: 'Andrew Hunt',
        copyId: '003',
      },
      issueDate: '2025-08-01',
      dueDate: '2025-08-08',
      status: 'ontime',
    },
  ];

  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = mockIssuedBooks.filter((issue) => {
      switch (searchMethod) {
        case 'member':
          return (
            issue.member.name.toLowerCase().includes(query) ||
            issue.member.id.toString().includes(query)
          );
        case 'book':
          return (
            issue.book.name.toLowerCase().includes(query) ||
            issue.book.author.toLowerCase().includes(query)
          );
        case 'copy':
          return issue.book.copyId.includes(query);
        default:
          return false;
      }
    });

    setSearchResults(filtered);
  }, [searchQuery, searchMethod]);

  const handleSelectIssue = (issue) => {
    setSelectedIssue(issue);
    setSearchQuery(
      `${issue.book.name} - ${issue.member.name} (Copy #${issue.book.copyId})`
    );
    setSearchResults([]);

    const issueDate = new Date(issue.issueDate);
    const dueDate = new Date(issue.dueDate);
    const returnDate = new Date();
    const daysBorrowed = Math.ceil((returnDate - issueDate) / (1000 * 60 * 60 * 24));
    const daysOverdue = Math.max(
      0,
      Math.ceil((returnDate - dueDate) / (1000 * 60 * 60 * 24))
    );
    const fine = daysOverdue * 5;

    setFineAmount(fine);
  };

  const handleReset = () => {
    setSearchMethod('member');
    setSearchQuery('');
    setSelectedIssue(null);
    setFineAmount(0);
    setMessages({ success: '', error: '' });
    setSearchResults([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedIssue) return;

    const message = `Book "${selectedIssue.book.name}" returned successfully! ${
      fineAmount > 0 ? ` Fine collected: ₹${fineAmount}` : ''
    }`;

    setMessages({ success: message, error: '' });

    setTimeout(() => {
      if (window.confirm('Book returned successfully! Process another return?')) {
        handleReset();
      } else {
        window.location.href = 'librarian-dashboard.html';
      }
    }, 2000);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!resultsRef.current?.contains(e.target)) {
        setSearchResults([]);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="return-book">
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">Library Management System</div>
            <a href="librarian-dashboard.html" className="back-link">
              ← Back to Dashboard
            </a>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="page-header">
            <h1>Return Book</h1>
            <p>Process book returns and calculate fines</p>
          </div>

          <div className="return-container">
            <div className="return-form">
              {messages.error && <div className="error-message">{messages.error}</div>}
              {messages.success && <div className="success-message">{messages.success}</div>}

              <form onSubmit={handleSubmit}>
                <div className="form-section">
                  <h2>Find Issued Book</h2>

                  <div className="form-group">
                    <label htmlFor="searchMethod">Search Method</label>
                    <select
                      id="searchMethod"
                      value={searchMethod}
                      onChange={(e) => setSearchMethod(e.target.value)}
                    >
                      <option value="member">By Member</option>
                      <option value="book">By Book Title</option>
                      <option value="copy">By Copy ID</option>
                    </select>
                  </div>

                  <div className="form-group" ref={resultsRef}>
                    <label htmlFor="searchQuery">
                      Search <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="searchQuery"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Enter member name, book title, or copy ID..."
                      required
                    />
                    {searchResults.length > 0 && (
                      <div className="search-results">
                        {searchResults.map((issue) => (
                          <div
                            key={issue.id}
                            className="search-result-item"
                            onClick={() => handleSelectIssue(issue)}
                          >
                            {issue.book.name} - {issue.member.name} (Copy #{issue.book.copyId})
                            <br />
                            <small>
                              Issued: {issue.issueDate} | Due: {issue.dueDate}
                            </small>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {selectedIssue && (
                  <div className="return-summary show">
                    <h3>Return Summary</h3>
                    <div className="summary-row">
                      <span>Return Date:</span>
                      <span>{new Date().toLocaleDateString('en-GB')}</span>
                    </div>
                    <div className="summary-row">
                      <span>Days Borrowed:</span>
                      <span>
                        {Math.ceil(
                          (new Date() - new Date(selectedIssue.issueDate)) /
                            (1000 * 60 * 60 * 24)
                        )} days
                      </span>
                    </div>
                    <div className="summary-row">
                      <span>Status:</span>
                      <span>
                        {fineAmount > 0 ? `${fineAmount / 5} days overdue` : 'On Time'}
                      </span>
                    </div>
                    <div className="summary-row">
                      <span>Fine Amount:</span>
                      <span>₹{fineAmount}</span>
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button type="submit" className="btn" disabled={!selectedIssue}>
                    Process Return
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={handleReset}>
                    Reset Form
                  </button>
                </div>
              </form>
            </div>

            <div className="issue-details">
              <h2>Issue Details</h2>

              {selectedIssue && (
                <div className="issue-info show">
                  <div className="info-header">
                    <div className="info-title">{selectedIssue.book.name}</div>
                    <div className="status-badge status-overdue">
                      {fineAmount > 0 ? `${fineAmount / 5} Days Overdue` : 'On Time'}
                    </div>
                  </div>
                  <div className="info-details">
                    <div className="detail-item">
                      <span className="detail-label">Member</span>
                      <span className="detail-value">
                        {selectedIssue.member.name} (LIB00{selectedIssue.member.id})
                      </span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Author</span>
                      <span className="detail-value">{selectedIssue.book.author}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Copy ID</span>
                      <span className="detail-value">#{selectedIssue.book.copyId}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Issue Date</span>
                      <span className="detail-value">{selectedIssue.issueDate}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Due Date</span>
                      <span className="detail-value">{selectedIssue.dueDate}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Rack Location</span>
                      <span className="detail-value">Rack 2</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedIssue && fineAmount > 0 && (
                <div className="fine-calculation show">
                  <h3>Fine Calculation</h3>
                  <div className="calc-row">
                    <span>Due Date:</span>
                    <span>{selectedIssue.dueDate}</span>
                  </div>
                  <div className="calc-row">
                    <span>Return Date:</span>
                    <span>{new Date().toLocaleDateString('en-GB')}</span>
                  </div>
                  <div className="calc-row">
                    <span>Days Overdue:</span>
                    <span>{fineAmount / 5} days</span>
                  </div>
                  <div className="calc-row">
                    <span>Fine Rate:</span>
                    <span>₹5 per day</span>
                  </div>
                  <div className="calc-row">
                    <span>Total Fine:</span>
                    <span style={{ color: '#dc3545' }}>₹{fineAmount}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReturnBook;
