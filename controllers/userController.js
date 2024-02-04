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
    
}