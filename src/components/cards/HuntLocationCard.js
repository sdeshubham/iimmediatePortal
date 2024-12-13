import React from 'react'
import { ImLocation2 } from "react-icons/im";

const HuntLocationCard = ({locationName}) => {
  return (
    <>
      <div className="hunt-location">
        <div className="huntlocationBox">
        <ImLocation2 />
            <p>{locationName}</p>
        </div>
      </div>
    </>
  )
}

export default HuntLocationCard
