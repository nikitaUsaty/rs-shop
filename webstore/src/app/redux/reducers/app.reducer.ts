import { ActionReducerMap } from '@ngrx/store';

import { userReducer } from './user.reducer';

export const appReducers: ActionReducerMap<any> = {
  user: userReducer,
};
