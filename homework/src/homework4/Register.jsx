import React from 'react';
import { Link, Route, Switch} from "react-router-dom";

export function Register() {
    return (
        <div>
            <form>
                <label>
                    Логин:
            <input type="text" />
                </label>
                <label>
                    Пароль:
            <input type="text" />
                </label>
                <label>
                    Имя:
            <input type="text" />
                </label>
                <label>
                    Дата рождения:
            <input type="text" />
                </label>
            </form>
            <button>Зарегистрироваться</button>
            <button>Выйти</button>
        </div>
    )
}