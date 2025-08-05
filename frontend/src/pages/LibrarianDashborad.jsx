import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/dashboard.css";
import { toast } from "react-toastify";
import { getDashboardStats } from "../services/dashboardService.js";

export default function LibrarianDashboard() {
  const navigate = useNavigate();
  const [librarian, setLibrarian] = useState({ name: "Sarah Johnson", role: "Librarian" });
  const [alerts] = useState([
    { type: "danger", icon: "🚨", title: "Urgent", message: "3 books are overdue and need immediate attention for fine collection." },
    { type: "warning", icon: "⚠️", title: "Notice", message: "5 members have unpaid monthly fees due today." }
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats] = useState([
    { value: 247, label: "Total Books in Library", trend: "+12 added this month" },
    { value: 89, label: "Currently Issued", trend: "15 due this week" },
    { value: 158, label: "Available Copies", trend: "Ready for issue" },
    { value: 3, label: "Overdue Books", trend: "Need immediate action", urgent: true },
    { value: 45, label: "Active Members", trend: "2 new this week" },
    { value: "₹2,850", label: "Today's Collections", trend: "Fees + Fines" }
  ]);
  const [recentActivity] = useState([
    { time: "10:45 AM", text: "Collected ₹500 monthly fee from John Doe (ID: 1234)" },
    { time: "10:30 AM", text: "Issued \"Clean Code\" to Member #1087" },
    { time: "10:15 AM", text: "Processed return: \"JavaScript: The Good Parts\" with ₹10 fine" },
    { time: "09:45 AM", text: "Added new book: \"Design Patterns\" (5 copies)" },
    { time: "09:30 AM", text: "Registered new member: Alice Smith" }
  ]);
  const [pendingTasks] = useState([
    { title: "Collect overdue fines", meta: "3 books, ₹85 total", priority: "High" },
    { title: "Follow up on unpaid fees", meta: "5 members", priority: "Medium" },
    { title: "Organize Rack 3", meta: "Programming section", priority: "Low" },
    { title: "Update book catalog", meta: "12 new additions", priority: "Low" }
  ]);
  const [quickStats] = useState({
    "Books Due Today": 7,
    "Payment Due": "5 members",
    "Total Fines": "₹85",
    "Available Books": 158
  });

  useEffect(() => {
    const newName = sessionStorage.getItem("name")
    setLibrarian({
      ...librarian,
      name: newName
    })
  }, [])

  const signoutHandler = () => {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("token");

    toast.info("Logged out");
    navigate("/login");
  }
//     // Add useEffect to fetch data when component mounts
//   useEffect(() => {
//     const fetchDashboardData = async () => {
//       try {
//         const data = await getDashboardStats();
//         setStats([
//           { value: data.totalBooks, label: "Total Books in Library", trend: `+${data.monthlyAdditions} added this month` },
//           { value: data.issuedBooks, label: "Currently Issued", trend: `${data.dueThisWeek} due this week` },
//           { value: data.availableCopies, label: "Available Copies", trend: "Ready for issue" },
//           { value: data.overdueBooks, label: "Overdue Books", trend: "Need immediate action", urgent: true },
//           { value: data.activeMembers, label: "Active Members", trend: `${data.newMembersThisWeek} new this week` },
//           { value: `₹${data.todaysCollections}`, label: "Today's Collections", trend: "Fees + Fines" }
//         ]);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDashboardData();
//   }, []);

//   if (loading) return <div className="loading">Loading dashboard...</div>;
//   if (error) return <div className="error">Error loading dashboard: {error}</div>;
//   if (!stats) return <div className="error">No data available</div>;

  return (
    <>
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">Library Management System</div>
            <div className="user-info">
              <span className="user-role">{librarian.role}</span>
              <span>{librarian.name}</span>
              <Link to="/profile" className="btn">Profile</Link>
              <button onClick={signoutHandler} className="btn">Sign Out</button>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="welcome-section">
            <h1>Welcome Back, {librarian.name}!</h1>
            <p>Here's your library overview for today</p>
          </div>

          <div className="alerts-section">
            {alerts.map((alert, idx) => (
              <div key={idx} className={`alert alert-${alert.type}`}>
                <div className="alert-icon">{alert.icon}</div>
                <div>
                  <strong>{alert.title}:</strong> {alert.message}
                </div>
              </div>
            ))}
          </div>

          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <div className={`stat-number ${stat.urgent ? 'urgent' : ''}`}>{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className={`stat-trend ${stat.urgent ? 'urgent' : ''}`}>{stat.trend}</div>
              </div>
            ))}
          </div>

          <div className="dashboard-grid">
            <div className="main-panel">
              <div className="panel">
                <h2>Quick Actions</h2>
                <div className="quick-actions">
                  <Link to="/issueBooks" className="action-card"><h3>Issue Book</h3><p>Issue book to member</p></Link>
                  <Link to="/returnBook" className="action-card"><h3>Return Book</h3><p>Process book return</p></Link>
                  <Link to="/collect-payment" className="action-card"><h3>Collect Payment</h3><p>Monthly fees & fines</p></Link>
                  <Link to="/add-book" className="action-card"><h3>Add New Book</h3><p>Register new title</p></Link>
                  <Link to="/addMember" className="action-card"><h3>Add Member</h3><p>Register new user</p></Link>
                  <Link to="/overdue-books" className="action-card"><h3>Overdue Books</h3><p>View late returns</p></Link>
                </div>
              </div>

              <div className="panel">
                <h2>Recent Activity</h2>
                <ul className="recent-activity">
                  {recentActivity.map((act, idx) => (
                    <li key={idx} className="activity-item">
                      <div className="activity-time">{act.time}</div>
                      <div className="activity-text">{act.text}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="sidebar-panel">
              <div className="panel">
                <h2>Pending Tasks</h2>
                <ul className="pending-tasks">
                  {pendingTasks.map((task, idx) => (
                    <li key={idx} className="task-item">
                      <div className="task-info">
                        <div className="task-title">{task.title}</div>
                        <div className="task-meta">{task.meta}</div>
                      </div>
                      <div className={`task-priority priority-${task.priority.toLowerCase()}`}>{task.priority}</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="panel">
                <h2>Quick Stats</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {Object.entries(quickStats).map(([label, value], idx) => (
                    <div key={idx} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: idx < Object.keys(quickStats).length - 1 ? "1px solid #e9ecef" : "none" }}>
                      <span>{label}:</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
