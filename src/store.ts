import { types } from "mobx-state-tree";
import { Todo, User } from "./models";

export const RootStore = types.model({
  users: types.map(User),
  todos: types.optional(types.map(Todo), {}),
});

export const store = RootStore.create({
  users: {},
});
