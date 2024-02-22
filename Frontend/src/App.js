import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<h1>Product</h1>}></Route>
          <Route path="/add_product" element={<h1>Add Product</h1>}></Route>
          <Route path="/update_product" element={<h1>Update Product</h1>}></Route>
          <Route path="/delete_product" element={<h1>Delete Product</h1>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
