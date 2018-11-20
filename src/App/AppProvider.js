import React, { Component } from "react"

export const AppContext = React.createContext()

export class AppProvider extends Component {
  // state = {
  //   page: "dashborad",
  //   setPage: this.setPage
  // }

  constructor(props) {
    super(props)
    this.state = {
      page: "dashborad",
      setPage: this.setPage
    }
  }

  setPage = (page) => {
    this.setState({ page })
  }

  render() {
    return (
      <AppContext.Provider value={this.state} >
        {this.props.children}
      </AppContext.Provider>
    )
  }
}