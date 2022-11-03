import Link from "next/link"
import Image from "next/image"

const ButtonMain = ({ type, variant, icon, label, action }) => {
  const variantClass =
    variant === "border" ? "button-main button-border" : "button-main"

  return type === "link" ? (
    <Link href={action}>
      <a className={`button ${variantClass}`}>
        {icon ? (
          <div className="icon">
            <Image src={icon} alt="icon-button" />
          </div>
        ) : null}
        <span>{label}</span>
      </a>
    </Link>
  ) : (
    <button className={`button ${variantClass}`} onClick={action}>
      {icon ? (
        <div className="icon">
          <Image src={icon} alt="icon-button" />
        </div>
      ) : null}
      {label ? <span>{label}</span> : null}
    </button>
  )
}

export default ButtonMain
