const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomUsername, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    // delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({  name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }

    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('students');
    }

    // create empty array to hold users
    const users = [];

    // loop 20 times - add useres to the user array
    for (let i = 0; i < 20; ++i) {
        // get some random reaction objects using a helper function that we imported from ./data
        const reactions = getRandomReactions(20);

        const username = getRandomUsername();

        users.push({
            username,
            reactions,
        });
    }

    const userData = await User.insertMany(users);

    await Thought.insertOne({
        thoughtText: "Wow I'm bad at coding.",
        users: [...userData.map(({ _id }) => _id )],
    });
    
    console.table(users);
    console.info('Seeding complete');
    process.exit(0);
})