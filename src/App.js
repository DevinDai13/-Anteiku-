import './App.css';
import React from "react";
import Navbar from './Components/navbar';
import MainContent from './Components/mainContent'
import Footer from './Components/footer'
import Dropdown from './Components/dropdown'

class App extends React.Component {
  state = {
    open:false
  };
  
  handleOpen= () => {
    this.setState({ open: !this.state.open})
  }

  render(){
    return (
      <>
        <Navbar handleOpen={this.handleOpen}/>
        <Dropdown open={this.state.open} handleOpen={this.handleOpen}/>
        <MainContent />
        <Footer />
      </>
    )
  }

}

export default App;
