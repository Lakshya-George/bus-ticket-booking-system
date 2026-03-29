import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Searchbus from "../pages/Searchbus";
import Header from "../pages/Header";
import Login from "../pages/Login";
import { useState } from "react";
import Help from "../pages/Help";

const Approuter = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showHelp, setShowHelp] =useState(false);

  return (
    <BrowserRouter>
      <Header onLoginClick={() => setShowLogin(true)} 
      onHelpClick = {() => setShowHelp(true)}
        />

      <div style={{ paddingTop: "80px" }}></div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Searchbus" element={<Searchbus />} />
      </Routes>

      <Login
        show={showLogin}
        onClose={() => setShowLogin(false)}
      />
      <Help
      show={showHelp}
      onClose={() => setShowHelp(false)}
      />
    </BrowserRouter>
  );
};

export default Approuter;
