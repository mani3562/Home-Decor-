import React from 'react'
import './style.css';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <div className='root-a'>
    <div className='main-a'>
    <Navbar/>
    <div className='cent-a'>
      <h2 id='kn-mo' >know More</h2>
      <h1 id='ab-us'>About Us</h1>
    </div>
    </div>
    <div className='ab-content'>
      <div className='ab-items1'>
        <img id='ab-png' src='./png/pic14-free-img.png'alt=''/>
      </div>
      <div className='ab-items2'>
        <h1 id='work-s'>Working Since 1995</h1>
        <p id='bot-l'>_________</p>
        <p id='tac'>Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus dapibus quis eos, risus, vehicula! Egestas qui interdum habitant! Laoreet, placeat maxime Suspendisse.Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus</p>

        <h3 id='des-is'>Design is a funny word</h3>
        <p>Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus dapibus quis eos, risus, vehicula! Egestas qui interdum habitant! Laoreet, placeat maxime Suspendisse.Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus.</p>
      </div>
    </div>
    <nav>
      <div className='ab-logo'>
        <img id='logo-ct' src='./png/client-logo-1.png' alt=''/>
        <img id='logo-ct' src='./png/client-logo-3 (1).png' alt=''/>
        <img id='logo-ct' src='./png/client-logo-3.png' alt=''/>
        <img id='logo-ct' src='./png/client-logo-4.png' alt=''/>
        <img id='logo-ct' src='./png/client-logo-5.png' alt=''/>
      </div>
    </nav>
    <Footer/>
    </div>
  )
}

export default About