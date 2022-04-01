// SaiaN
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import { UserProvider } from "./components/UserContext/UserContect";
import Delate from "./components/Delate/Delate";

function App() {
  return (
    <BrowserRouter>
      <div>
        <UserProvider>
          <Routes>
            <Route path="/delate/:id" element={<Delate/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
