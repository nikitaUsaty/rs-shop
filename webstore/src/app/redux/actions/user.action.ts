import { createAction, props } from '@ngrx/store';
import { IUserModel } from 'src/app/shared/models/user.interface';

enum CustomActionTypes {
  addUser = 'Add User',
  deleteUser = 'Delete User',
}

export const addUser = createAction(
  CustomActionTypes.addUser,
  props<{ user: IUserModel }>()
);

export const deleteUser = createAction(CustomActionTypes.deleteUser);
