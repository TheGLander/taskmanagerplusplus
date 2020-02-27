import React from "react"
import styles from "../styles"
export default class AcButton extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<span {...this.props} style={styles.button}>
				{this.props.icon}
			</span>
		)
	}
}
