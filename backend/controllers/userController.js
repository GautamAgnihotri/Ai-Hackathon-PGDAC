const User = require('../models/User');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body); 
    res.status(201).json({ message: 'User created', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get user info by ID
exports.getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update user info
exports.updateUser = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, { where: { userId: req.params.id } });
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      return res.json({ message: 'User updated', updatedUser });
    }
    res.status(404).json({ error: 'User not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { userId: req.params.id } });
    if (deleted) return res.json({ message: 'User deleted' });
    res.status(404).json({ error: 'User not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Validate payment status
exports.validatePaymentStatus = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ paymentStatus: user.paymentStatus });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update payment status
exports.updatePaymentStatus = async (req, res) => {
  try {
    const [updated] = await User.update(
      { paymentStatus: req.body.paymentStatus },
      { where: { userId: req.params.id } }
    );
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      return res.json({ message: 'Payment status updated', updatedUser });
    }
    res.status(404).json({ error: 'User not found' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
