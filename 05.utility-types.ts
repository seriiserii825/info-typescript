// readonly can't be changed or mutated ====================================

type TTask = {
  id: number;
  title: string;
  isCompleted?: boolean;
  completedDate?: Date;
};

type TReadOnlyTask = Readonly<TTask>;

const task: TReadOnlyTask = {
  id: 1,
  title: "Buy Milk",
};

function completeTask(task: TTask): void {
  task.isCompleted = true;
  task.completedDate = new Date();
}

completeTask(task);

// partial make all properties optional ====================================
type TPartialTask = Partial<TTask>;

function updateTask(task: TTask, updates: TPartialTask): TTask {
  return {
    ...task,
    ...updates,
  };
}

// can use just keys from TTask
updateTask(task, { title: "Buy Milk and Bread" });

// Required (make all properties required) ====================================
function getCompletedTasks(tasks: TTask[]) {
  return tasks.filter(
    (task) => task.isCompleted && task.completedDate
  ) as Required<TTask>[];
}

const completed_tasks = getCompletedTasks([task]);
// all properties are required
completed_tasks[0].isCompleted;

// Pick (select properties from object) ====================================
type TUserSchema = {
  id: number;
  name: string;
  email: string;
  password: string;
};

// select only id and name
type TPickUser = Pick<TUserSchema, "id" | "name">;

// Omit (remove properties from object) ====================================
// remove password from TUserSchema
// Omit<TUserSchema, "password"> is same as Pick<TUserSchema, "id" | "name" | "email">
type TOmitUser = Omit<TUserSchema, "password">;

// Record (create object with keys and values) ====================================
type TObject = Record<string, string>;
type TUser = Record<"id" | "name" | "email", string>;

type ThemeParams = {
  fontSize: string;
  color: string;
};

type ThemeStyle = "light" | "dark";

type Theme = Record<ThemeStyle, ThemeParams>;

const theme: Theme = {
  light: {
    color: "white",
    fontSize: "16px",
  },
  dark: {
    color: "black",
    fontSize: "16px",
  },
};

// Exclude (remove types from union) ====================================
type TStatus = "active" | "inactive" | "pending";
type TActiveStatus = Exclude<TStatus, "inactive" | "pending">;

// Extract (extract types from union) ====================================
// same as Exclude but opposite, only get the type that is passed
type TActiveStatus2 = Extract<TStatus, "active">;

type TUser1 = {
  id: number;
  name: string;
  email: string;
};

type TUser2 = {
  id: number;
  name: string;
  password: string;
};

// get common properties from TUser1 and TUser2
type TExt = Extract<keyof TUser1, keyof TUser2>

// NonNullable (remove null and undefined from type) ====================================
// remove null and undefined from string | null | undefined
type TNonNullable = NonNullable<string | null | undefined>;

type TTask3 = {
  id: number;
  title: string;
  isCompleted: Date | null;
};

function getTaskDate(date: TTask3['isCompleted']): NonNullable<TTask3["isCompleted"]> {
  if (!date) {
    return new Date();
  }
  return date;
}

const task_date = getTaskDate(null);

// ReturnType (get return type of function) ====================================
function getInt(n: string) {
  return parseInt(n);
}

type TGetInt = ReturnType<typeof getInt>;

function createTask(title: string) {
  return {
    id: Math.random(),
    title,
    isCompleted: false,
  };
}

type TCreateTask = ReturnType<typeof createTask>;

// Parameters (get parameters of function) ====================================
type TCreateTaskParams = Parameters<typeof createTask>;

// Awaited (get return type of promise) ====================================
async function getTask() {
  return createTask("Buy Milk");
}

type TGetTask = Awaited<ReturnType<typeof getTask>>;



