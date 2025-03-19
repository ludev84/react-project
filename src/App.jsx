import padsData from "./pads"
import React from "react"
import Pad from "./Pad"

export default function App({ darkMode }) {
  const [pads, setPads] = React.useState(padsData)

  const styles = {
    backgroundColor: darkMode ? "#222222" : "#cccccc"
  }

  function toggle(id) {
    setPads(prevPads =>
      prevPads.map(pad =>
        pad.id === id ? { ...pad, on: !pad.on } : pad
      )
    )
  }

  function toggleAllOff() {
    setPads(prevPads =>
      prevPads.map(item =>
        ({...item, on: false})
      )
    )
  }

  const buttons = pads.map(pad =>
    <Pad key={pad.id} id={pad.id} color={pad.color} on={pad.on} onClickHandle={toggle} />
  )

  return (
    <main>
      <div className="pad-container">
        {buttons}
      </div>
      <button onClick={toggleAllOff}>Turn all off</button>
    </main>
  )
}