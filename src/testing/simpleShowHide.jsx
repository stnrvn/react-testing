import { useState } from "react"

const SimpleShowHide = () => {
  const [show, setShow] = useState(false)
  
  const handleButtonShow = () => {
    setShow(!show)
  }

  return(
    <div>
      <p>I'm {show ? "show" : "hide"}</p>
      <button onClick={handleButtonShow}>{show ? "hide" : "show"}</button>
    </div>
  )
}

export default SimpleShowHide