import React from 'react';
import { Link, Route, Switch} from "react-router-dom";
import { FormTask } from './FormTask';

export class Routing extends React.Component{
    render () {
      return<>
        <Link to="/Form">Добавить зание</Link>
        <Link to="/Active-tasks">Текущие задачи</Link>
        <Link to="/Completed-tasks">Выполненные задачи</Link>
        <Link to="/Deleted-tasks">Удаленные задачи</Link>
        <Switch>
          <Route render = {(props)=><FormTask path="/Form"/>}></Route>
          <Route component={ActiveTasks} path="/Active-tasks"></Route>
          <Route component={CompletedTasks} path="/Completed-tasks"></Route>
          <Route component={DeletedTasks} path="/Deleted-tasks"></Route>
        </Switch>
      </>
    }
}

const ActiveTasks = (props) => {
    return <div className="active-tasks">Текущие задачи</div>
}

const CompletedTasks = (props) => {
    return <div className="active-tasks">Выполненные задачи</div>
}

const DeletedTasks = (props) => {
    return <div className="active-tasks">Удаленные задачи</div>
}