const chalk = require('chalk');
const express = require("express");
const app = express();
const port = process.env.PORT || 3000; 
const bodyParser = require("body-parser");
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

require("./serverInit")(app);

require('../aws/playground')


const successMsg = chalk.black.bgGreen(`Server is running on port: ${port}`)

app.listen(port, () => console.log(successMsg));
