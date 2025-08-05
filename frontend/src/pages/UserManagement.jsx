import React from 'react';

const UserManagement = () => {
  const applyFilters = () => {
    alert('Filters applied! Results would be updated. (Backend integration required)');
  };

  const viewMember = (memberId) => {
    alert(`Opening member profile for ID: ${memberId} (Backend integration required)`);
  };

  const editMember = (memberId) => {
    alert(`Opening edit form for member ID: ${memberId} (Backend integration required)`);
  };

  const collectPayment = (memberId) => {
    alert(`Opening payment collection for member ID: ${memberId} (Backend integration required)`);
  };

  return (
    <div className="user-management">
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa; color: #333; line-height: 1.6; }
        .container { max-width: 1400px; margin: 0 auto; padding: 0 20px; }
        header { background: #fff; border-bottom: 2px solid #e9ecef; padding: 1rem 0; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); }
        .header-content { display: flex; justify-content: space-between; align-items: center; }
        .logo { font-size: 1.5rem; font-weight: bold; color: #333; }
        .back-link { color: #333; text-decoration: none; padding: 0.5rem 1rem; border: 1px solid #e9ecef; border-radius: 5px; transition: all 0.3s ease; }
        .back-link:hover { border-color: #333; }
        .main-content { padding: 2rem 0; }
        .page-header { background: #fff; padding: 2rem; border-radius: 10px; border: 1px solid #e9ecef; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: center; }
        .page-title-section h1 { font-size: 2rem; color: #333; margin-bottom: 0.5rem; }
        .page-title-section p { color: #666; font-size: 1.1rem; }
        .btn { padding: 0.75rem 1.5rem; background: #333; color: #fff; border: none; border-radius: 5px; font-size: 1rem; font-weight: 500; cursor: pointer; transition: background-color 0.3s ease; text-decoration: none; display: inline-block; }
        .btn:hover { background: #555; }
        .btn-secondary { background: transparent; color: #333; border: 2px solid #333; }
        .btn-secondary:hover { background: #333; color: #fff; }
        .summary-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
        .summary-card { background: #fff; padding: 1.5rem; border-radius: 8px; border: 1px solid #e9ecef; text-align: center; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); }
        .summary-number { font-size: 2rem; font-weight: bold; color: #333; margin-bottom: 0.5rem; }
        .summary-label { color: #666; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }
        .filters-section { background: #fff; padding: 1.5rem; border-radius: 10px; border: 1px solid #e9ecef; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); margin-bottom: 2rem; }
        .filters-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; align-items: end; }
        .filter-group { display: flex; flex-direction: column; }
        .filter-group label { margin-bottom: 0.5rem; font-weight: 500; color: #333; }
        .filter-group input, .filter-group select { padding: 0.6rem; border: 2px solid #e9ecef; border-radius: 5px; font-size: 1rem; transition: border-color 0.3s ease; }
        .filter-group input:focus, .filter-group select:focus { outline: none; border-color: #333; }
        .users-section { background: #fff; border-radius: 10px; border: 1px solid #e9ecef; box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
        .section-header { padding: 1.5rem; border-bottom: 1px solid #e9ecef; display: flex; justify-content: space-between; align-items: center; }
        .section-header h2 { color: #333; }
        .results-info { color: #666; font-size: 0.9rem; }
        .users-table { width: 100%; border-collapse: collapse; }
        .users-table th, .users-table td { padding: 1rem; text-align: left; border-bottom: 1px solid #e9ecef; }
        .users-table th { background: #f8f9fa; font-weight: 600; color: #333; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }
        .users-table tr:hover { background: #f8f9fa; }
        .users-table tr:last-child td { border-bottom: none; }
        .user-info { display: flex; flex-direction: column; }
        .user-name { font-weight: 500; color: #333; margin-bottom: 0.2rem; }
        .user-email { font-size: 0.9rem; color: #666; }
        .status-badge { padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.8rem; font-weight: 500; text-transform: uppercase; }
        .status-active { background: #d4edda; color: #155724; }
        .status-overdue { background: #f8d7da; color: #721c24; }
        .status-new { background: #cce5ff; color: #004085; }
        .payment-status { font-weight: 500; }
        .payment-current { color: #28a745; }
        .payment-due { color: #ffc107; }
        .payment-overdue { color: #dc3545; }
        .actions-cell { display: flex; gap: 0.5rem; }
        .btn-small { padding: 0.3rem 0.6rem; font-size: 0.8rem; border-radius: 3px; }
        .pagination { padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e9ecef; }
        .pagination-info { color: #666; font-size: 0.9rem; }
        .pagination-controls { display: flex; gap: 0.5rem; }
        .page-btn { padding: 0.4rem 0.8rem; border: 1px solid #e9ecef; background: #fff; color: #333; text-decoration: none; border-radius: 3px; font-size: 0.9rem; transition: all 0.3s ease; }
        .page-btn:hover { border-color: #333; background: #f8f9fa; }
        .page-btn.active { background: #333; color: #fff; border-color: #333; }
        @media (max-width: 768px) {
          .page-header { flex-direction: column; gap: 1rem; text-align: center; }
          .users-table { font-size: 0.9rem; }
          .users-table th, .users-table td { padding: 0.75rem 0.5rem; }
          .filters-grid { grid-template-columns: 1fr; }
          .actions-cell { flex-direction: column; }
        }
      `}</style>
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">Library Management System</div>
            <a href="/librarian-dashboard" className="back-link">← Back to Dashboard</a>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="page-header">
            <div className="page-title-section">
              <h1>User Management</h1>
              <p>Manage library members and their account status</p>
            </div>
            <a href="/add-member" className="btn">+ Add New Member</a>
          </div>

          <div className="summary-cards">
            {[
              { label: 'Total Members', value: 45 },
              { label: 'Active Members', value: 38 },
              { label: 'Payment Due', value: 5 },
              { label: 'New This Month', value: 2 }
            ].map(({ label, value }) => (
              <div className="summary-card" key={label}>
                <div className="summary-number">{value}</div>
                <div className="summary-label">{label}</div>
              </div>
            ))}
          </div>

          <div className="filters-section">
            <div className="filters-grid">
              <div className="filter-group">
                <label htmlFor="searchQuery">Search Members</label>
                <input type="text" id="searchQuery" placeholder="Name, email, or phone..." />
              </div>
              <div className="filter-group">
                <label htmlFor="statusFilter">Account Status</label>
                <select id="statusFilter">
                  <option value="all">All Members</option>
                  <option value="active">Active</option>
                  <option value="overdue">Payment Overdue</option>
                  <option value="new">New Members</option>
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="paymentFilter">Payment Status</label>
                <select id="paymentFilter">
                  <option value="all">All Status</option>
                  <option value="current">Current</option>
                  <option value="due">Due Soon</option>
                  <option value="overdue">Overdue</option>
                </select>
              </div>
              <div className="filter-group">
                <button className="btn" onClick={applyFilters}>Apply Filters</button>
              </div>
            </div>
          </div>

          <div className="users-section">
            <div className="section-header">
              <h2>Library Members</h2>
              <span className="results-info">Showing 45 total members</span>
            </div>

            <table className="users-table">
              <thead>
                <tr>
                  <th>Member ID</th>
                  <th>Member Info</th>
                  <th>Phone</th>
                  <th>Join Date</th>
                  <th>Payment Status</th>
                  <th>Books Issued</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 'LIB001234',
                    name: 'John Doe',
                    email: 'john.doe@email.com',
                    phone: '+91 9876543210',
                    join: 'Jan 15, 2023',
                    payment: 'Current (Aug 30)',
                    books: '3 books',
                    status: 'Active',
                    badge: 'status-active',
                    actions: ['view', 'edit'],
                    memberId: '1234'
                  },
                  // ... Add other member entries here
                ].map(member => (
                  <tr key={member.id}>
                    <td><strong>{member.id}</strong></td>
                    <td className="user-info">
                      <div className="user-name">{member.name}</div>
                      <div className="user-email">{member.email}</div>
                    </td>
                    <td>{member.phone}</td>
                    <td>{member.join}</td>
                    <td className="payment-status payment-current">{member.payment}</td>
                    <td>{member.books}</td>
                    <td><span className={`status-badge ${member.badge}`}>{member.status}</span></td>
                    <td className="actions-cell">
                      {member.actions.includes('view') && (
                        <button className="btn btn-secondary btn-small" onClick={() => viewMember(member.memberId)}>View</button>
                      )}
                      {member.actions.includes('edit') && (
                        <button className="btn btn-secondary btn-small" onClick={() => editMember(member.memberId)}>Edit</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <div className="pagination-info">Showing 1-6 of 45 members</div>
              <div className="pagination-controls">
                <a href="#" className="page-btn">Previous</a>
                <a href="#" className="page-btn active">1</a>
                <a href="#" className="page-btn">2</a>
                <a href="#" className="page-btn">3</a>
                <a href="#" className="page-btn">Next</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserManagement;
