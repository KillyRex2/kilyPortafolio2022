import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/jos%C3%A9-%C3%A1ngel-garc%C3%ADa-arce-384a39192/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/KillyRex2" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/josepacmangarcia.arce/" target="_blank"><BsFacebook/></a>
        <a href="https://www.youtube.com/watch?v=-2M0J64Y5zI&list=RD-2M0J64Y5zI&start_radio=1&ab_channel=x831China" target="_blank"><GrInstagram/></a>
    </div>
  )
}

export default HeaderSocials