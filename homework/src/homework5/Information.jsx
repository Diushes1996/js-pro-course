import React from 'react';
import {data} from './CoronaCountry.json';

export const Information = () => {
    const row = [<li>{data.rows[0].country}</li>, <li>rty</li>]
    return (
        <ul>
            {row}
        </ul>
    )
}

