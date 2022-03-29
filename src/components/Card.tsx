import React, {FC, useState} from 'react'


export enum CardVariant {
    outlined = 'outlined',
    primary ='primary',

}

interface CardProps {
    width?: string
    height?: string
    variant?: CardVariant
    onclick: (num : number) => void
}

const Card: FC<CardProps> = ({
                                 width,
                                 height,
                                 variant,
    onclick,
                                 children,

                             }) => {
    const [state, setState] = useState(0)
    return (
        <div style={{width, height, border: variant === CardVariant.outlined ? '1px solid teal' : 'none',
        background: variant === CardVariant.primary ? 'gray' : ' '
        }} onClick={() => onclick(state)}>
            {children}
        </div>
    )
}

export default Card