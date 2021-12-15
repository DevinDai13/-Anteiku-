import React from "react";
import MainContent from '../Components/mainContent'
import Grid from '../Components/grid';
import Characters from "../Components/characters";

function Home () {
  return (
    <div className="bg-gray-300 min-h-screen">
      <MainContent/>
      <Characters />
      <Grid />
    </div>
  )
}

export default Home;
