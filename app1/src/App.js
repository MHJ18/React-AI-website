import React from "react";
import "./App.css";
import Brand from "./components/brand/Brand";
import Cta from "./components/cta/Cta";
import Feature from "./components/feature/Feature";
import Navbar from "./components/navbar/Navbar";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  Gpt,
} from "./containers/index";
function App() {
  return (
    <>
      <div className="app">
        <div className=" gradiant__bg font-4">
          <Navbar />
          <Header />
        </div>

        <Brand />
        <Gpt />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
