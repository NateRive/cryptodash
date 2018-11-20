import React, { Component } from "react"
const cc = require("cryptocompare")
export const AppContext = React.createContext()

export class AppProvider extends Component {


  constructor(props) {
    super(props)
    this.state = {
      page: "dashborad",
      ...this.saveSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    }
  }

  componentDidMount = () => {
    this.fetchCoins()
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data
    this.setState({ coinList })
    console.log(coinList)
  }

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: "dashborad"
    })
    localStorage.setItem("cryptoDash", JSON.stringify({
      test: "hello"
    }))
  }

  saveSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem("cryptoDash"))
    if (!cryptoDashData) {
      return {
        page: "settings",
        firstVisit: true
      }
    }
    return {}
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