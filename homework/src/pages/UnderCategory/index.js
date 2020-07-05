import { connect } from "react-redux";
import {
  addUnderCategory,
  deleteUnderCategory,
} from "../../Store/UnderCategory/underCategoryActionCreators";
import { UnderCategoryComponent } from "./UnderCategoryComponent";

const mapStateToProps = (state) => ({
  underCategories: state.underCategories.list,
});

const actionCreators = {
  addUnderCategory,
  deleteUnderCategory,
};

export const UnderCategory = connect(
  mapStateToProps,
  actionCreators
)(UnderCategoryComponent);
