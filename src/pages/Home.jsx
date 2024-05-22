import React from "react";
import Banner from "../component/Banner";
import About from "../component/About";
import Videos from "../component/Videos";
import Protocol from "../component/Protocol";
import Roadmap from "../component/Roadmap";
import Discover from "../component/Discover";
import Unleash from "../component/Unleash";
import Community from "../component/Community";

function Home() {
  return (
    <>
      <Banner />
      <About />
      <Videos />
      <Protocol />
      <Roadmap />
      <Discover />
      <Unleash />
      <Community />
    </>
  );
}

export default Home;
