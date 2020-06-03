import React from "react"
import TaskAdder from "./TaskAdder"
import Task from "./Task"
import { connect } from "react-redux"

class TaskList extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<ol>
					{this.props.tasks.map((task) => (
						<Task
							value={task.name}
							key={task.id}
							id={task.id}
							taskList={this}
						/>
					))}
				</ol>
				<TaskAdder />
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	tasks: state.tasks,
})
console.log(mapStateToProps, TaskList)
export default connect(mapStateToProps)(TaskList)
