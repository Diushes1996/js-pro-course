import { connect } from "react-redux";
import {
  addCategory,
  deleteCategory,
} from "../../Store/Category/categoryActionCreators";
import { CategoryComponent } from "./CategoryComponent";

const mapStateToProps = (state) => ({
  categories: state.categories.list,
});

const actionCreators = {
  addCategory,
  deleteCategory,
};

export const Category = connect(
  mapStateToProps,
  actionCreators
)(CategoryComponent);
