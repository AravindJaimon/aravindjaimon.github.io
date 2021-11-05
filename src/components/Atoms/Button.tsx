import React, { ButtonHTMLAttributes, FC } from "react"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorClass: string
  textColor: string
  marginClass: string
}

const Button: FC<IButton> = ({
  title,
  colorClass,
  textColor,
  marginClass,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${colorClass} ${textColor} ${marginClass} px-3 py-2 rounded-lg text-sm transform scale-100 transition hover:scale-110 active:scal
    -95 focus:outline-none focus:ring-1 focus:ring-offset-1 sm:width-full md:width-full lg:width-full`}
    >
      {title}
    </button>
  )
}

export default Button
