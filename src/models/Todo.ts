import { types } from "mobx-state-tree";

export const Todo = types.model({
  name: types.string,
  done: false,
});
