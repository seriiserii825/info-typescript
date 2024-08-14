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
