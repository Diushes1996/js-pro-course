import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/world">Мировая статистика</Link>
    </li>
    <li>
      <Link to="/country">Статистика по странам</Link>
    </li>
  </ul>
);