import React from "react"
import AcButton from "./AcButton"
import { connect } from "react-redux"
import { removeTask, editTask } from "../redux/actions"
import styles from "../styles"
class Task extends React.Component {
	constructor(props) {
		super(props)
		this.state = { editing: false, value: props.value }
		this.handleChange = this.handleChange.bind(this)
		this.toggleEditing = this.toggleEditing.bind(this)
	}
	handleChange(event) {
		this.props.editTask(this.props.id, event.target.value)
		this.setState({ value: event.target.value })
	}
	toggleEditing(event) {
		if (event) event.preventDefault()
		this.setState((state) => ({
			editing: !state.editing,
		}))
	}
	render() {
		let value
		if (!this.state.editing) value = this.props.value
		else
			value = (
				<form onSubmit={this.toggleEditing} style={styles.inline}>
					<input
						type="text"
						placeholder="Modify your task here"
						value={this.state.value}
						onChange={this.handleChange}
					></input>
				</form>
			)
		return (
			<li>
				{value}{" "}
				<AcButton
					onClick={() => this.props.removeTask(this.props.id)}
					icon="✅"
				/>
				<AcButton onClick={this.toggleEditing} icon="✏️" />
			</li>
		)
	}
}
const mapDispatchToProps = (dispatch) => ({
	removeTask: (id) => dispatch(removeTask(id)),
	editTask: (id, newName) => dispatch(editTask(id, newName)),
})
export default connect(() => ({}), mapDispatchToProps)(Task)
