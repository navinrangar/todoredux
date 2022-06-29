export const ObjectKeys = <T>(object: Object) => {
  return Object.keys(object) as any as T[];
};

export const ObjectToArray = <T>(object: Object) => {
  return ObjectKeys<string>(object).map((k) => object as T[]);
};
