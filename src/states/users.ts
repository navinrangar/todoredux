import { AnyAction, Reducer } from "redux";
import { USER_ADD } from "../actions/users";
import { userType } from "../models/userType";

export type UserState = {
  [id: number]: userType;
};

export const initialUserState = {};

export const userReducer: Reducer<UserState> = (
  userState = initialUserState,
  action: AnyAction
) => {
  switch (action.type) {
    case USER_ADD: {
      const user: userType = action.payload;
      return { ...userState, [user.id]: user };
    }

    default:
      return userState;
  }
};
