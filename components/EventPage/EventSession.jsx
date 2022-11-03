import React, { useState } from "react"
import Image from "next/image"
import { SortableContainer, SortableElement } from "react-sortable-hoc"
import { arrayMoveImmutable } from "array-move"

import EventLesson from "./EventLesson"
import ButtonMain from "components/Button/Button"

import Modal from "react-bootstrap/Modal"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"

import IMG_PLUS from "public/icons/icon-plus.svg"
import IMG_DRAG from "public/icons/icon-drag.svg"
import IMG_EDIT from "public/icons/icon-edit.svg"
import IMG_MORE from "public/icons/icon-dots.svg"

const SortableItem = SortableElement(({ value }) => (
  <EventLesson dataLesson={value} />
))

const SortableList = SortableContainer(({ items }) => {
  return (
    <div className="session-card-body">
      {items.map((value, index) => (
        <SortableItem key={`item-${value.id}`} index={index} value={value} />
      ))}
    </div>
  )
})

const EventSession = ({ dataSession }) => {
  const [data, setData] = useState(dataSession?.lessonList)
  const [show, setShow] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [sessionTitle, setSessionTitle] = useState(dataSession?.title)

  console.log(isEdit)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setData((prevItem) => arrayMoveImmutable(prevItem, oldIndex, newIndex))
  }

  return (
    <>
      <div className="session-card">
        <div className="session-card-header">
          <div className="session-card-header-flex">
            <div className="card-icon-drag">
              <div className="drag-action">
                <div className="button-icon">
                  <Image src={IMG_DRAG} />
                </div>
              </div>
            </div>
            <div className="card-session-name">
              {isEdit ? (
                <input
                  className="card-session-input"
                  value={sessionTitle}
                  onChange={(e) => setSessionTitle(e.target.value)}
                />
              ) : (
                <h4>{sessionTitle}</h4>
              )}
            </div>
            <div className="card-icon-edit">
              <button
                className="button-icon"
                onClick={() => setIsEdit(isEdit ? false : true)}
              >
                <Image src={IMG_EDIT} />
              </button>
            </div>
          </div>
          <button className="button-icon button-grey">
            <Image src={IMG_MORE} />
          </button>
        </div>
        <SortableList items={data} onSortEnd={onSortEnd} />

        <div className="session-card-action">
          <button className="button-icon button-main" onClick={handleShow}>
            <Image src={IMG_PLUS} />
          </button>
          <p>Add Lesson Material</p>
        </div>
      </div>
      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header>
          <Modal.Title>Add Lesson</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="12">
              Session Name
            </Form.Label>
            <Col sm="12">
              <Form.Control type="text" placeholder="Session Name" />
            </Col>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <ButtonMain label="Close" variant={"border"} />
          <ButtonMain label="Submit" />
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EventSession
