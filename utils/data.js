const usernames = [
    'devinshade',
    'yourmom',
    'scoobyman',
    'shaggydog',
    'spicygabagool',
    'beepbeepwhosurddy',
    'adaisdagoat',
    'hellograder',
];

const thoughtReactions = [
    '🤮',
    '🫡',
    '🤑',
    '😑',
    '😈',
    '💩',
    '🤡',
    '🔥',
];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random username
  const getRandomUsername = () =>
    `${getRandomArrItem(usernames)} ${getRandomArrItem(usernames)}`;
  
  // Function to generate random reactions that we can add to thought object.
  const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughtReactions),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomUsername, getRandomReactions };