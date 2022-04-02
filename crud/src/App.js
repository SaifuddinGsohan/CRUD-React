// SaiaN
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import { UserProvider } from "./components/UserContext/UserContect";
import Delete from "./components/Delete/Delete";
import Read from "./components/Read/Read";
import Create from "./components/Create/Create";
import Edit from "./components/Edit/Edit";

function App() {
  return (
    <BrowserRouter>
      <div>
        <UserProvider>
          <Routes>
            <Route path="/delete/:id" element={<Delete/>} />
            <Route path="/read/:id" element={<Read/>} />
            <Route path="/edit/:id" element={<Edit/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
