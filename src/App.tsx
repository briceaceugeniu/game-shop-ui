import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Main from "./components/main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>Nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
