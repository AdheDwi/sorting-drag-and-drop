import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import IMG_DRAG from "public/icons/icon-drag.svg"
import IMG_DOT from "public/icons/icon-single-dot.svg"
import IMG_VIDEO from "public/icons/icon-video.svg"
import IMG_CLOCK from "public/icons/icon-clock.svg"
import IMG_DOWNLOAD from "public/icons/icon-download.svg"
import IMG_MORE from "public/icons/icon-dots.svg"

const EventLesson = ({ dataLesson }) => {
  return (
    <div className="lesson-card">
      <div className="lesson-card-left">
        <div className="card-icon-drag">
          <div className="drag-action">
            <div className="button-icon">
              <Image src={IMG_DRAG} />
            </div>
          </div>
        </div>
        <div className="card-lesson-content">
          <div className="button-icon button-grey">
            <Image src={dataLesson?.icon} />
          </div>
          <Link href={dataLesson?.previewUrl}>
            <a className="title-lesson">{dataLesson?.name || "Judul"}</a>
          </Link>
          <div className="status-lesson">{dataLesson?.status}</div>
          {dataLesson?.isPreviewable === "yes" ? (
            <div className="note-lesson">
              <div className="dot-space">
                <Image src={IMG_DOT} />
              </div>
              <span>Previewable</span>
            </div>
          ) : null}
        </div>
      </div>
      <div className="lesson-card-right">
        <div className="lesson-attribute">
          <div className="button-icon">
            <Image src={IMG_CLOCK} />
          </div>
          <span>{dataLesson?.date}</span>
        </div>
        <div className="lesson-attribute">
          <div className="dot-space">
            <Image src={IMG_DOT} />
          </div>
          <div className="button-icon">
            <Image src={IMG_CLOCK} />
          </div>
          <span>{dataLesson?.duration} Min</span>
        </div>
        <div className="lesson-attribute">
          <div className="dot-space">
            <Image src={IMG_DOT} />
          </div>
          <Link href={dataLesson?.downloadUrl}>
            <a className="download-lesson">
              <div className="button-icon">
                <Image src={IMG_DOWNLOAD} />
              </div>
              <span>Downloadable</span>
            </a>
          </Link>
        </div>
        <button
          className="button-icon button-grey lesson-action"
          onClick={() => console.log("hallo")}
        >
          <Image src={IMG_MORE} />
        </button>
      </div>
    </div>
  )
}

export default EventLesson
