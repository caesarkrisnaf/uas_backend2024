// import EmployeeController
const EmployeeController = require("../controllers/EmployeeController");
// import express
const express = require("express");
const Employee = require("../models/Employee");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello HRD API Express");
});

// Membuat routing employee
router.get("/employees", EmployeeController.index);
router.post("/employees", EmployeeController.store);
router.delete("/employees/:id", EmployeeController.destroy);
router.get("/employees/:id", EmployeeController.show);
router.put("/employees/:id", EmployeeController.update);
router.get("/employees/status/active", EmployeeController.active);
router.get("/employees/status/inactive", EmployeeController.inactive);
router.get("/employees/status/terminated",EmployeeController.terminated);
router.get("/employees/search/:name",EmployeeController.search);
// export router
module.exports = router;
