import { getTodos as apiGetTodos, sendTodo as apiSendTodo } from "../api/todos";

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