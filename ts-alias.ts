type User = {
  id: number;
  title: string;
  age: number;
};

type Role = {
  id: number;
};

type UserWithRole = User & Role;

let user: UserWithRole = {
  id: 4,
  title: "some",
  age: 32,
};
// if we have id intersection need to create object type
//
type UserWithRoleObject = {
  user: User;
  role: Role;
};
