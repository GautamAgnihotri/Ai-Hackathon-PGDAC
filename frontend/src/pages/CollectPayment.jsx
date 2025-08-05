import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const mockMembers = [
  {
    id: 1025,
    name: "Robert Johnson",
    email: "robert.j@email.com",
    phone: "+91 9876543212",
    lastPayment: "2025-06-03",
    status: "overdue",
    monthlyFee: 500,
    outstandingFines: 140,
  },
  {
    id: 1087,
    name: "Maria Garcia",
    email: "maria.garcia@email.com",
    phone: "+91 9876543213",
    lastPayment: "2025-07-20",
    status: "due",
    monthlyFee: 500,
    outstandingFines: 80,
  },
  {
    id: 1234,
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+91 9876543210",
    lastPayment: "2025-07-30",
    status: "active",
    monthlyFee: 0,
    outstandingFines: 0,
  },
];

export default function CollectPayment() {
  const [query, setQuery] = useState("");
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [paymentType, setPaymentType] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [receiptNumber, setReceiptNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showReceiptInfo, setShowReceiptInfo] = useState(false);

  const memberResultsRef = useRef();

  // Generate initial receipt number
  useEffect(() => {
    generateReceiptNumber();
  }, []);

  // Filter members based on query
  useEffect(() => {
    if (query.length < 2) {
      setFilteredMembers([]);
      return;
    }
    const filtered = mockMembers.filter(
      (member) =>
        member.name.toLowerCase().includes(query.toLowerCase()) ||
        member.email.toLowerCase().includes(query.toLowerCase()) ||
        member.id.toString().includes(query)
    );
    setFilteredMembers(filtered);
  }, [query]);

  // Update payment amount when paymentType or selectedMember changes
  useEffect(() => {
    if (!selectedMember) return;

    switch (paymentType) {
      case "fee":
        setPaymentAmount(selectedMember.monthlyFee);
        break;
      case "fine":
        setPaymentAmount(selectedMember.outstandingFines);
        break;
      case "both":
        setPaymentAmount(selectedMember.monthlyFee + selectedMember.outstandingFines);
        break;
      default:
        setPaymentAmount("");
    }
  }, [paymentType, selectedMember]);

  // Close search results if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        memberResultsRef.current &&
        !memberResultsRef.current.contains(event.target) &&
        event.target.id !== "memberSearch"
      ) {
        setFilteredMembers([]);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  function selectMember(member) {
    setSelectedMember(member);
    setQuery(`${member.name} (${member.id})`);
    setFilteredMembers([]);
    setShowReceiptInfo(false);
    setErrorMessage("");
    setSuccessMessage("");
  }

  function resetForm() {
    setSelectedMember(null);
    setQuery("");
    setPaymentType("");
    setPaymentAmount("");
    setPaymentMethod("cash");
    setErrorMessage("");
    setSuccessMessage("");
    setShowReceiptInfo(false);
    setFilteredMembers([]);
    generateReceiptNumber();
  }

  function generateReceiptNumber() {
    const now = new Date();
    const receipt = `RCP${now.getFullYear()}${String(now.getMonth() + 1).padStart(
      2,
      "0"
    )}${String(now.getDate()).padStart(2, "0")}${String(Math.floor(Math.random() * 9999)).padStart(
      4,
      "0"
    )}`;
    setReceiptNumber(receipt);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!selectedMember) {
      setErrorMessage("Please select a member.");
      setSuccessMessage("");
      return;
    }
    if (!paymentType) {
      setErrorMessage("Please select a payment type.");
      setSuccessMessage("");
      return;
    }
    if (!paymentAmount || Number(paymentAmount) <= 0) {
      setErrorMessage("Please enter a valid payment amount.");
      setSuccessMessage("");
      return;
    }

    const paymentData = {
      member: selectedMember,
      type: paymentType,
      amount: parseFloat(paymentAmount),
      method: paymentMethod,
      receiptNumber,
      date: new Date(),
    };

    console.log("Payment collected:", paymentData);

    setSuccessMessage(
      `Payment of ₹${paymentData.amount} collected successfully from ${selectedMember.name}!`
    );
    setErrorMessage("");
    setShowReceiptInfo(true);

    setTimeout(() => {
      if (window.confirm("Payment collected successfully! Collect another payment?")) {
        resetForm();
      } else {
        window.location.href = "librarian-dashboard.html";
      }
    }, 2000);
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
        max-width: 1000px;
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
        text-align: center;
      }

      .page-header h1 {
        font-size: 2rem;
        color: #333;
        margin-bottom: 0.5rem;
      }

      .page-header p {
        color: #666;
        font-size: 1.1rem;
      }

      .payment-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .payment-form {
        background: #fff;
        padding: 2rem;
        border-radius: 10px;
        border: 1px solid #e9ecef;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }

      .form-section h2 {
        color: #333;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #e9ecef;
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
      .form-group select {
        width: 100%;
        padding: 0.75rem;
        border: 2px solid #e9ecef;
        border-radius: 5px;
        font-size: 1rem;
        transition: border-color 0.3s ease;
      }

      .form-group input:focus,
      .form-group select:focus {
        outline: none;
        border-color: #333;
      }

      .form-group input:disabled {
        background-color: #f8f9fa;
        color: #666;
      }

      .search-results {
        max-height: 200px;
        overflow-y: auto;
        border: 1px solid #e9ecef;
        border-radius: 5px;
        background: #fff;
        display: none;
      }

      .search-result-item {
        padding: 0.75rem;
        border-bottom: 1px solid #e9ecef;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .search-result-item:hover {
        background: #f8f9fa;
      }

      .search-result-item:last-child {
        border-bottom: none;
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
        display: inline-block;
        text-decoration: none;
      }

      .btn:hover {
        background: #555;
      }

      .btn:disabled {
        background: #ccc;
        cursor: not-allowed;
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

      .member-details {
        background: #fff;
        padding: 2rem;
        border-radius: 10px;
        border: 1px solid #e9ecef;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }

      .member-info {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 8px;
        border: 1px solid #e9ecef;
        margin-bottom: 1.5rem;
        display: none;
      }

      .member-info.show {
        display: block;
      }

      .info-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }

      .info-title {
        font-size: 1.2rem;
        font-weight: bold;
        color: #333;
      }

      .status-badge {
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: 500;
        text-transform: uppercase;
      }

      .status-active {
        background: #d4edda;
        color: #155724;
      }

      .status-due {
        background: #fff3cd;
        color: #856404;
      }

      .status-overdue {
        background: #f8d7da;
        color: #721c24;
      }

      .info-details {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
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

      .payment-summary {
        background: #e9ecef;
        padding: 1.5rem;
        border-radius: 8px;
        margin-bottom: 1.5rem;
        display: none;
      }

      .payment-summary.show {
        display: block;
      }

      .payment-summary h3 {
        color: #333;
        margin-bottom: 1rem;
      }

      .summary-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #dee2e6;
      }

      .summary-row:last-child {
        border-bottom: 2px solid #333;
        font-weight: bold;
        font-size: 1.1rem;
        margin-top: 1rem;
      }

      .outstanding-fines {
        background: #fff3cd;
        border: 1px solid #ffeaa7;
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
        display: none;
      }

      .outstanding-fines.show {
        display: block;
      }

      .outstanding-fines h3 {
        color: #856404;
        margin-bottom: 1rem;
      }

      .fine-item {
        display: flex;
        justify-content: space-between;
        padding: 0.75rem;
        border-bottom: 1px solid #f0e68c;
        margin-bottom: 0.5rem;
      }

      .fine-item:last-child {
        border-bottom: none;
        margin-bottom: 0;
      }

      .fine-book {
        font-weight: 500;
        color: #333;
      }

      .fine-amount {
        font-weight: bold;
        color: #dc3545;
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

      .receipt-info {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 5px;
        margin-top: 1rem;
        font-size: 0.9rem;
        color: #666;
        display: none;
      }

      .receipt-info.show {
        display: block;
      }

      @media (max-width: 768px) {
        .payment-container {
          grid-template-columns: 1fr;
        }

        .info-details {
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
            <Link to="/librarian-dashboard" className="back-link">
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="page-header">
            <h1>Collect Payment</h1>
            <p>Process membership fee and fine payments from library members</p>
          </div>

          <div className="payment-container" style={{ display: "flex", gap: "2rem" }}>
            <div className="payment-form" style={{ flex: 1 }}>
              {errorMessage && (
                <div className="error-message" id="errorMessage">
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className="success-message" id="successMessage">
                  {successMessage}
                </div>
              )}

              <form id="paymentForm" onSubmit={handleSubmit}>
                <div className="form-section">
                  <h2>Member Information</h2>

                  <div className="form-group" style={{ position: "relative" }}>
                    <label htmlFor="memberSearch">
                      Search Member <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="memberSearch"
                      placeholder="Enter member ID, name, or email..."
                      required
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      autoComplete="off"
                    />
                    {filteredMembers.length > 0 && (
                      <div
                        className="search-results"
                        id="memberResults"
                        ref={memberResultsRef}
                        style={{
                          position: "absolute",
                          zIndex: 10,
                          background: "white",
                          border: "1px solid #ccc",
                          width: "100%",
                          maxHeight: "150px",
                          overflowY: "auto",
                        }}
                      >
                        {filteredMembers.map((member) => (
                          <div
                            key={member.id}
                            className="search-result-item"
                            style={{ cursor: "pointer", padding: "0.3rem 0.5rem" }}
                            onClick={() => selectMember(member)}
                          >
                            {member.name} ({member.id}) - Status: {member.status.toUpperCase()}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-section">
                  <h2>Payment Details</h2>

                  <div className="form-group">
                    <label htmlFor="paymentType">
                      Payment Type <span className="required">*</span>
                    </label>
                    <select
                      id="paymentType"
                      required
                      value={paymentType}
                      onChange={(e) => setPaymentType(e.target.value)}
                      disabled={!selectedMember}
                    >
                      <option value="">Select Payment Type</option>
                      <option value="fee">Monthly Membership Fee</option>
                      <option value="fine">Late Return Fine</option>
                      <option value="both">Fee + Fine (Combined)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="paymentAmount">
                      Amount (₹) <span className="required">*</span>
                    </label>
                    <input
                      type="number"
                      id="paymentAmount"
                      step="0.01"
                      min="0"
                      placeholder="0.00"
                      required
                      value={paymentAmount}
                      onChange={(e) => setPaymentAmount(e.target.value)}
                      disabled={!paymentType}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="paymentMethod">Payment Method</label>
                    <select
                      id="paymentMethod"
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <option value="cash">Cash</option>
                      <option value="card">Debit/Credit Card</option>
                      <option value="upi">UPI</option>
                      <option value="netbanking">Net Banking</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="receiptNumber">Receipt Number</label>
                    <input type="text" id="receiptNumber" value={receiptNumber} readOnly />
                  </div>
                </div>

                <div className="payment-summary" id="paymentSummary">
                  <h3>Payment Summary</h3>
                  <div className="summary-row">
                    <span>Membership Fee:</span>
                    <span id="feeAmount">₹{selectedMember ? selectedMember.monthlyFee : 0}</span>
                  </div>
                  <div className="summary-row">
                    <span>Outstanding Fines:</span>
                    <span id="fineAmount">₹{selectedMember ? selectedMember.outstandingFines : 0}</span>
                  </div>
                  <div className="summary-row">
                    <span>Total Amount:</span>
                    <span id="totalAmount">
                      ₹
                      {selectedMember
                        ? selectedMember.monthlyFee + selectedMember.outstandingFines
                        : 0}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    marginTop: "2rem",
                  }}
                >
                  <button
                    type="submit"
                    className="btn"
                    id="collectButton"
                    disabled={!paymentType || !paymentAmount || Number(paymentAmount) <= 0}
                  >
                    Collect Payment
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={resetForm}
                  >
                    Reset Form
                  </button>
                </div>
              </form>

              {showReceiptInfo && (
                <div className="receipt-info" id="receiptInfo">
                  <strong>Payment Successful!</strong>
                  <br />
                  Receipt has been generated. Please provide a copy to the member.
                </div>
              )}
            </div>

            <div className="member-details" style={{ flex: 1 }}>
              <h2>Member Details</h2>

              {selectedMember ? (
                <>
                  <div
                    className={`member-info show`}
                    id="memberInfo"
                    style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "5px" }}
                  >
                    <div className="info-header" style={{ display: "flex", justifyContent: "space-between" }}>
                      <div className="info-title">{selectedMember.name}</div>
                      <div className={`status-badge status-${selectedMember.status}`}>
                        {selectedMember.status === "overdue"
                          ? "Payment Overdue"
                          : selectedMember.status === "due"
                            ? "Payment Due"
                            : "Active"}
                      </div>
                    </div>
                    <div className="info-details" style={{ marginTop: "1rem" }}>
                      <div className="detail-item">
                        <span className="detail-label">Member ID</span>
                        <span className="detail-value">LIB{String(selectedMember.id).padStart(6, "0")}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Email</span>
                        <span className="detail-value">{selectedMember.email}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Phone</span>
                        <span className="detail-value">{selectedMember.phone}</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Last Payment</span>
                        <span className="detail-value">
                          {new Date(selectedMember.lastPayment).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Books Issued</span>
                        <span className="detail-value">2</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Membership Expires</span>
                        <span
                          className="detail-value"
                          style={{
                            color:
                              new Date(selectedMember.lastPayment).getTime() + 30 * 24 * 60 * 60 * 1000 <
                                Date.now()
                                ? "#dc3545"
                                : "inherit",
                          }}
                        >
                          {new Date(
                            new Date(selectedMember.lastPayment).getTime() + 30 * 24 * 60 * 60 * 1000
                          ).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}{" "}
                          {new Date(selectedMember.lastPayment).getTime() + 30 * 24 * 60 * 60 * 1000 <
                            Date.now()
                            ? "(Expired)"
                            : ""}
                        </span>
                      </div>
                    </div>
                  </div>

                  {selectedMember.outstandingFines > 0 && (
                    <div
                      className="outstanding-fines show"
                      id="outstandingFines"
                      style={{
                        marginTop: "2rem",
                        border: "1px solid #ddd",
                        padding: "1rem",
                        borderRadius: "5px",
                      }}
                    >
                      <h3>Outstanding Fines</h3>
                      <div className="fine-item" style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className="fine-book">Design Patterns (19 days late)</div>
                        <div className="fine-amount">₹95</div>
                      </div>
                      <div className="fine-item" style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className="fine-book">Code Complete (9 days late)</div>
                        <div className="fine-amount">₹45</div>
                      </div>
                      <div className="fine-item" style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                        <div className="fine-book">Total Fines</div>
                        <div className="fine-amount">₹{selectedMember.outstandingFines}</div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <p>Select a member to see details.</p>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
