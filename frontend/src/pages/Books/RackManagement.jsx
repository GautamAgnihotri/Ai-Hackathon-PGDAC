import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/RackManagement.css";

export default function RackManagement() {
  const [overview] = useState([
    { number: 8, label: "Total Racks" },
    { number: 456, label: "Total Copies" },
    { number: 158, label: "Available" },
    { number: 89, label: "Currently Issued" },
    { number: "75%", label: "Avg Utilization" }
  ]);

  const [racks] = useState([
    {
      id: 1,
      title: "Rack 1",
      capacity: 80,
      stats: { total: 65, available: 42, issued: 23 },
      utilization: 81,
      utilizationLevel: "high",
      subjects: ["Programming (25)", "Science (20)", "Mathematics (15)", "Other (5)"]
    },
    {
      id: 2,
      title: "Rack 2",
      capacity: 80,
      stats: { total: 58, available: 35, issued: 23 },
      utilization: 72,
      utilizationLevel: "medium",
      subjects: ["Programming (30)", "Business (15)", "Arts (13)"]
    }
    // Add more racks as needed
  ]);

  const viewRackDetails = (id) => {
    console.log(`View details for rack: ${id}`);
  };

  const reorganizeRack = (id) => {
    console.log(`Reorganize rack: ${id}`);
  };

  const addBooksToRack = (id) => {
    console.log(`Add books to rack: ${id}`);
  };

  const bulkRelocate = () => {
    console.log("Bulk relocate tool");
  };

  const optimizeRacks = () => {
    console.log("Optimize racks");
  };

  const generateLabels = () => {
    console.log("Generate labels");
  };

  const auditInventory = () => {
    console.log("Audit inventory");
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
            <h1>Rack Management</h1>
            <p>Organize and manage book placement across library racks</p>
          </div>

          <div className="rack-overview">
            {overview.map((item, idx) => (
              <div key={idx} className="overview-card">
                <div className="overview-number">{item.number}</div>
                <div className="overview-label">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="tools-section">
            <div className="tools-header">
              <h2>Rack Management Tools</h2>
            </div>
            <div className="tools-grid">
              <button className="tool-card" onClick={bulkRelocate}>
                <h3>Bulk Relocate</h3>
                <p>Move multiple copies between racks</p>
              </button>
              <button className="tool-card" onClick={optimizeRacks}>
                <h3>Optimize Layout</h3>
                <p>Auto-organize by subject or frequency</p>
              </button>
              <button className="tool-card" onClick={generateLabels}>
                <h3>Generate Labels</h3>
                <p>Print rack and shelf labels</p>
              </button>
              <button className="tool-card" onClick={auditInventory}>
                <h3>Inventory Audit</h3>
                <p>Verify physical vs system records</p>
              </button>
            </div>
          </div>

          <div className="racks-grid">
            {racks.map((rack) => (
              <div key={rack.id} className="rack-card">
                <div className="rack-header">
                  <div className="rack-title">{rack.title}</div>
                  <div className="rack-capacity">Capacity: {rack.capacity} books</div>
                </div>
                <div className="rack-body">
                  <div className="rack-stats">
                    <div className="stat-item">
                      <div className="stat-number total">{rack.stats.total}</div>
                      <div className="stat-label">Total Books</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number available">{rack.stats.available}</div>
                      <div className="stat-label">Available</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number issued">{rack.stats.issued}</div>
                      <div className="stat-label">Issued</div>
                    </div>
                  </div>

                  <div className="utilization-bar">
                    <div
                      className={`utilization-fill util-${rack.utilizationLevel}`}
                      style={{ width: `${rack.utilization}%` }}
                    ></div>
                  </div>
                  <div className="utilization-text">{rack.utilization}% Utilized</div>

                  <div className="rack-subjects">
                    <h4>Primary Subjects:</h4>
                    <div className="subject-tags">
                      {rack.subjects.map((subject, idx) => (
                        <span key={idx} className="subject-tag">{subject}</span>
                      ))}
                    </div>
                  </div>

                  <div className="rack-actions">
                    <button className="btn" onClick={() => viewRackDetails(rack.id)}>View Details</button>
                    <button className="btn" onClick={() => reorganizeRack(rack.id)}>Reorganize</button>
                    <button className="btn btn-primary" onClick={() => addBooksToRack(rack.id)}>Add Books</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
