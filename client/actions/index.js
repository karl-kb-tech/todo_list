import { getTodos as apiGetTodos, sendTodo as apiSendTodo, priorityTodo as apiPriorityTodo } from "../api/todos";

export function getTodos() {
  return dispatch => {
    return apiGetTodos().then(todos => {
      dispatch(saveTodo(todos));
    });
  };
}

export function saveTodo(todos) {
  return {
    type: "SAVE_TODOS",
    todos: todos,
  };
}

export function sendTodo(todo) {
  return dispatch => {
    return apiSendTodo(todo)
      .then(result => {
        dispatch(getTodos())
      })
  }
}

export function priorityTodo(priority) {
  return dispatch => {
    return apiPriorityTodo(priority)
      .then(result => {
        dispatch(getTodos())
      })
  }
}