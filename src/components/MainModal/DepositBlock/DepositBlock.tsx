import React, {useState} from 'react';
import './DepositBlock.scss'
import {DepositCard} from '../DepositCard/DepositCard';

export const DepositBlock = () => {

    const [amount, setAmount] = useState<number>(0)

    const depositAmount = ( x: any=0): void => {
            let result = 0;
           let resultCount = result + x;
         setAmount(resultCount)
        alert(`$ ${amount} будет зачислено вам на счет`)
    }

    const resetValue = () => {
        setAmount(0);
    }

    return (
        <div className='depositBlock'>
                <select className='choicePaymentMethod'>
                    <option onClick={resetValue}>Банковская карта</option>
                    <option onClick={resetValue}>Биткоин</option>
                    <option onClick={resetValue}>Выставить счет</option>
                </select>
            <div className='depositCards'>
                <DepositCard addCount={50} getCount={100} />
                <DepositCard addCount={100} getCount={200} />
                <DepositCard addCount={500} getCount={1000} />
            </div>
            <div>
                <div className='resultText'>
                    {'$'} {amount} будет зачислено вам на счет
                </div>
            </div>
            <div>
                <button className='countButton'  onClick={depositAmount} >Пополнить</button>
            </div>
        </div>
    )
}
