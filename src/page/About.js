import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  const goToHome = () => {
    navigate('/')
  }
  return (
    <div>
      <h2>About Page</h2>
      <button onClick={() => {goToHome()}}>go to Hompage</button>
    </div>
  )
}

export default About
