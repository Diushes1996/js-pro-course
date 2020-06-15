import React, { useState } from 'react';

export const SecondComponent = ({ counter, increment, decrement, sum, hi }) => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <button onClick={increment}>Inc</button>
            <button onClick={decrement}>Dec</button>
            <form action="">
                <input type="number" onChange={onChange} />
                <button onClick={(e) => {
                    e.preventDefault();
                    sum(Number(value))}}>Plus</button>
            </form>
            {counter}
            {hi}
        </div>
    )
}