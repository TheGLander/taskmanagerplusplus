import React from "react"
import { render } from "react-dom"
import App from "./components/App"
import { Provider } from "react-redux"
import { createStore } from "redux"
import masterReducer from "./redux/reducers"
const store = createStore(
	masterReducer,
	JSON.parse(localStorage.getItem("tasks")) || {}
)
store.subscribe(() => {
	localStorage.setItem("tasks", JSON.stringify(store.getState()))
})
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
