# Social Network API
  ## Description

  Welcome to the Social Media API! This API has been developed to power your social network's backend infrastructure using a NoSQL database, specifically MongoDB. It aims to provide robust support for handling large amounts of unstructured data, allowing your website to scale and perform efficiently.
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  node, express.js, mongoDB
  
  ## Usage
  
  ## API Routes
    ## Users

    GET /api/users

    Retrieve information about all users in the database.

    POST /api/users

    Create a new user in the database.

    PUT /api/users/:userId

    Update information for a specific user.

    DELETE /api/users/:userId

    Delete a user from the database.

    ## Thoughts

    GET /api/thoughts

    Retrieve information about all thoughts in the database.

    POST /api/thoughts

    Create a new thought in the database.

    PUT /api/thoughts/:thoughtId

    Update information for a specific thought.

    DELETE /api/thoughts/:thoughtId

    Delete a thought from the database.

    ## Reactions
    
    POST /api/reactions
    
    Create a new reaction to a thought.

    DELETE /api/reactions/:reactionId

    Delete a reaction from the database.

    ## Friends

    POST /api/friends/:userId

    Add a user to the friend list of another user.

    DELETE /api/friends/:userId

    Remove a user from the friend list of another user.
  
  ## License
  
  None
  
  ## Contributing
  
  
  
  ## Tests
  
  Use the provided API routes to test functionality:

   * GET routes for users and thoughts
   * POST, PUT, and DELETE routes for users and thoughts
   * POST and DELETE routes for reactions
   * POST and DELETE routes for friends
  
  ## Questions
  
  For any questions, please contact me:
  
  GitHub: [devinshade](https://github.com/devinshade)
  
  Email: devindanielle93@gmail.com