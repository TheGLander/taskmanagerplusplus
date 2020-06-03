import React from "react"
import { newTask } from "../redux/actions"
import { connect } from "react-redux"
class TaskAdder extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			text: "",
		}
		this.handleChange = this.handleChange.bind(this)
		this.appendTask = this.appendTask.bind(this)
	}
	appendTask(event) {
		event.preventDefault()
		this.props.newTask(this.state.text)
		this.setState({ text: "" })
	}
	handleChange(e) {
		this.setState({ text: e.target.value })
	}
	render() {
		return (
			<form onSubmit={this.appendTask}>
				<input
					type="text"
					placeholder="Enter tasks here"
					value={this.state.text}
					onChange={this.handleChange}
				/>
				<button>Add task</button>
			</form>
		)
	}
}
const mapDispatchToProps = (dispatch) => ({
	newTask: (name) => dispatch(newTask(name)),
})
export default connect(() => ({}), mapDispatchToProps)(TaskAdder)
