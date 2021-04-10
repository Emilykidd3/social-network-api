const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser
} = require('../../controllers/user-controller');

// get all and post /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// get user by id /api/users/:id
router
    .route('/:id')
    .get(getUserById)

module.exports = router;