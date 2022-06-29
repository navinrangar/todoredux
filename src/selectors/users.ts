import { State } from "../store";

export const userListSelector = (s: State) =>
  Object.keys(s.users)
    .map((userId) => s.users[userId as any])
    .filter((u) => u.id);
