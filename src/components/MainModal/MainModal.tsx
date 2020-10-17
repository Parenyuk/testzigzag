import React from 'react';
import { Percents } from './Percents/Percents';
import {Timer} from './Timer/Timer';
import closeButton from './../../assets/images/close.png'
import './MainModal.scss'
import { Modal } from './Modal';
import cardImg from './../../assets/images/card.png'
import {DepositBlock} from './DepositBlock/DepositBlock';


type PropsType = {
    setIsShown: (value: boolean) => void
    title: string
}

export const MainModal = ({title, setIsShown}: PropsType): React.ReactElement => {

    return (
        <div className='MainModal'>
        <Modal>
            <Percents/>
            <Timer hours={0} minutes={16} seconds={0} />
            <button className='closeButton' onClick={() =>setIsShown(false)} >
                <img alt={'#'} src={closeButton}  />
            </button>
            <div className='title'>
                {title}
            </div>
            {/*<img alt={'#'} src={cardImg} />*/}
            <DepositBlock/>
            <div className='noteText'>
                При пополнение счета с банковской карты списание средств происходит по курсу банка клиента
            </div>
            <div className='detailsText'>
                Подробнее
            </div>
        </Modal>
        </div>
    )
}
