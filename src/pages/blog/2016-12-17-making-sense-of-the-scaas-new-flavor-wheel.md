---
templateKey: blog-post
title: How to setup a server with node.js and express.js
date: 2019-10-12T13:48:10.000Z
description: |
  This is how you can develop a very simple server with Node.js and Express.js.
featuredpost: false
featuredimage: /img/flavor_wheel.jpg
tags:
  - javascript
  - node
  - server
  - boilerplate
---
![flavor wheel](/img/flavor_wheel.jpg)

In this very simple tutorial I will show how simple is creating a server using Node.js
Node.js is a JavaScript runtime environment that allows to use JavaScript to write code that can be executed server side. So you can write all your frontend and backend code in JavaScript.

You can clone or download my Github project here, or you can follow this simple tutorial.

1) Check if node is installed on your computer; if not, install it.

2) In your terminal, select your folder project and run the command:
```javascript 
npm init
```
and follow the instructions to create the package.json file.

3) Run the following command to install some basic dependancies:
```javascript
npm install express dotenv
```
- Express is a lightweight and fast web framework for node.js.
- dotenv loads environment variables from a .env file into a process.env

4) Run also the following command to install nodemon:
```javascript
npm install -g nodemon
```
- Nodemon automatically restart the node application when file changes in the directory are detected.

5)    Create a file server.js in the root folder and write the following code:
```javascript
const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use('/', require('./routes/testAPI'));

app.listen(port, () => {
  console.log('Server is running on port: ${port}');
});
```

6) Create a file .env in the root folder. So far it remains empty, but inside this file you can save all your environment variables.

7) In the root folder create a new folder called routes; inside this folder, create a file called testAPI.js and write the following code:
```javascript
const express = require('express');
const router = express.Router();

//@route GET /
//@desc test route
//@access Public
router.get('/', (req, res) => res.send('test route'));

module.exports = router;
```
6) Now in your terminal run the following command:
```javascript
run nodemon server
```
and check if the server works. Open a browser and go to localhost:5000. If the server works fine, you should see the words “test route” on the screen.
