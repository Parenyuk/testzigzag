import React, {ReactNode} from 'react';
import './DepositCard.scss'

type PropsType = {
    addCount: ReactNode
    getCount: ReactNode

}
    const addCountNumber = (addCount: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        // depositAmount(addCount)
    }

export const DepositCard = ({addCount, getCount}: PropsType) => {
    return (
        <div className='depositCard' onClick={addCountNumber}>
            <div>
            Пополнить на
            <div>
                $ {addCount}
            </div>
            </div>
            <div className='depositCardLowerPart'>
                Получить
                <div>
                    $ {getCount}
                </div>
            </div>
        </div>
    )
}
