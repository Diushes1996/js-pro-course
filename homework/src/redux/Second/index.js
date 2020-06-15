import { SecondComponent } from './Second';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  counter: state.counter,
  hi: state.hi,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch({ type: 'INCREMENT' });
  },
  decrement: () => {
    dispatch({ type: 'DECREMENT' })
  },
  sum: (value) => {
    dispatch({type: 'SUM', value})
  }
});
// const mapDispatchToProps = {
//   increment: () => ({ type: 'INCREMENT' }),
// };

export const Second = connect(mapStateToProps, mapDispatchToProps)(SecondComponent);
