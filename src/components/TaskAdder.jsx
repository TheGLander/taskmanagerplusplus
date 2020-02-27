import React from "react"
import keycode from "keycode"
import styles from "../styles"
import { newTask } from "../redux/actions"
import { connect } from "react-redux"
class TaskAdder extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			text: "",
			taskList: props.taskList
		}
		this.handleChange = this.handleChange.bind(this)
	}
	appendTask(task) {
		this.props.newTask(task)
		this.setState({ text: "" })
	}
	handleChange(e) {
		this.setState({ text: e.target.value })
	}
	render() {
		let input = (
			<input
				style={styles.inline}
				type="text"
				placeholder="Enter tasks here"
				onKeyUp={e => {
					if (keycode(e) === "enter") {
						this.appendTask(input.props.value)
					}
				}}
				value={this.state.text}
				onChange={this.handleChange}
			/>
		)
		this.input = input
		let addButton = (
			<button
				style={styles.inline}
				onClick={() => {
					this.appendTask(input.props.value)
				}}
			>
				Add task
			</button>
		)

		return (
			<div>
				{input}
				{addButton}
			</div>
		)
	}
}
const mapDispatchToProps = dispatch => ({
	newTask: name => dispatch(newTask(name))
})
export default connect(() => ({}), mapDispatchToProps)(TaskAdder)
