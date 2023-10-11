import React from 'react'
import'../../styles/Main.css'
import back from'../../images/back3.png'
const Main = ({theme}) => {
  return (
    <div>
     <section className="main_section">
        <div className="container">
            <div className="main_wrapper">
                <div className="main-content">
                <div>
                    <h2>Welcome to Codingorzo</h2>
                    <h2>Where coding and creativity unites to</h2>
                    <h2 className='highlight'>Promote your coding skills</h2>

                </div>
                <p className="description">Codingorzo is an online coding platform that allows the students<br /> to solve the problems efficiently and to promote their coding skills</p>
                <div className="main-btns">
                    <button className="primary-btn">Get Started Now</button>
                    <button className="secondary-btn">Sign up</button>
                </div>
                </div>
                
                <div className="main-img">
<img id="main-img" src={back}height="460" />
                </div>
                </div></div></section> 
    </div>
  )
}

export default Main
