import { types } from "mobx-state-tree";
import { Todo, User } from "./models";

export const RootStore = types
  .model({
    users: types.map(User),
    todos: types.optional(types.map(Todo), {}),
  })
  .actions((self) => ({
    addTodo(id: string, name: string) {
      self.todos.set(id, Todo.create({ name }));
    },
  }));

export const store = RootStore.create({
  users: {},
});
