import React from 'react'
import ReactDOM from 'react-dom'
import './global.sass'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { store } from './component/features/Note/models/store'
import './backend/index'

ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
	document.getElementById('root')
)
