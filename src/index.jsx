import React from "react"
import { render } from "react-dom"
import App from "./components/App"
import { Provider } from "react-redux"
import { createStore } from "redux"
import masterReducer from "./redux/reducers"
const store = createStore(masterReducer)
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
