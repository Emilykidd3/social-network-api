const { Thought, User } = require('../models');
const { removeFriend } = require('./user-controller');

const thoughtController = {
    // get all thoughts
    // getAllThoughts({ params, body }, res) {

    // }

    // get one thought by id

    // post a new thought.. push created thougths _id to assocaited user's thoughts array frield
    createThought({ body }, res) {
        Thought.create(body)
            .then((dbThoughtData) => {
                return User.findOneAndUpdate(
                    { _id: body.userId},
                    { $push: { thoughts: dbThoughtData._id } },
                    { new: true }
                )
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json({ message: 'Thought created!'})
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    }

    // put / update thought by id

    // delete a thought by id
}

module.exports = thoughtController;