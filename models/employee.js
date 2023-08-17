const mongoose = require('mongoose');

// Employee Schema
const employeeSchema = new mongoose.Schema({
  employee_name:{type: String, required: true },
  employee_designation: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date},
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);

// Export model
module.exports = Employee;