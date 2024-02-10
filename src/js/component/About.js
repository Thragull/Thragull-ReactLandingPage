import React from 'react'
import MyselfPic from '../../img/myself.jpg'

const About = () => {
  return (
    <div className='container bg-dark-subtle bg-gradient rounded mt-3 mb-5 p-4 text-start'>
        <h1>About Antonio Campos Alegre (Thragull)</h1>
        <div className='pt-lg-4 pb-5'>
            <img src={MyselfPic} id='myself' className='float-start rounded-circle pe-4'/>
            <p>Greetings! I'm Antonio Campos Alegre, also known as Thragull, a 37-year-old individual hailing from Zaragoza, Spain. By profession, I serve as a Senior Cabin Crew member at Get Jet, a charter airline. Concurrently, I'm embarking on a Fullstack development bootcamp, driven by my passion for technology and a desire to expand my skill set.
            <br/><br/>
            My interests span a wide spectrum, from the thrill of traveling to the adrenaline of Formula 1 races. I'm an avid enthusiast of movies and TV series, with a particular fondness for epic sagas like Star Wars, The Lord of the Rings, and Harry Potter. Video games, eSports, skiing, and swimming also capture my attention and fuel my leisure time.
            <br/><br/>
            While I pursued studies in computer system engineering, my journey led me to the dynamic world of aviation, where I've accumulated over 12 years of experience across various airlines. I cherish the opportunity to travel while working, which has enriched my perspective and broadened my horizons.
            <br/><br/>
            Known for my kindness and helpful nature, I approach challenges with a problem-solving mindset, striving for efficient solutions. Safety and security hold paramount importance to me, evident in my meticulous attention to detail and proactive measures to ensure well-being in any environment.
            <br/><br/>
            In the words of Master Yoda from Star Wars, "Do or Do not, there is no try" — a guiding principle that resonates deeply with my approach to life and endeavors.</p>
        </div>
    </div>
  )
}

export default About