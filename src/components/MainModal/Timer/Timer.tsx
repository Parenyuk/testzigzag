import React from 'react';
import timer from '../../../assets/images/Timer.png';
import './Timer.scss'

type PropsType = {
    hours: number
    minutes: number
    seconds: number
}

export const Timer = ({ hours, minutes, seconds }: PropsType) => {
    const [time, setTime] = React.useState<any>({hours, minutes, seconds});

    const tick = () => {
        if (time.hours == 0 && time.minutes == 0 && time.seconds == 0) alert('время сессии закончилось');
        else if (time.minutes == 0 && time.seconds == 0) {
            setTime({
                hours: time.hours - 1,
                minutes: 59,
                seconds: 59
            });
        } else if (time.seconds == 0) {
            setTime({
                hours: time.hours,
                minutes: time.minutes - 1,
                seconds: 59
            });
        } else {
            setTime({
                hours: time.hours,
                minutes: time.minutes,
                seconds: time.seconds - 1
            });
        }
    };
    React.useEffect(() => {
        let timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });


    return (
        <div className='timer'>
            <img alt='#' src={timer} />
            {/*/!*{`00:15:54`}*!/*/}
            {/*{`${'00'}:${'00'}:${'00'}`}*/}

            <p>{`${time.hours.toString().padStart(2, '0')}:${time.minutes
                .toString()
                .padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</p>
        </div>
    )
}
