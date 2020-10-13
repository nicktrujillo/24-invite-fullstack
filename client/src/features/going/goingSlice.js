import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const goingSlice = createSlice({
  name: 'going',
  initialState: {
    going: [],
  },
  reducers: {
    displayGoing: (state, action) => {
        state.going = action.payload;
    },
  },
});

export const { displayGoing } = goingSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const goingAsync = () => (dispatch) => {
    axios
      .get("/api/going")
      .then((r) => dispatch(displayGoing(r.data)));
  };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectGoing = state => state.going.going;

export default goingSlice.reducer;