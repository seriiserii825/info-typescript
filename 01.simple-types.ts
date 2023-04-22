let a = 10;
let b = 10.5;
let c = 10_000;

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  skills?: {
    design: boolean;
    frontend: boolean;
    backend: boolean;
  };
}

function getFullName(user: Person): string {
  return user.firstName + " " + user.lastName;
}

let user: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
};

interface Address {
  city: string;
}

interface Contacts {
  phone: string;
  email: string;
  address: Address;
}

interface User2 {
  officeId: number;
  isOpened: boolean;
  contacts: Contacts;
}

const user2 = {
  officeId: 45,
  isOpened: false,
  contacts: {
    phone: "+79100000000",
    email: "my@email.ru",
    address: {
      city: "Москва",
    },
  },
};
