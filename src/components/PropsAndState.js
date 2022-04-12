import React, { useState } from "react"
// import * as React from 'react';
const Checkbox = props => (
  <input type="checkbox" {...props} />
)

export const PropsAndState = ({ yourName }) => {
  let [countClicks, setCountClicks] = useState(0)

  const handleClick = () => {
    //good practice:
    //make a copy of state, modify it, and then setState to the copy
    const newCountClicks = ++countClicks
    setCountClicks(newCountClicks)
  }

  return (
    <>
      <h3>Welcome, {yourName} </h3>
      <p>{countClicks}</p>
      <button onClick={(handleClick)}>Click Me</button>
      <Checkbox/>
    </>
  )
}