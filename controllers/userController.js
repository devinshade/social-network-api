const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

// aggregate function to get the number of overall users
const headCount = async () => {
    const numberOfUsers = await User.aggregate()
        .count('userCount');
    return numberOfUsers;
}

module.exports = {
    // get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();

            const userObj = {
                users,
                headCount: await headCount(),
            };

            res.json(userObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // get single user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');

        if (!user) {
            return res.status(404).json({ message: 'No user with that ID' })
        }
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // update user by id
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                res.status(404).json({ message: 'No user with this Id idiot' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete a user and remove thoughts associated
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndRemove({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No such user exists' });
            }

            const thought = await Thought.findOneAndUpdate(
                { users: req.params.userId },
                { $pull: { users: req.params.userId } },
                { new: true }
            );

            if (!thought) {
                return res.status(404).json({
                    message: 'User deleted, but no thoughts found',
                });
            }

            res.json({ message: 'User successfully deleted' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
     // add friend
    async addFriend(req, res) {
        console.log('You are adding a friend');
        console.log(req.body);

        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { friends: req.body } },
                { runValidators: true, new: true },
            );

            if (!user) {
                return res
                    .status(404)
                    .json({ message: 'No friend found with that Id idiot' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // delete friend
    async removeFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: { friendId: req.params.friendId } } },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res
                .status(404)
                .json({ message: 'No friend found with that Id idiot' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};