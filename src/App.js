import Footer from "./Componants/Footer";
import Hero from "./Componants/Hero";
import Navbar from "./Componants/Navbar";
import Section1 from "./Componants/Section1";
import Section2 from "./Componants/Section2";
import Section3 from "./Componants/Section3";
import Section4 from "./Componants/Section4";

import ballSplit1 from "./Assets/Objects/ball-split1.png";
import ballSplit2 from "./Assets/Objects/ball-split2.png";
import beveledCone from "./Assets/Objects/beveled-cone.png";
import beveledCube from "./Assets/Objects/beveled-cube.png";
import cube2 from "./Assets/Objects/cube2.png";
import cylinder from "./Assets/Objects/cylinder.png";
import doubleHelix from "./Assets/Objects/double-helix.png";
import doubleIshape from "./Assets/Objects/double-l-shape.png";
import halfDonut from "./Assets/Objects/half-donut.png";
import infinity from "./Assets/Objects/infinity.png";
import octahedron from "./Assets/Objects/octahedron.png";
import smallCylinder from "./Assets/Objects/small-cylinder.png";
import stadiumCapsuleShape from "./Assets/Objects/stadium-capsule-shape.png";
import torus from "./Assets/Objects/torus.png";

import Parallax from 'parallax-js'

import { useEffect, useState } from "react";

export default function App() {

  const Objects = [
    ballSplit1,
    ballSplit2,
    beveledCone,
    beveledCube,
    cube2,
    cylinder,
    doubleHelix,
    doubleIshape,
    halfDonut,
    infinity,
    octahedron,
    smallCylinder,
    stadiumCapsuleShape,
    torus,
  ];
// useEffect(() => {
  
//   var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);
// }, [])

  return (
    <div
      id="parent"
      className="bg-[url('./Assets/bg.svg')] w-screen h-fit relative bg-cover overflow-hidden"
    >
      
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
      {/* <div id="scene">
  <div data-depth="0.2">My first Layer!</div>
  <div data-depth="0.6">My second Layer!</div>
</div> */}
      <img
        className={`absolute  top-[222px] left-[-64px] object-cover overflow-visible z-0 blur-sm`}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />
      <img
        className={`absolute  top-[91px] left-[256px] object-cover overflow-visible z-0`}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />{" "}
      <img
        className={`absolute  top-[-22px] left-[720px] object-cover overflow-visible z-0 blur-sm`}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />{" "}
      <img
        className={`absolute  top-[4px] left-[1100px] object-cover overflow-visible z-0`}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />{" "}
      <img
        className={`absolute  top-[517px] left-[597px] object-cover overflow-visible z-0 blur-lg`}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />{" "}
      <img
        className={`absolute  top-[546px] left-[-4px] object-cover overflow-visible z-0`}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />{" "}
      <img
        className={`absolute  top-[660px] left-[276px] object-cover overflow-visible z-0 blur-sm`}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />{" "}
      <img
        className={`absolute  top-[540px] left-[1192px] object-cover overflow-visible z-0`}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />{" "}
      <img
        className={`absolute  top-[1133px] left-[405px] object-cover overflow-visible z-0`}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />{" "}
      <img
        className={`absolute  top-[996px] left-[1204px] object-cover overflow-visible z-0`}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />{" "}
      <img
        className={`absolute  top-[1300px] left-[770px] object-cover overflow-visible z-0`}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />
      <img
        className={`absolute  top-[1900px] left-[270px] object-cover overflow-visible z-0`}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />
      <img
        className={`absolute  top-[2200px] left-[970px] object-cover overflow-visible z-0`}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />
        <img
        className={`absolute  top-[2500px] left-[170px] object-cover overflow-visible z-0`}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />
        <img
        className={`absolute  top-[2800px] left-[20px] object-cover overflow-visible z-0 blur-sm`}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />
       <img
        className={`absolute  top-[3000px] right-[20px] object-cover overflow-visible z-0 `}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />
       <img
        className={`absolute  top-[3100px] right-[660px] object-cover overflow-visible z-0 `}
        src={Objects[Math.floor(Math.random() * 13) + 1]}
      />
    </div>
  );
}
