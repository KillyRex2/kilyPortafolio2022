import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/pm2.png'
import IMG2 from '../../assets/juve.jpg'
import IMG3 from '../../assets/api.png'
import IMG4 from '../../assets/fuzzy.jpg'
import IMG5 from '../../assets/kanojo.jpg'

const Portafolio = () => {
  return (
    <section id="portafolio">
      <h5>My Recent work</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio__container">
        <article className="portafolio__item">
          <div className="portafolio__item-image">
              <img src={IMG1} alt="" />
          </div>
          <h3>Parquimaniacos</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/Maniacorp/ProyectoEstacionamiento" className="btn" target="_blank">Github</a>
            <a href="https://dribbble.com" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portafolio__item">
          <div className="portafolio__item-image">
              <img src={IMG2} alt="" />
          </div>
          <h3>JerseyRateApp</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/KillyRex2/jerseyRate" className="btn" target="_blank">Github</a>
            <a href="https://dribbble.com" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article> 
        <article className="portafolio__item">
          <div className="portafolio__item-image">
              <img src={IMG3} alt="" />
          </div>
          <h3>API-CTD</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/MM-KillyRex/api-ctd" className="btn" target="_blank">Github</a>
            <a href="https://dribbble.com" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article> 
        <article className="portafolio__item">
          <div className="portafolio__item-image">
              <img src={IMG4} alt="" />
          </div>
          <h3>Fuzzylogic</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/KillyRex2/Fuzzy-Logic2" className="btn" target="_blank">Github</a>
            <a href="https://dribbble.com" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article> 
        <article className="portafolio__item">
          <div className="portafolio__item-image">
              <img src={IMG5} alt="" />
          </div>
          <h3>Rent a GF</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/KillyRex2/RentGF" className="btn" target="_blank">Github</a>
            <a href="https://killyrex2.github.io/RentGF/" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article> 
 
      </div>
    </section>
  )
}

export default Portafolio