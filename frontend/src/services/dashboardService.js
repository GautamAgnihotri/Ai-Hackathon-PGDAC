// services/dashboardService.js
export const getDashboardStats = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/dashboard/stats');
    return {
      totalBooks: response.data.totalBooks || 0,
      issuedBooks: response.data.issuedBooks || 0,
      dueThisWeek: response.data.dueThisWeek || 0,
      availableCopies: response.data.availableCopies || 0,
      overdueBooks: response.data.overdueBooks || 0,
      totalMembers: response.data.totalMembers || 0,  // Changed from activeMembers
      todaysCollections: response.data.todaysCollections || 0
    };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    throw error;
  }
};