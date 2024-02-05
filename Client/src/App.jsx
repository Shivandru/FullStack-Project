import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import AllRoutes from "./Components/AllRoutes";
function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
