import React from "react"
import { AppContext } from "../App/AppProvider"

export default ({ firstVisit }) => {
  return (
    <AppContext.Consumer>
      {
        ({ firstVisit }) => (
          firstVisit ? <div>
            Welcome to cryptoDash, please select your favorite coin to begin
          </div> : null
        )
      }
    </AppContext.Consumer>
  )
}