import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import AddProduct from "./Components/AddProduct";
import Products from "./Components/Products";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Products/>}></Route>
          <Route path="/add_product" element={<AddProduct/>}></Route>
          <Route path="/update_product" element={<h1>Update Product</h1>}></Route>
          <Route path="/delete_product" element={<h1>Delete Product</h1>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
