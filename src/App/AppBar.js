import React from "react"
import styled, { css } from "styled-components"
import { AppContext } from "./AppProvider"

const Logo = styled.div`
  font-size: 1.5em;
`

const Bar = styled.div`
display: grid;
margin-bottom: 40px;
grid-template-columns: 180px auto 100px 100px;
`
const ControllButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0 0 60px #03ff03;
  `}
`

const ControllButton = ({ name }) => {
  return (
    <AppContext.Consumer>
      {(state) => {
        return (
          <ControllButtonElem active={state.page === name} onClick={() => state.setPage(name)} >
            {toProperCase(name)}
          </ControllButtonElem>
        )
      }}
    </AppContext.Consumer>
  )
}

const toProperCase = (lower) => {
  return lower.charAt(0).toUpperCase() + lower.substr(1)
}

export default () => {
  return (
    <Bar>
      <div>CryptoDash</div>
      <div />
      <ControllButton active name="dashborad" />
      <ControllButton name="settings" />
    </Bar>
  )
}