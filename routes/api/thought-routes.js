const router = require('express').Router();
const {
    createThought
} = require('../../controllers/tought-controller');

router
    .route('/')
    .post(createThought);

module.exports = router;