import React from "react"
import './App.css'
import Line from './components/Line'
import lineColours from "./components/lineColours"

function App() {

const [lineStatuses, setLineStatuses] = React.useState([])

React.useEffect(() => {
  fetchLineStatuses()
  const interval = setInterval(fetchLineStatuses, 60000)
  return () => clearInterval(interval)
}, [])

async function fetchLineStatuses() {
  const resp = await fetch("https://api.tfl.gov.uk/line/mode/tube/status")
  const statusObjects = await resp.json()
  const lineInfo = statusObjects.map((object) => {
    return {
      name: object.name,
      status: object.lineStatuses[0].statusSeverityDescription
    }
  })
  console.log(lineInfo)
  setLineStatuses(lineInfo)
}

  return (
    <>
    <div id="wrap">
      <h1>Tube Status</h1>
      <div id="innerwrap">
      { lineStatuses.map((lineStatus, index) => {
        const colour = lineColours[lineStatus.name]
        return <Line 
    key={index}
    name={lineStatus.name}
    status={lineStatus.status}
    colour={colour}
    />
  })}
      </div>
    </div>
    </> 
  )}



export default App


