import { connect } from "react-redux";
import {
  addCategory,
  deleteCategory,
  addUnderCategory,
  deleteUnderCategory,
} from "../../Store/Category/categoryActionCreators";
import { CategoryComponent } from "./CategoryComponent";

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  underCategories: state.categories.underCategories,
});

const actionCreators = {
  addCategory,
  deleteCategory,
  addUnderCategory,
  deleteUnderCategory,
};

export const Category = connect(
  mapStateToProps,
  actionCreators
)(CategoryComponent);
