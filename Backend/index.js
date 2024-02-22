const express = require("express");
const app = express();

require("./db/Config");
const User = require("./db/user");
app.use(express.json());

app.post("/signup", async (req, resp) => {
  let user = User(req.body);
  let result = await user.save();
  result=result.toObject();
  delete result.password
  resp.send(result);
});



app.listen(5000);
