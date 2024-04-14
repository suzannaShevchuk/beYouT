import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import BrowseHome from "./components/Browse/BrowseHome";
import BusinessesDisplay from "./components/BusinessesDisplay/BusinessesDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Browse" element={<BrowseHome />}></Route>
          <Route
            path="/BusinessesDisplay"
            element={<BusinessesDisplay />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
