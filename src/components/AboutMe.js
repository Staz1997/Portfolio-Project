import React from "react"
import author from "../Me.png"

const AboutMe = () => {
  return (
    <div className="aboutme-wrapper">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap">
              <img className="profile-img" src={author} alt="author..." />
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">about me</h1>
            <p className="paragraph">
              Hey there, I am Johnny, a 26-year-old tech enthusiast who stumbled into the world of coding just a few months ago.

              I wasn't always this crazy about computers; I used to be just your average tech consumer, playing newly released video games, reading about mundane stuff, chatting with friends online, rinse and repeat. A few years ago, I saved some money to assemble my own computer by buying custom parts online.
              . But there was still one issue: something was still missing. As time went on and I spent more time navigating the internet, I realized that this digital landscape had way more to offer beyond the horizon.

              So, with the help of a friend who has a few years as a working developer under his belt, I began my coding journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
