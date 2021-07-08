var express = require('express');
var router = express.Router();
const employee = require('../controllers/employee');
const user = require('../controllers/reference')

/* GET users listing. */

router.post('/reguser', employee.registeremployee);
router.get('/employeedetails', employee.getemployeedetails);

router.post('/register', user.registeruser);
router.get('/getuser', user.getuserdetails);

module.exports = router;

