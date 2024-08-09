interface IUser {
  name: string;
  age: number;
}

interface IMessage {
  id: number;
  text: string;
}

interface IUserState {
  loading: boolean;
  error: Error | null;
  data: IUser;
}

interface IMessageState {
  loading: boolean;
  error: Error | null;
  data: IMessage;
}

function func1<T>(n: T) {
  return n;
}

const func1_const = func1(10);
