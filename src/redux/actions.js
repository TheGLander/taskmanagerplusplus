import { generate } from "shortid/lib"

export const newTask = name => ({
	type: "NEW_TASK",
	id: generate(),
	name
})

export const removeTask = id => ({
	type: "REMOVE_TASK",
	id
})
export const editTask = id => ({
	type: "EDIT_TASK",
	id
})

export const saveEdit = () => ({
	type: "SAVE_EDIT"
})
