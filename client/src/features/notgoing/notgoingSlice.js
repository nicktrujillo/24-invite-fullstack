import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const notgoingSlice = createSlice({
  name: 'notgoing',
  initialState: {
    notgoing: [],
  },
  reducers: {
    displayNotgoing: (state, action) => {
        state.notgoing = action.payload;
    },
  },
});

export const { displayNotgoing } = notgoingSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const notgoingAsync = () => (dispatch) => {
    axios
      .get("/api/notgoing")
      .then((r) => dispatch(displayNotgoing(r.data)));
  };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectNotgoing = state => state.notgoing.notgoing;

export default notgoingSlice.reducer;