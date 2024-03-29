import React from "react";
import "./App.css";
import { AuthContainer } from "./components/authContainer/AuthContainer";
import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthContainer>
          <Navbar fullNavbar />
          <Routes>
            {routes.map((route) => (
              <Route
                path={route.path}
                key={route.path}
                element={route.component()}
              />
            ))}
          </Routes>
        </AuthContainer>
      </Router>
    </div>
  );
}

export default App;
