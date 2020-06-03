import React from "react"
import AcButton from "./AcButton"
import { connect } from "react-redux"
import { removeTask } from "../redux/actions"
class Task extends React.Component {
	render() {
		return (
			<li>
				{this.props.value}{" "}
				<AcButton
					onClick={() => this.props.removeTask(this.props.id)}
					icon="✅"
				/>
			</li>
		)
	}
}
const mapDispatchToProps = (dispatch) => ({
	removeTask: (id) => dispatch(removeTask(id)),
})
export default connect(() => ({}), mapDispatchToProps)(Task)
