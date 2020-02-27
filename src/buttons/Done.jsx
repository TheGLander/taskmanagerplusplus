import AcButton from "../components/AcButton"
export default class DoneButton extends AcButton {
	constructor(props) {
		super(props)
		this.icon = "✅"
	}
	onClick(e, task) {
		task.taskList.state.tasks.splice(
			task.taskList.state.tasks.findIndex(
				val => val.props.id === task.props.id
			),
			1
		)
		task.taskList.forceUpdate()
	}
}
