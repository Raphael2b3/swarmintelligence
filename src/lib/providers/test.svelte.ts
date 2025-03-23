export const test = {
	actions: {
		addTodo: (state: any, todo: any) => {
			state.todos.push(todo);
		}
	},
	todos: $state([{ id: 1, text: 'Create a store' }])
};
test.todos.push({ id: 2, text: 'Create a store' }); // react : doesnt update ui

test.todos = [...test.todos, { id: 2, text: 'Create a store' }]; // react : update ui
