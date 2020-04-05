export const addNewTask = (Task) => {
  return {
    type: 'add_task',
    payload: Task,
  };
};

export const markTaskCompleted = (id) => {
  return {
    type: 'mark_task_completed',
    payload: id,
  };
};

export const markTaskNotCompleted = (id) => {
  return {
    type: 'mark_task_not_completed',
    payload: id,
  };
};

export const showAll = () => {
  return {
    type: 'show_all',
    payload: 'show_all',
  };
};

export const showCompleted = () => {
  return {
    type: 'show_completed',
    payload: 'show_completed',
  };
};

export const showPending = () => {
  return {
    type: 'show_pending',
    payload: 'show_pending',
  };
};
