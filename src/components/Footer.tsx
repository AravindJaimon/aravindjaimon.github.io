import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <div className="mx-auto p-16 mt-10 bg-lightblack rounded-xl flex justify-between align-middle">
      <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-10 text-xl sm:text-2xl md:text-3xl">
        <Link to="https://www.instagram.com/aravindjaimon.me">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </div>
      <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-10 text-xl sm:text-2xl md:text-3xl">
        <Link to="https://twitter.com/aravindjaimonme">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </div>
      <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-10 text-xl sm:text-2xl md:text-3xl">
        <Link to="https://linkedin.com/in/aravindjaimon">
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
      </div>
      <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-10 text-xl sm:text-2xl md:text-3xl">
        <Link to="https://github.com/aravindjaimon">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </div>
      <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-10 text-xl sm:text-2xl md:text-3xl">
        <a href="mailto:hi@aravindjaimon.me">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-10 text-xl sm:text-2xl md:text-3xl">
        <a href="tel:08281886068">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
    </div>
  )
}

export default Footer
