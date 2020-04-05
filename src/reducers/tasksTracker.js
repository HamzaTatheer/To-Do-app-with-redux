export default (
  state = {
    tasks: [],
    count: 0,
  },
  action,
) => {
  switch (action.type) {
    case 'add_task': {
      return {
        tasks: state.tasks.concat({
          id: state.count + 1,
          task: action.payload,
          completed: false,
        }),
        count: state.count + 1,
      };
    }

    case 'mark_task_completed': {
      let tasksCopy = [...state.tasks];
      tasksCopy[action.payload - 1].completed = true;
      return {
        tasks: tasksCopy,
        count: state.count,
      };
    }

    case 'mark_task_not_completed': {
      let tasksCopy = [...state.tasks];
      tasksCopy[action.payload - 1].completed = false;
      return {
        tasks: tasksCopy,
        count: state.count,
      };
    }

    default:
      return state;
  }
};
