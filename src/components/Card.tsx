import React, {FC} from 'react'


export enum CardVariant {
    outlined = 'outlined',
    primary ='primary',

}

interface CardProps {
    width?: string
    height?: string
    variant?: CardVariant
    onclick: () => void
}

const Card: FC<CardProps> = ({
                                 width,
                                 height,
                                 variant,
    onclick,
                                 children,

                             }) => {
    return (
        <div style={{width, height, border: variant === CardVariant.outlined ? '1px solid teal' : 'none',
        background: variant === CardVariant.primary ? 'gray' : ' '
        }} onClick={onclick}>
            {children}
        </div>
    )
}

export default Card