import request from "superagent";

export function getTodos() {
  return request.get("./api/v1/todos")
    .then(res => res.body);
}

export function sendTodo(todo) {
  return request.post('/api/v1/todos')
    .send(todo)
    .then(res => res.body)
}