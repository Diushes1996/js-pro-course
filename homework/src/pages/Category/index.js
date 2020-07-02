import { connect } from 'react-redux';
import { addCategory, deleteCategory } from '../../Store/Category/categoryActionCreators';
import { CategoryComponent } from './CategoryComponent';

const mapStateToProps = (state) => ({
    categories: state.categories
  });
  
  const actionCreators = {
    addCategory,
    deleteCategory,
  };
  
  export const Todo = connect(mapStateToProps, actionCreators)(CategoryComponent);
