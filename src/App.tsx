import React from "react";
import "./App.css";
import { AuthContainer } from "./components/authContainer/AuthContainer";
import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AuthContainer>
        <HomePage />
      </AuthContainer>
    </div>
  );
}

export default App;
