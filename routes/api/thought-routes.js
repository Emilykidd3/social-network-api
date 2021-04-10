const router = require('express').Router();
const {
    createThought, 
    getAllThoughts,
    getOneThought,
    updateThought,
    deleteThought,
    createReaction,
    removeReaction
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


router
    .route('/:id/reactions')
    .post(createReaction)

router
    .route('/:id/reactions/:reactionid')
    .delete(removeReaction)

module.exports = router;