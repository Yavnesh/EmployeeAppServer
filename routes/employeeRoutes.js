const express = require('express');
const router = express.Router();
// const db = require('../db');
const Employee = require('../models/employee');

// Add new employee
router.post('/add', async (req, res) => {
    try {
      const newEmployee = await Employee.create(req.body);
      res.status(201).json({message: 'Employee added successfully'});
    } catch (error) {
      res.status(500).json({ message: 'Error adding employee', error: error.message });
    }
});

// Fetch all employee
router.get('/', async (req, res) => {
    try {
    const allEmployees = await Employee.find();
    res.status(200).json({ message: 'Employee fetched successfully', allEmployees: allEmployees });
    } catch (error) {
    res.status(500).json({ message: 'Error fetching employee data', error: error.message });
    }
});

// Update an employee by ID
router.put('/update/:id', async (req, res) => {
    try {
      const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.status(200).json(updatedEmployee);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});
  
// Delete an employee by ID
router.delete('/delete/:id', async (req, res) => {
try {
    const deletedEmployee = await Employee.findByIdAndRemove(req.params.id);
    if (!deletedEmployee) {
    return res.status(404).json({ message: 'Employee not found' });
    }
    res.status(200).json({ message: 'Employee deleted successfully' });
} catch (err) {
    res.status(500).json({ error: err.message });
}
});

module.exports = router;
