import { types, getSnapshot } from "mobx-state-tree";

export const User = types.model({
  name: types.string,
});

const john = User.create({ name: "John" });

console.log("John: ", getSnapshot(john));
