import { configureStore } from '@reduxjs/toolkit';
import reducerMissions from './missions/missions';
import reducerRockets from './rockets/rockets';

const store = configureStore({
  reducer: {
    stMissions: reducerMissions,
    stRockets: reducerRockets,
  },
});

export default store;
