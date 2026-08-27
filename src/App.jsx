import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./component/Nav";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Joke from "./Pages/Joke";
import Weather from "./Pages/Weather";
import Country from "./Pages/Country ";

function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/User_generator" element={<User />} />
        <Route path="/Joke_generator" element={<Joke />} />
        <Route path="/Weather_search" element={<Weather />} />
        <Route path="/Country" element={<Country />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
