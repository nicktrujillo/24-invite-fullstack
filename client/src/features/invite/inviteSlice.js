import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const inviteSlice = createSlice({
  name: 'invite',
  initialState: {
    randomUser: {}
  },
  reducers: {
    displayRandomUser: (state, action) => {
        state.randomUser = action.payload;
    },
  },
});

export const { displayRandomUser } = inviteSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const randomUserAsync = () => (dispatch) => {
    axios
      .get("/api")
      .then((r) => dispatch(displayRandomUser(r.data)));
  };

  export const addToGoing = (randomUser) => (dispatch) => {
    axios.post("/api/markinvitee", {...randomUser, going: true}).then(r => {
        dispatch(randomUserAsync())
    })
  }

  export const addToNotgoing = (randomUser) => (dispatch) => {
    axios.post("/api/markinvitee", {...randomUser, going: false}).then(r => {
        dispatch(randomUserAsync())
    })
  }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectInvite = state => state.invite.randomUser;

export default inviteSlice.reducer;