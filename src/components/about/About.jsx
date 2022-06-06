import React from 'react'
import './about.css'
import ME from '../../assets/kilys.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
            <img src={ME} alt="about"/>
        </div>
      </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
       
          <p>
          Hellow there! Im José Ángel, and i just finished my College studies at
the "Instituto Tecnológico de la Laguna" and my main objective is to be
able to acquire a good work experience, in order to aspire to complete
my goals in the future.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    </div>
    </section>
  )
}

export default About