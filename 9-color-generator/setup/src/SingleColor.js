import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  // == Option 1: ==
  // passing hexColor from parent component, App, we can use the hex color
  // provided directly from the library

  // == Option 2: ==
  // can use rgbToHex function from utils.js
  // const hex = rgbToHex(...rgb);

  return (
    <article className="color" style={{backgroundColor: `rgb(${bcg})`}}>
      <p className="percent-value">
        {weight}%
      </p>
      {/* <p className="color-value">{hex}</p> */}
      <p className="color-value">#{hexColor}</p>
    </article>
  )
}

export default SingleColor
