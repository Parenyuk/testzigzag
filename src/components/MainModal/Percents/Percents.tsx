import React from 'react';
import './Percents.scss'

type PropsType = {
    title: string
}

export const Percents = ({title}: PropsType) => {
    return (
        <div className='percent'>
            {title}
        </div>
    )
}
