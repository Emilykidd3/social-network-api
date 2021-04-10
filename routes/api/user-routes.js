const router = require('express').Router();

const {
    getAllUsers
    
} = require('../../controllers/user-controller');

// get all
router.route('/').get(getAllUsers);

module.exports = router;