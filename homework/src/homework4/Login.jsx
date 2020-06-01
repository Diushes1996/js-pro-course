import React, { useState } from 'react';
import { Link, Route, Switch} from "react-router-dom";

export function Login() {
    return(
        <div>
           <p>Hello world</p>
           <form>
               <label>
                   <input type="text"/>
                   <input type="text"/>
               </label>
           </form>
           <button>Войти</button>
           <button >Зарегистрироваться</button>
       </div>
    )
}