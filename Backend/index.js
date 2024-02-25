const express = require("express");
const app = express();
let cors = require("cors");

require("./db/Config");
const User = require("./db/user");
const Product = require("./db/product");
app.use(express.json());
app.use(cors());

app.post("/signup", async (req, resp) => {
  let user = User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
});

app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    const user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send("User not found");
    }
  } else {
    resp.send("User not found");
  }
});

app.post("/addproduct", async (req, resp) => {
  let product = Product(req.body);
  let result = await product.save();
  resp.send(result);
});

app.get("/products",async (req,resp)=>{
  let products = await Product.find(req.body);
  resp.send(products)
})

app.listen(5000);
