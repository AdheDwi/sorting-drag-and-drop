import IMG_VIDEO from "public/icons/icon-video.svg"
import IMG_MAP from "public/icons/icon-map-marker.svg"

export const dataLesson = [
  {
    id: 1,
    title: "Cinematic Dasar",
    lessonList: [
      {
        id: 1,
        icon: IMG_VIDEO,
        name: "Intro",
        status: "Required",
        date: "24 Oktober 2021, 16:30",
        downloadUrl: "/dowload/cinematic-dasar/intro.mp4",
        previewUrl: "/cinematic-dasar/intro",
        duration: "06:30",
        isPreviewable: "yes",
      },
      {
        id: 2,
        icon: IMG_MAP,
        name: "Pengenalan Dasar",
        status: "Required",
        date: "25 Oktober 2021, 16:30",
        downloadUrl: "/dowload/cinematic-dasar/pengenalan.mp4",
        previewUrl: "/cinematic-dasar/pengenalan",
        duration: "06:30",
        isPreviewable: "no",
      },
    ],
  },
]
