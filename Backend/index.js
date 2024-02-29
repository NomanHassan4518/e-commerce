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

app.get("/products", async (req, resp) => {
  let products = await Product.find(req.body);
  resp.send(products);
});

app.delete("/products/:id", async (req, resp) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
});

app.get("/product/:id", async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send("No Record Found");
  }
});

app.put("/product/:id", async (req, res) => {
  let result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(result);
});

app.get("/" , (req,res)=>{
  res.send("api is working")
})

app.listen(5000);
