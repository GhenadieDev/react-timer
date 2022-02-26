import React from 'react';

import './Timer.scss';

import { Hours } from '../Hours/Hours';
import { Minutes } from '../Minutes/Minutes';
import { Seconds } from '../Seconds/Seconds';

export const Timer = () => {

    return(
        <div className='timer'>
            <Hours />
            <Minutes />
            <Seconds />
        </div>
    )
}