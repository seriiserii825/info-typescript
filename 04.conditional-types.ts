type Test<T> = T extends string ? 'string' : 'number';

// interface
interface IUser {
  id: string;
}

interface IMessage {
  id: number;
}

function getId<T extends {id:any}>(obj: T):T extends {id: string} ? string : number{
  return obj.id;
}

const id = getId({} as IUser);

// never
type TNotFalsy<T = null> = T extends (false | '' | 0 | null | undefined) ? never : T;

const notFalsy: TNotFalsy<number> = 5;

// Filter
type TFilter<T, U> = T extends U ? T : never;

type TFilter1 = TFilter<string | number | boolean, number>;

// infer
type TInfer<T extends object = object> = T extends infer U ? U[keyof U] : never; 

type TInfer1 = TInfer<{id: 2, title: 'title'}>;

// infer for function
function test3(){
  return {
    id: 2,
    title: 'title'
  }
}

type TFunctionResult<T extends (...args: any) => any> = T extends (...args: any) => infer U ? U : never;
type R = TFunctionResult<typeof test3>;
//or typescript utility
type R1 = ReturnType<typeof test3>;

// infer get status
type TGetStatus<T> = T extends infer U ? U extends {status: any} ? U['status'] : null : null;

type TGetStatus1 = TGetStatus<{status: 'ok'}>;
type TGetStatus2 = TGetStatus<{status: ['new', 'some']}>;



