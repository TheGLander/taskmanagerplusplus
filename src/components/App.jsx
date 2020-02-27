import { version } from "../../package.json"
import React from "react"
import TaskList from "./TaskList.jsx"
import styles from "../styles"
class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
				<h1 style={styles.inline}>Task Manager++ v.{version}</h1>
				<h2 style={styles.inline}>beta</h2>
				<h5 style={styles.inline}> by G lander</h5>
				<TaskList />
			</div>
		)
	}
}
export default App
