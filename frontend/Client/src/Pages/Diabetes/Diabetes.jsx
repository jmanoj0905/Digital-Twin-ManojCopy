// import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import {Hero, Navbar, Overview, DiabetesCanvas, Diabform, Result} from "../../components";
import {diabetesSystem,diabetesOverview, diabetes_navLinks, mainSystem, main_navLinks, mriSystem, models} from "../../constants";

const Diabetes = () => {
  const selectedSystem = () => {
    const selectedModel = localStorage.getItem('selectedModel');
    for (const model of models) {
      if (selectedModel === model.navigate) {
        return model.name;
      }
    }
    return diabetesSystem;
  }

  const selectedOverview = () => {
    const selectedModel = localStorage.getItem('selectedModel');
    for (const model of models) {
      if (selectedModel === model.navigate) {
        return model.description;
      }
    }
    return diabetesOverview;
  }

  return (
    <>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar system={mainSystem} navLinks={main_navLinks}/>
          <Hero system={selectedSystem()} model={DiabetesCanvas}/>
        </div>
        <Overview system={selectedSystem()} overview={selectedOverview()}/>
        <Diabform />
        <Result />
      </div>
    </>
  );
}

export default Diabetes;
