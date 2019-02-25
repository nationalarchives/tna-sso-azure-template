////////////// Express //////////////

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

const cors = require("cors");
const morgan = require("morgan");

const app = express();
const port = 5000;

// Default views folder
app.set("views", "./assets/views");

// Set the templating engine
app.set("view engine", "ejs");
app.use(expressLayouts);

// Use body parser
app.use(bodyParser.json());
app.use(morgan("combine"));
app.use(cors());

// Route our app
const router = require("./app/routes");
app.use("/", router);

// Set static files ( css & images etc )
app.use(express.static(__dirname + "/public"));

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log("HTML only server is running");
});
