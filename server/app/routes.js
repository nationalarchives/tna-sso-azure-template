// require express
const express = require("express");
const ejs = require("ejs-html");

// create our router object
const router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get("/", function(req, res) {
  // On the server

  let html = ejs.render(
    '<input type="text" disabled="<%=disabled%>" value="<%=value%>" />',
    {
      disabled: false,
      value: "hi you"
    },
    {
      vars: ["disabled", "value"]
    }
  );
  // eslint-disable-next-line no-console
  console.log(html);
  res.render("pages/home");
});
