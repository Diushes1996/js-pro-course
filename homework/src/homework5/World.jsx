import React from 'react';
import {Link, Route} from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Country } from './Country';

export const World = () => {

    return(
    <div>
        <button>
            <Link to='/country'>
                Список стран
            </Link>
        </button>
        <button>
            <Link to='/'>
                На главную
            </Link>
        </button>
        
        <Route path='/country' render={() => <Country />} />
    </div>
    )
}