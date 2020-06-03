const tasks = (state = [], action) => {
	switch (action.type) {
		case "NEW_TASK":
			return [
				...state,
				{
					id: action.id,
					name: action.name,
				},
			]
		case "REMOVE_TASK": {
			let newState = JSON.parse(JSON.stringify(state))
			newState.splice(
				state.findIndex((val) => val.id === action.id),
				1
			)
			return newState
		}
		case "EDIT_TASK": {
			let newState = JSON.parse(JSON.stringify(state))
			newState[state.findIndex((val) => val.id === action.id)].name =
				action.newName
			return newState
		}
		default:
			return state
	}
}
export default tasks
