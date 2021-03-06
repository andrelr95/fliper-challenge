import { configureStore } from '@reduxjs/toolkit';

import wealthSummary from './modules/WealthSummary/index.store';

export const store = configureStore({
  reducer: {
    wealthSummary,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
