// src/App.jsx
import React from "react";
import HeroBanner from "./components/HeroBanner";
import { Navbar } from "./components/Navbar";
import Carousel from "./components/Carousal";
import { Carousal2 } from "./components/Carousal2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <section className="bg-[#318CE7] h-screen px-8  py-8">
        <div>
          <h2 className="text-4xl text-start w-[200px]  text-white ml-[15px]">
            Explore Our Top Academies
          </h2>

          <Carousel />
        </div>
      </section>
      <section className=" py-8 bg-[#7CB9E8]">
        <h2 className="text-3xl font-bold text-center  text-[#fff34f]">
          Happy Kids, Satisfied Parents!
        </h2>
       <Carousal2 />
      </section>
      <footer className="bg-yellow-400 py-8  h-[300px] text-center">
        <h2 className="text-2xl font-bold">Stay Updated</h2>
        <p>Get the latest updates on academies near you!</p>
        <div className="mt-4 flex justify-center gap-5">
          <input type="email" placeholder="E-mail" className="w-[400px] p-2 rounded-md" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
