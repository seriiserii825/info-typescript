interface IUser {
  name: string;
  age: number;
}

interface IMessage {
  id: number;
  text: string;
}

interface IState<T> {
  loading: boolean;
  error: Error | null;
  data: T;
}

type IUserState = IState<IUser>;

type IMessageState = IState<IMessage>;

const message_state: IMessageState = {
  data: {
    id: 1,
    text: "Hello",
  },
  loading: false,
  error: null,
};

// random element ====================================================
function getRandomElement<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

const numbers = [1, 2, 3, 4, 5];
const random_number = getRandomElement(numbers);

// generic promise ====================================================
async function fakeRequest() {
  return 2;
}

const request: Promise<number> = fakeRequest();

//generic object ====================================================
type IObj = {
  [key: string]: number;
};

// or
type IObj2 = Record<string, number>;

// funciton params ====================================================
function len<T extends {length: number}>(collection: T): number {
  return collection.length;
}

const r1 = len([1, 2, 3]);
const r2 = len("hello");
const r3 = len(3); // error


