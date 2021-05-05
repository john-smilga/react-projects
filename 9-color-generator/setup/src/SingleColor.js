import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`

  // == Option 1: ==
  // passing hexColor from parent component, App, we can use the hex color
  // provided directly from the library

  // == Option 2: ==
  // can use rgbToHex function from utils.js
  // const hex = rgbToHex(...rgb);

  // we're using useEffect to make the Copy to Clipboard alert disappear after a defined period of time (otherwise, it'll permanently persist and lock setAlert(true) for every instance)
  useEffect(()=> {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1500)
    return () => clearTimeout(timeout);
  }, [alert])

  return (
    <article className={`color ${index > 10 && "color-light"}`} style={{backgroundColor: `rgb(${bcg})`}} onClick={()=> {
      setAlert(true);
      navigator.clipboard.writeText(hexValue);
    }} >
      <p className="percent-value">
        {weight}%
      </p>
      {/* <p className="color-value">{hex}</p> */}
      <p className="color-value">{hexValue}</p>
      {alert && <p className={`alert`}> 
        Copied to Clipboard!
      </p>}
    </article>
  )
}

export default SingleColor
