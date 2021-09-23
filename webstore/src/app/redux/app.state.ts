import { RouterReducerState } from '@ngrx/router-store';
import { IUserModel } from 'src/app/shared/models/user.interface';
import { ICategoriesModel } from '../shared/models/categories.interface';

export interface IUserState {
  user: IUserModel[];
}

export const initialUserState: IUserState = {
  user: [],
};

export interface IAppState {
  user: IUserState;
}

export const initialAppState: IAppState = {
  user: initialUserState,
};
