import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
import Titlecard from '../components/Titlecard'
import Titlecard2 from '../components/Titlecard2'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src='./hero_banner.jpg' alt='' className='banner-img'/>
        <div className="hero-caption">
          <img src='./hero_title.png' alt="" className='caption-img'></img>
          <p>this project is worth a view</p>
          <div className="hero-btns">
            <button className='btn1'><img src='./play_icon.png' alt=''></img>Play</button>
            <button className='btn2'><img src='./info_icon.png' alt=''></img>More Info</button>
          </div>
        </div>
      </div>
      <Titlecard />
      <Titlecard2 />
      <Footer />
    </div>
  )
}

export default Home
