import React from "react";

import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export default class App extends React.Component {
  state = {profiles: []};

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  }

  render (){
    return (
      <div className="App">
        <Sidebar/>
        <Main onSubmit={this.addNewProfile} profiles={this.state.profiles}/>
        <Footer/>
      </div>
    )
  }
}
