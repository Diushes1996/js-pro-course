import { connect } from 'react-redux';
import { TodoComponent } from './TodoComponent';

const mapStateToProps = (state) => ({
    todos: getTabTodos(state),
    tab: state.tab,
});

export const Todo = connect(mapStateToProps, actionCreators)(TodoComponent);