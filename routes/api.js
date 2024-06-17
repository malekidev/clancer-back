const express = require('express');
const Freelancer = require('../models/Freelancer');
const router = express.Router();


// مسیر برای دریافت همه کاربران
router.get('/freelancers', async (req, res) => {
  try {
    let filter = {};

    // Filter by skills
    if (req.query.skills) {
      // Convert skills query parameter to array
      const skills = Array.isArray(req.query.skills) ? req.query.skills : [req.query.skills];
      filter.skills = { $all: skills };
    }

    // Filter by gender
    if (req.query.gender) {
      filter.gender = req.query.gender === 'male'; // Assuming gender is stored as boolean (true for male, false for female)
    }

    // Filter by experience
    if (req.query.experience) {
      filter.experience = req.query.experience;
    }

    const freelancers = await Freelancer.find(filter);
    res.json(freelancers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// مسیر برای ایجاد کاربر جدید
router.post('/freelancers', async (req, res) => {
  const freelancer = new Freelancer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    age: req.body.age,
    gender: req.body.gender,
    skills: req.body.skills ,
    experience: req.body.experience
  });

  try {
    const newFreelancer = await freelancer.save();
    res.status(201).json(newFreelancer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
