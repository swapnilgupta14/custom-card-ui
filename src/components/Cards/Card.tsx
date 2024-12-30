import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode | ReactNode[]
  className?: string 
}

const Card: FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={`
      bg-white
      rounded-xl
      shadow-[0_8px_30px_rgb(0,0,0,0.12)]
      p-6
      border border-gray-100
      hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)]
      transition-shadow
      duration-300
      ${className}
    `}>
      {children}
    </div>
  )
}

export default Card