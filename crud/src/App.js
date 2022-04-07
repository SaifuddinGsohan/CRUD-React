// SaiaN
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeCrud from "./components/CRUD/Home/Home";
import { UserProvider } from "./components/CRUD/UserContext/UserContect";
import Delete from "./components/CRUD/Delete/Delete";
import Read from "./components/CRUD/Read/Read";
import Create from "./components/CRUD/Create/Create";
import Edit from "./components/CRUD/Edit/Edit";
// admin
import Topber from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


function App() {
  return (
    <BrowserRouter>
      <div>
        <UserProvider>
            <Topber />
            <div className="container">
              <Sidebar />
          <Routes>
              {
                //Admin //
              }
              <Route path="/admin" element={<Home />} />
              <Route path="/users " element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />
              {
                //CRUD
              }
              <Route path="/delete/:id" element={<Delete />} />
              <Route path="/read/:id" element={<Read />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/create" element={<Create />} />
              <Route path="/" element={<HomeCrud />} />
          </Routes>
            </div>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
