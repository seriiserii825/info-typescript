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

// type keys
const person = {
  name: 'Max',
  surname: 'Mustermann',
}

// const keys = Object.keys(person);
const keys = Object.keys(person) as Array<keyof typeof person>;

keys.forEach(k => {
  console.log(person[k]);
})

// type json
type TErrorMessage = string | string[] | Error;
const apiError: TErrorMessage = JSON.parse(JSON.stringify('[]'));

const formatted_message = (apiError as string[]).map(i => i.toUpperCase());

// type const readonly
const skills = ['JS', 'TS', 'React'];

const test = {
  name: 'Max',
  age: 20,
  skills,
} as const;

// can push
test.skills.push('Node.js');


const test2 = {
  name: 'Max',
  age: 20,
  skills: ['JS', 'TS', 'React']
} as const;

// can't push
// test2.skills.push('Node.js');

type U = typeof test;

// const array can't push or pop
const months = ['January', 'February', 'March'] as const;

for (const month of months) {
  console.log(month);
}
