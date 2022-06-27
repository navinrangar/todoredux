import { State } from "../store";

export const userListSelector = (s: State) => s.users.filter((u) => u.id);
