import React from "react"
import Header from "../Layout/Header/Header"
import Hero from "../Components/Hero/Hero"
import About from "../Components/About/About"
import Roadmap from "../Components/Roadmap/Roadmap"
import Team from "../Components/Team/Team"
import Faq from "../Components/FAQ/Faq"
import Gang from "../Components/Gang/Gang"
import Collection from "../Components/Collection/Collection"
import Powered from "../Components/Powered/Powered"
import Launch from "../Components/Launch/Launch"
import Footer from "../Layout/Footer/Footer"
import { startSaga } from '../saga/rootSaga';

const Components = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Hero />
      <About />
      <Collection />
      <Launch />
      <Roadmap />
      <Team />
      <Faq />
      <Powered />
      <Gang />
      <Footer />
    </div>
  )
}


export default () => {
  startSaga();
  return <Components />
};