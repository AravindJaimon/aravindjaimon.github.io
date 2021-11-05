import React, { FC, InputHTMLAttributes } from "react"

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = props => {
  return (
    <input
      {...props}
      type="text"
      className="px-2 py-2 rounded-lg bg-white bg-opacity-20 border-transparent flex-1 appearance-none text-white font-poppins focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent sm:width-full md:width-full xxs:text-sm"
    />
  )
}

export default Input
