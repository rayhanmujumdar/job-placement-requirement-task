import React from 'react'
import { useLocation } from 'react-router-dom'

function Favorite() {
  const location = useLocation()
  console.log(location)
  return (
    <div>This is my Favorite section</div>
  )
}

export default Favorite