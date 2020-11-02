import { types } from "mobx-state-tree";

export const Todo = types
  .model({
    name: types.string,
    done: false,
  })
  .actions((self) => ({
    setName(newName: string): void {
      self.name = newName;
    },
    toggle(): void {
      self.done = !self.done;
    },
  }));
