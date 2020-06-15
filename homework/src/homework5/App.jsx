import React, {useState, useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Information} from './Information';
import { Sidebar } from './Sidebar';

export const App = () => {
    const [list, setList] = useState('')

    const addList = () => {
        console.log(list)
    }

    useEffect(() => {
        const getData = async () => {
            const responce = await fetch('http://localhost:3004/data');
            const data = await responce.json();
            setList(data);
        };
        getData();
    }, []);
   
    return (
        <BrowserRouter>
            <Sidebar/>
            <Information/>
            <button onClick={() => addList()}>+</button>
        </BrowserRouter>
    )
}