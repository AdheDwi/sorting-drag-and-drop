import React from "react"
import ButtonMain from "components/Button/Button"
import IMG_PREVIEW from "public/icons/icon-eye.svg"

const HeaderContent = () => {
  return (
    <section className="sc-content-header">
      <div className="container">
        <div className="content-header-flex">
          <div className="content-header-text">
            <h1 className="title-page">
              Belajar dan praktek cinematic videography
            </h1>
            <p className="text-note">Last edited 18 October 2021 | 13:23</p>
          </div>

          <ButtonMain
            icon={IMG_PREVIEW}
            variant="border"
            action={() => console.log("preview")}
            label="Preview"
          />
        </div>
      </div>
    </section>
  )
}

export default HeaderContent
