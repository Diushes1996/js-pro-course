import { connect } from 'react-redux';
import { addTodo, setDone, setTab } from '../../store/todosActionCreators';
import { getTabTodos } from '../../store/todosSelectors';
import { TodoComponent } from './TodoComponent';

const mapStateToProps = (state) => ({
  todos: getTabTodos(state),
  tab: state.tab,
});

const actionCreators = {
  addTodo,
  setDone,
  setTab,
};

export const Todo = connect(mapStateToProps, actionCreators)(TodoComponent);
