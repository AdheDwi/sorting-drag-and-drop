import Link from "next/link"
import Image from "next/image"
import IMG_BACK from "public/icons/icon-arrow-left.svg"

const ButtonBackHeader = ({ to = "/" }) => {
  return (
    <Link href={to}>
      <a className="button-back-header">
        <Image src={IMG_BACK} alt="icon-back" className="button-icon-image" />
      </a>
    </Link>
  )
}

export default ButtonBackHeader
