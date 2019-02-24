# todo_list:

/api/v1/todos/

[{
	task: "..."  = string
	priority 5  =integer
	category: "..." =string
	is_complete: false
	due_at: xxxxxxx = integer
}]
	
	
/api/v1/todos/priority/:priority

/api/v1/todos/category/:category

/api/v1/todos/complete/:is_complete

Routes:
/#/completed - completed only

/#/priority/5 - priority 5 tasks

/#/category/home - 'home category'

File structure:
root ---client---actions/index.js
					 reducers/index.js, todos.js
					 components/App.jsx
			/index.js
	---server----reducers/todo.js
					DB/todo.js
			/server.js, index.js

![todo Plan](/images/todoPlan.jpg)
