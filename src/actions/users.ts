export const USER_ADD = "add user";

let nextId = 0;

export const userAddAction = (fName: string, lName: string) => {
  return {
    type: USER_ADD,
    payload: { id: ++nextId, fName, lName },
  };
};
