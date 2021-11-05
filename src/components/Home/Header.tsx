import React from "react"
import Fade from "react-reveal/Fade"
import TypeIt from "typeit-react"

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 flex justify-center align-middle flex-col full-height-with-navbar">
      <Fade>
        <div>
          <div className="text-white font-poppins opacity-50 font-semibold mt-20 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xl">
            Hello,I'm
          </div>
          <h1 className="text-red-500 font-poppins font-semibold text-2xl xxs:text-2xl xs:text-2xl sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl 2xl:text-8xl">
            Aravind Jaimon
          </h1>
          <h2 className="text-white font-poppins font-semibold text-xl xxs:text-xl xs:text-xl sm:text-2xl md:text-2xl lg:text-2xl">
            <TypeIt
              options={{
                loop: true,
              }}
              getBeforeInit={instance => {
                instance
                  .type("Software Engineer")
                  .pause(1000)
                  .delete(17)
                  .type("Web Developer")
                  .pause(1000)
                  .delete(13)
                  .type("Full Stack Developer")
                  .pause(1000)
                  .delete(20)
                  .type("Photographer")
                  .pause(1000)
                  .delete(12)
                return instance
              }}
            />
          </h2>
        </div>
      </Fade>
    </div>
  )
}

export default Header
