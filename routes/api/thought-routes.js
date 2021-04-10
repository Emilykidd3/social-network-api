const router = require('express').Router();
const {
    createThought, 
    getAllThoughts,
    getOneThought,
    updateThought,
    deleteThought
} = require('../../controllers/tought-controller');

router
    .route('/')
    .post(createThought)
    .get(getAllThoughts)

router
    .route('/:id')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought)

module.exports = router;