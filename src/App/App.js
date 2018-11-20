import React, { Component } from 'react';
import './App.css';
import WelcomeMessage from "../Settings/WelcomeMessage"
import AppLayout from "./AppLayout"
import { AppProvider } from "./AppProvider"
import Settings from "../Settings/Index"
import AppBar from "./AppBar"


class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Settings />
        </AppProvider>
      </AppLayout>

    );
  }
}

export default App;
