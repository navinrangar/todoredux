import { State } from "../store";
import { createSelector } from "reselect";

const userStateSelector = (s: State) => s.todos;

export const fuserListSelector = createSelector(
  userStateSelector,
  (userState) =>
    Object.keys(userState)
      .map((userId) => userState[userId as any])
      .filter((u) => u.id)
);

/*
old style selectors

export const userListSelector = (s: State) =>
  Object.keys(s.users)
    .map((userId) => s.users[userId as any])
    .filter((u) => u.id);

*/
