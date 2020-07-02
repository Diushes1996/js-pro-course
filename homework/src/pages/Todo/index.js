import { connect } from 'react-redux';
import { addTodo, setDone, setTab, deleteTodo } from '../../Store/Todo/todosActionCreators';
import { getTabTodos } from '../../Store/Todo/todosSelectors';
import { TodoComponent } from './TodoComponent';

const mapStateToProps = (state) => ({
  todos: getTabTodos(state),
  tab: state.tab,
});

const actionCreators = {
  addTodo,
  deleteTodo,
  setDone,
  setTab,
};

export const Todo = connect(mapStateToProps, actionCreators)(TodoComponent);
