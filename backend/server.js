const express = require('express');
const cors= require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(cors());

// Import routers
const authRoutes = require("./routes/authRoutes");
// const userRoutes = require('./routes/userRoutes');

const bookRoutes = require('./routes/bookRoutes');
const copyRoutes = require('./routes/copyRoutes');
// const issueRoutes = require('./routes/issueRoutes');
// const fineRoutes = require('./routes/fineRoutes');
// const paymentRoutes = require('./routes/paymentRoutes');
const memberRoutes = require('./routes/memberRoutes');
const dashboardStats = require('./DashBoard_stats/dashboard_stats');

// Use routers with API prefix

app.use("/api/auth", authRoutes);

app.use('/api/books', bookRoutes);
app.use('/api/copies', copyRoutes);

app.use( '/api/addMembers', memberRoutes);
app.use('/dashboard/stats', dashboardStats);

// app.use('/api/issues', issueRoutes);
// app.use('/api/fines', fineRoutes);
// app.use('/api/payments', paymentRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
