import React, {useState} from 'react';
import './DepositBlock.scss'
import {DepositCard} from '../DepositCard/DepositCard';

export const DepositBlock = (props: any) => {

    const [amount, setAmount] = useState<number>(0)

    const depositAmount = (x: number = 0): void => {
        let resultCount = amount + x;
        setAmount(resultCount)

    }

    const showAlert = () => {
        alert(`$ ${amount} будет зачислено вам на счет`)
    }


    return (
        <div className='depositBlock'>
            <select className='choicePaymentMethod'>
                <option>Банковская карта</option>
                <option>Биткоин</option>
                <option>Выставить счет</option>
            </select>
            <div className='depositCards'>
                <DepositCard addCount={50} getCount={100} depositAmount={depositAmount} />
                <DepositCard addCount={100} getCount={200} depositAmount={depositAmount}/>
                <DepositCard addCount={500} getCount={1000} depositAmount={depositAmount}/>
            </div>
            <div>
                <div className='resultText'>
                    {'$'} {amount} будет зачислено вам на счет
                </div>
            </div>
            <div>
                <button className='countButton' onClick={showAlert}>Пополнить</button>
            </div>
        </div>
    )
}
