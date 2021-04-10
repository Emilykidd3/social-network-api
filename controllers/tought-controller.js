const { Thought, User } = require('../models');

const thoughtController = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
            .sort({ createdAt: -1 })
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // get one thought by id
    getOneThought({ params }, res) {
        Thought.findOne({ _id: params.id })
            .select('-__v')
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

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
    },

    // put / update thought by id
    updateThought( { params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json({ message: 'Thought updated!'})
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    },

    // delete a thought by id
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json({ message: 'Thought deleted!'})
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    }
}

module.exports = thoughtController;