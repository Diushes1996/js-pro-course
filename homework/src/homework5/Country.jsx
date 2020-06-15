import React from 'react';
import { Link, Route } from 'react-router-dom';
import { World } from './World';
import { Sidebar } from './Sidebar';

export const Country = () => {

    return (
        <div>
            <button>
                <Link to='/world'>
                    Мировая статистика
                </Link>
            </button>
            <button>
                <Link to='/'>
                    На главную
                </Link>
            </button>
            
            <Route path='/world' render={() => <World />} />
        </div>
    )
}