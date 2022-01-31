import React from "react";

// import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./containers";
// import { CTA, Brand, Navbar } from "./components";

import { Footer, Header } from "./containers";
import { Navbar, Partners, About, Counter, Why, Cambridge, CandidateRegistration } from "./components";

import "./App.css";

const App = () => (
  <div className="App">
    <div id="pageWrapper">
      <Navbar />

      <main>

        <Header />
        <Partners />
        <About />
        <Counter />
        <Why />
        <Cambridge />
        <CandidateRegistration />
        {/* <DOwnloads /> */}

      </main>
      <Footer />
    </div>
  </div>
);

export default App;
