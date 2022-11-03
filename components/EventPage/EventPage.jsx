import React, { useState } from "react"
import { SortableContainer, SortableElement } from "react-sortable-hoc"
import { arrayMoveImmutable } from "array-move"
import { dataLesson } from "data"

import EventSchedule from "./EventSchedule"
import EventSession from "./EventSession"
import ButtonMain from "components/Button/Button"

import IMG_PLUS from "public/icons/icon-plus.svg"

const EventPage = () => {
  const [data, setData] = useState(dataLesson)

  const addSession = () => {
    const generateId = data?.length + 1
    const generateData = {
      id: generateId,
      title: `Session${generateId}`,
      lessonList: [],
    }

    setData(data.concat(generateData))
  }

  const SortableItem = SortableElement(({ value }) => (
    <EventSession dataSession={value} />
  ))

  const SortableList = SortableContainer(({ items }) => {
    return (
      <div>
        {items.length > 0
          ? items.map((value, index) => (
              <SortableItem
                key={`item-session-${value.id}`}
                index={index}
                value={value}
              />
            ))
          : null}
      </div>
    )
  })

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setData((prevItem) => arrayMoveImmutable(prevItem, oldIndex, newIndex))
  }

  return (
    <section className="sc-event">
      <div className="container">
        <div className="sc-event-tab">
          <div className="sc-event-tab-item active">Curricullum</div>
        </div>
        <EventSchedule />
        <SortableList items={data} onSortEnd={onSortEnd} />
        <div className="sc-event-action">
          <ButtonMain
            label="Add Session"
            icon={IMG_PLUS}
            action={() => addSession()}
          />
        </div>
      </div>
    </section>
  )
}

export default EventPage
