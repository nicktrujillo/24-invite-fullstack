import { configureStore } from '@reduxjs/toolkit';
import inviteReducer from '../features/invite/inviteSlice';
import goingReducer from '../features/going/goingSlice'
import notgoingReducer from '../features/notgoing/notgoingSlice'


export default configureStore({
  reducer: {
    invite: inviteReducer,
    going: goingReducer,
    notgoing: notgoingReducer,
  },
});
