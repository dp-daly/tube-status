import React from "react"

const Line = ({ name, status, colour }) => {
  return (
    <div id="line">
      <div id="name"><h2 style={{color: colour}}>{name}</h2></div>
      <div id="status"><h3>{status}</h3></div>
    </div>
  )
}

export default Line