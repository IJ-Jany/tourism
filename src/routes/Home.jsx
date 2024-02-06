import React from 'react'
import Navbar from "../components/Navbar"
import Background from '../components/Background'

const Home = () => {
  return (
  <>
  <Navbar/>
  <Background
  cName="banner"
  bannerimg=""
  title="Always say yes to new adventures."
  btntext="Travel Plan"
  url="/"
  btnclass="show"
  />
  </>
  )
}

export default Home