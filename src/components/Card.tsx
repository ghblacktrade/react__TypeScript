import React from 'react'

interface CardProps {
    width?: string
    height?: string
    children?: React.ReactChild | React.ReactNode
}

const Card = ({width, height, children}: CardProps) => {
    return (
        <div style={{width, height, border: '3px solid teal'}}>
            {children}
        </div>
    )
}

export default Card