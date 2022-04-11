import React from "react";
import "./App.css";
import { AuthContainer } from "./components/authContainer/AuthContainer";
import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from "./pages/HomePage";
import { getApiKey } from "./services/api.service";
import { setAuthTokens } from "./utils/token";

function App() {
  return (
    <div className="App">
      <AuthContainer>
        <Navbar fullNavbar />
        <HomePage />
      </AuthContainer>
    </div>
  );
}

export default App;
