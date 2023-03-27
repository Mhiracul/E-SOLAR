import React from 'react'
import AboutHero from '../componentsA/AboutHero'
import Feedback from '../componentsA/Feedback'
import How from '../componentsA/How'
import Service from '../componentsA/Service'
import Video from '../componentsA/Video'
const AboutUs = () => {
  return (
    <div>
        <AboutHero />
        <Service />
        <Video />
        <Feedback />
        <How />
    </div>
  )
}

export default AboutUs;