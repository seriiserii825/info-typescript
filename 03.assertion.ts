let value: unknown;

value = 'max'

// Assertion
const s = (value as string).toUpperCase();

// Assertion object
interface IUserData {
  name: string;
  age: number;
}

const user4 = {} as IUserData;

user4.name = 'Max';
user4.age = 20;


