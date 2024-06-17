const mongoose = require('mongoose');
const freelancerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: Boolean, default: true },
  skills: [String],
  experience: String
});

module.exports = mongoose.model('Freelancer', freelancerSchema);
