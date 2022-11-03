import React, { useEffect } from "react"

import Header from "components/Header/Header"
import HeaderContent from "components/Header/HeaderContent"
import EventPage from "components/EventPage/EventPage"

const Home = () => {
  return (
    <>
      <Header />
      <div className="content-wrapper">
        <div className="container">
          <HeaderContent />
          <EventPage />
        </div>
      </div>
    </>
  )
}

export default Home
