import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faWindows, faAndroid } from "@fortawesome/free-brands-svg-icons";



const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="container2">
        <h1>portfolio</h1>
        <div className="card">
          <div className="face face1 windows">
            <div className="content">
              <i className="win-icon"><FontAwesomeIcon className="icon" icon={faWindows} size="2x" /></i>
              <h3>Windows</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
              <a href="#" type="button">Read More</a>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="face face1 android">
            <div className="content">
              <i className="android-icon"><FontAwesomeIcon className="icon" icon={faAndroid} size="2x" /></i>
              <h3>Android</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
              <a href="#" type="button">Read More</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="face face1 apple">
            <div className="content">
              <i className="apple-icon"><FontAwesomeIcon className="icon" icon={faApple} size="2x" /></i>
              <h3>Apple</h3>
            </div>
          </div>
          <div className="face face2">
            <div className="content">
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
              <a href="#" type="button">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div >






  )
}

export default Portfolio
