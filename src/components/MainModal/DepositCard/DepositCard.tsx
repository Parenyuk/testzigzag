import React from 'react';
import './DepositCard.scss'

type PropsType = {
    addCount: number
    getCount: number
    depositAmount: (n: number) => void

}

export const DepositCard = ({addCount, getCount, depositAmount}: PropsType) => {

    const addCountNumber = (): void => {
        depositAmount(addCount)
    }

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
