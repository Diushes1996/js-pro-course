import React from 'react';
import { Tab } from '../Store/Todo/todosReducer';

export const SelectTab = ({ setTab, tab }) => (
  <div onChange={(e) => setTab(e.target.value)}>
    Текущие
    <input type="radio" value={Tab.actual} checked={tab === Tab.actual}></input>
    Выполненные
    <input type="radio" value={Tab.done} checked={tab === Tab.done}></input>
  </div>
);
