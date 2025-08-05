import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AddBookCopy() {
  const [copyQuantity, setCopyQuantity] = useState("single");
  const [rackLocation, setRackLocation] = useState("2");
  const [condition, setCondition] = useState("good");
  const [notes, setNotes] = useState("");
  const [copyCount, setCopyCount] = useState(2);
  const [startingNumber] = useState(6); // readonly fixed as per original
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Show or hide batch inputs based on copyQuantity
  const showBatchInputs = copyQuantity === "multiple";

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    // Basic validation
    if (!rackLocation || !condition) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    if (copyQuantity === "multiple") {
      if (!copyCount || copyCount < 2 || copyCount > 20) {
        setErrorMessage("Please enter a valid copy count (2-20).");
        return;
      }
    }

    // Prepare form data
    const formData = {
      rackLocation,
      condition,
      notes: notes.trim(),
      copyQuantity,
      copyCount,
      startingNumber,
    };

    console.log("Copy data to be submitted:", formData);

    const message =
      copyQuantity === "single"
        ? `1 copy successfully added to Rack ${rackLocation}!`
        : `${copyCount} copies successfully added to Rack ${rackLocation}!`;

    setSuccessMessage(message);

    setTimeout(() => {
      if (
        window.confirm(
          "Copy(ies) added successfully! Would you like to add more copies?"
        )
      ) {
        // Reset form fields for next entry
        setNotes("");
        setCopyCount(2);
        setSuccessMessage("");
      } else {
        window.location.href = "book-copies-management.html";
      }
    }, 1500);
  };

  // Just log copyCount changes (could implement more logic if needed)
  useEffect(() => {
    console.log("Copy count changed to:", copyCount);
  }, [copyCount]);

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
          max-width: 800px;
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
        .book-info {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #e9ecef;
          margin-bottom: 2rem;
        }
        .book-info h3 {
          color: #333;
          margin-bottom: 0.5rem;
        }
        .book-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }
        .detail-item {
          text-align: center;
        }
        .detail-value {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 0.2rem;
        }
        .detail-label {
          font-size: 0.8rem;
          color: #666;
          text-transform: uppercase;
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
        .multiple-copies {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #e9ecef;
          margin-top: 1rem;
        }
        .multiple-copies h3 {
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
        .batch-inputs {
          display: none;
        }
        .batch-inputs.show {
          display: block;
        }
        .error-message {
          background: #f8d7da;
          border: 1px solid #f5c6cb;
          color: #721c24;
          padding: 0.75rem;
          border-radius: 5px;
          margin-bottom: 1rem;
        }
        .success-message {
          background: #d4edda;
          border: 1px solid #c3e6cb;
          color: #155724;
          padding: 0.75rem;
          border-radius: 5px;
          margin-bottom: 1rem;
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
            {/* <a href="book-copies-management.html" className="back-link">
              ← Back to Copies
            </a> */}
            <Link to="/book-copies-management" className="back-link">← Back to Copies</Link>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h1>Add New Copy</h1>
              <p>Add physical copies to existing book inventory</p>
            </div>

            <div className="book-info">
              <h3>Clean Code: A Handbook of Agile Software Craftsmanship</h3>
              <p style={{ color: "#666", marginBottom: "1rem" }}>
                <em>by Robert C. Martin</em>
              </p>

              <div className="book-details">
                <div className="detail-item">
                  <div className="detail-value">5</div>
                  <div className="detail-label">Current Copies</div>
                </div>
                <div className="detail-item">
                  <div className="detail-value">3</div>
                  <div className="detail-label">Available</div>
                </div>
                <div className="detail-item">
                  <div className="detail-value">2</div>
                  <div className="detail-label">Issued</div>
                </div>
                <div className="detail-item">
                  <div className="detail-value">₹2,499</div>
                  <div className="detail-label">Book Price</div>
                </div>
              </div>
            </div>

            {errorMessage && (
              <div className="error-message" role="alert">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="success-message" role="alert">
                {successMessage}
              </div>
            )}

            <form id="addCopyForm" onSubmit={handleSubmit}>
              <div className="form-section">
                <h2>Copy Information</h2>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="rackLocation">
                      Rack Location <span className="required">*</span>
                    </label>
                    <select
                      id="rackLocation"
                      name="rackLocation"
                      value={rackLocation}
                      onChange={(e) => setRackLocation(e.target.value)}
                      required
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
                    <div className="help-text">
                      Physical location where the copy will be placed
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="condition">
                      Condition <span className="required">*</span>
                    </label>
                    <select
                      id="condition"
                      name="condition"
                      value={condition}
                      onChange={(e) => setCondition(e.target.value)}
                      required
                    >
                      <option value="">Select Condition</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                      <option value="poor">Poor</option>
                    </select>
                    <div className="help-text">Physical condition of the book copy</div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Notes (Optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Any special notes about this copy..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                  <div className="help-text">
                    Optional notes about the copy's condition, acquisition, etc.
                  </div>
                </div>
              </div>

              <div className="form-section">
                <h2>Quantity Options</h2>

                <div className="multiple-copies">
                  <h3>How many copies would you like to add?</h3>

                  <div className="copy-options">
                    <div className="radio-group">
                      <input
                        type="radio"
                        id="singleCopy"
                        name="copyQuantity"
                        value="single"
                        checked={copyQuantity === "single"}
                        onChange={() => setCopyQuantity("single")}
                      />
                      <label htmlFor="singleCopy">Single copy</label>
                    </div>
                    <div className="radio-group">
                      <input
                        type="radio"
                        id="multipleCopies"
                        name="copyQuantity"
                        value="multiple"
                        checked={copyQuantity === "multiple"}
                        onChange={() => setCopyQuantity("multiple")}
                      />
                      <label htmlFor="multipleCopies">Multiple copies</label>
                    </div>
                  </div>

                  <div className={`batch-inputs ${showBatchInputs ? "show" : ""}`}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="copyCount">Number of Copies</label>
                        <input
                          type="number"
                          id="copyCount"
                          name="copyCount"
                          min={2}
                          max={20}
                          value={copyCount}
                          onChange={(e) => setCopyCount(Number(e.target.value))}
                        />
                        <div className="help-text">How many copies to add (2-20)</div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="startingNumber">Starting Copy Number</label>
                        <input
                          type="number"
                          id="startingNumber"
                          name="startingNumber"
                          min={1}
                          value={startingNumber}
                          readOnly
                        />
                        <div className="help-text">Next available copy number</div>
                      </div>
                    </div>
                    <p style={{ color: "#666", fontSize: "0.9rem" }}>
                      <strong>Note:</strong> All copies will be added with the same rack
                      location and condition settings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn">
                  Add Copy to Inventory
                </button>
                {/* <a href="book-copies-management.html" className="btn btn-secondary">
                  Cancel
                </a> */}
                <Link to="/book-copies-management" className="btn btn-secondary">Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
