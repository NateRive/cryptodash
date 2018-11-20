import React, { Component } from 'react';
import './App.css';
import WelcomeMessage from "./WelcomeMessage"
import AppLayout from "./AppLayout"
import { AppProvider } from "./AppProvider"

import AppBar from "./AppBar"


class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <WelcomeMessage />
        </AppProvider>
      </AppLayout>

    );
  }
}

export default App;
