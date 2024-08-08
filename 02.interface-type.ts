interface UserA {
  name: string;
  age: number;
}

type UserB = {
  name: string;
  age: number;
};

// function type
type TSum = (a: number, b: number) => number;

const sum: TSum = (a, b) => a + b;


// Union type
type A = {
  name: string;
}

type B = {
  age: number;
}

type C = A | B;

const user1: C = {
  name: 'Hello',
  age: 10
}

// Interface VS Type

interface IUser {
  name: string;
  age: number;
}

type TNullable<T> = T | undefined | null;

const user3: TNullable<IUser> = {
  name: 'Hello',
  age: 10
}
