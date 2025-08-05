import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/PaymentReports.css";

export default function PaymentReports() {
  const [filters, setFilters] = useState({
    dateFrom: "2025-08-01",
    dateTo: "2025-08-03",   
    paymentType: "all",
    reportType: "daily"
  });

  const [revenueOverview] = useState([
    { amount: "₹18,450", label: "Total Revenue (This Month)", change: "+15.2% from last month", positive: true },
    { amount: "₹15,500", label: "Membership Fees", change: "+8.5% from last month", positive: true },
    { amount: "₹2,950", label: "Fine Collections", change: "+45.3% from last month", positive: true },
    { amount: "31", label: "Fee Paying Members", change: "+2 from last month", positive: true }
  ]);

  const [dailyCollections] = useState([
    { date: "Aug 3, 2025", fee: "₹2,500", fine: "₹185", total: "₹2,685", transactions: 8 },
    { date: "Aug 2, 2025", fee: "₹3,000", fine: "₹95", total: "₹3,095", transactions: 12 },
    { date: "Aug 1, 2025", fee: "₹2,000", fine: "₹140", total: "₹2,140", transactions: 9 },
    { date: "Jul 31, 2025", fee: "₹1,500", fine: "₹75", total: "₹1,575", transactions: 6 },
    { date: "Jul 30, 2025", fee: "₹3,500", fine: "₹250", total: "₹3,750", transactions: 15 }
  ]);

  const [quickStats] = useState([
    { label: "Average Daily Collection:", value: "₹2,649" },
    { label: "Peak Collection Day:", value: "Jul 30 (₹3,750)" },
    { label: "Average Transaction Value:", value: "₹265" },
    { label: "Outstanding Dues:", value: "₹1,240" },
    { label: "Collection Efficiency:", value: "91.4%" }
  ]);

  const [paymentBreakdown] = useState([
    { label: "Membership Fees", value: "₹12,500", percent: 84.1, type: "fee" },
    { label: "Fines", value: "₹745", percent: 15.9, type: "fine" }
  ]);

  const [transactions] = useState([
    { member: "Robert Johnson (LIB001025)", details: "Monthly Fee + Fine (Receipt: RCP202508030001)", amount: "₹640", type: "total", time: "10:45 AM" },
    { member: "Maria Garcia (LIB001087)", details: "Fine Payment (Receipt: RCP202508030002)", amount: "₹80", type: "fine", time: "10:20 AM" },
    { member: "Sarah Brown (LIB001298)", details: "Monthly Fee (Receipt: RCP202508030003)", amount: "₹500", type: "fee", time: "09:55 AM" },
    { member: "David Wilson (LIB001156)", details: "Monthly Fee (Receipt: RCP202508020015)", amount: "₹500", type: "fee", time: "Yesterday 4:30 PM" },
    { member: "Emma Wilson (LIB001456)", details: "Fine Payment (Receipt: RCP202508020014)", amount: "₹45", type: "fine", time: "Yesterday 3:15 PM" }
  ]);

  const generateReport = () => {
    console.log("Generating report:", filters);
  };

  const exportToPDF = () => {
    console.log("Export to PDF");
  };

  const exportToExcel = () => {
    console.log("Export to Excel");
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
            <div className="page-title-section">
              <h1>Payment Reports</h1>
              <p>Comprehensive revenue and collection analytics for library operations</p>
            </div>
          </div>

          <div className="revenue-overview">
            {revenueOverview.map((item, idx) => (
              <div key={idx} className="revenue-card">
                <div className="revenue-amount">{item.amount}</div>
                <div className="revenue-label">{item.label}</div>
                <div className={`revenue-change ${item.positive ? 'positive' : 'negative'}`}>{item.change}</div>
              </div>
            ))}
          </div>

          <div className="filters-section">
            <div className="filters-grid">
              <div className="filter-group">
                <label>From Date</label>
                <input type="date" value={filters.dateFrom} onChange={e => setFilters({ ...filters, dateFrom: e.target.value })} />
              </div>
              <div className="filter-group">
                <label>To Date</label>
                <input type="date" value={filters.dateTo} onChange={e => setFilters({ ...filters, dateTo: e.target.value })} />
              </div>
              <div className="filter-group">
                <label>Payment Type</label>
                <select value={filters.paymentType} onChange={e => setFilters({ ...filters, paymentType: e.target.value })}>
                  <option value="all">All Payments</option>
                  <option value="fee">Membership Fees</option>
                  <option value="fine">Fines Only</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Report Type</label>
                <select value={filters.reportType} onChange={e => setFilters({ ...filters, reportType: e.target.value })}>
                  <option value="daily">Daily Summary</option>
                  <option value="weekly">Weekly Summary</option>
                  <option value="monthly">Monthly Summary</option>
                </select>
              </div>
              <div className="filter-group">
                <button className="btn" onClick={generateReport}>Generate Report</button>
              </div>
            </div>
          </div>

          <div className="reports-grid">
            <div className="daily-collections">
              <div className="section-header">
                <h2>Daily Collections</h2>
                <div className="export-buttons">
                  <button className="btn btn-secondary btn-small" onClick={exportToPDF}>Export PDF</button>
                  <button className="btn btn-secondary btn-small" onClick={exportToExcel}>Export Excel</button>
                </div>
              </div>
              <table className="collections-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Membership Fees</th>
                    <th>Fine Collections</th>
                    <th>Total Collections</th>
                    <th>Transactions</th>
                  </tr>
                </thead>
                <tbody>
                  {dailyCollections.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.date}</td>
                      <td className="amount-cell fee-amount">{row.fee}</td>
                      <td className="amount-cell fine-amount">{row.fine}</td>
                      <td className="amount-cell total-amount">{row.total}</td>
                      <td>{row.transactions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="summary-panel">
              <div className="quick-stats">
                <h3>Quick Statistics</h3>
                {quickStats.map((stat, idx) => (
                  <div key={idx} className="stat-item">
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-value">{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="payment-breakdown">
                <h3>Payment Type Breakdown</h3>
                <div className="breakdown-chart">
                  {paymentBreakdown.map((item, idx) => (
                    <div key={idx} className="breakdown-item">
                      <div className="breakdown-bar">
                        <div className={`breakdown-fill ${item.type}-fill`} style={{ width: `${item.percent}%` }}>
                          <div className="breakdown-text">{item.label}</div>
                        </div>
                      </div>
                      <div className="breakdown-value">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="recent-transactions">
            <div className="section-header">
              <h2>Recent Transactions</h2>
              <span style={{ color: "#666", fontSize: "0.9rem" }}>Last 10 payments</span>
            </div>
            <div className="transaction-list">
              {transactions.map((tx, idx) => (
                <div key={idx} className="transaction-item">
                  <div className="transaction-info">
                    <div className="transaction-member">{tx.member}</div>
                    <div className="transaction-details">{tx.details}</div>
                  </div>
                  <div className="transaction-amount">
                    <div className={`amount-value ${tx.type}-amount`}>{tx.amount}</div>
                    <div className="amount-time">{tx.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
