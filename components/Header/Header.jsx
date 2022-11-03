import React from "react"
import ButtonBackHeader from "components/Button/ButtonBackHeader"

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="container">
        <div className="header-body">
          <ButtonBackHeader to="/" />
          <div className="header-title">Event</div>
        </div>
      </div>
    </header>
  )
}

export default Header
