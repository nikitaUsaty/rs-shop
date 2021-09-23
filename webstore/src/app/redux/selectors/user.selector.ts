import { createSelector } from '@ngrx/store';
import { IAppState, IUserState } from '../app.state';

const userState = (state: IAppState) => state.user;

export const selectUser = createSelector(
  userState,
  (state: IUserState) => state.user
);
