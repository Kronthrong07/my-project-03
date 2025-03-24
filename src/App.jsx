import React from 'react'
import Wee from './Wee.jsx'
import Wow from './Wow.jsx'

function App() {
  return (
    <>
      Welcome
      <Wow/>
      <h1>Hello</h1>
      <Hello/>
      <Wee/>
      <Hi/>
      <Hello/>
      <Wee />
    </>
  )
}
function Hello() {
  return (
    <React.Fragment>
      Hello...
    </React.Fragment>
  )
}

function Hi() {
  return (
    <React.Fragment>
      Hi...
    </React.Fragment>
  )
}

export default App
