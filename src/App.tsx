import React from 'react'
import { SideBar } from './component/sideBar/SideBar'
import './App.sass'
import { ContentSection } from './component/conententSection/ContentSection'

function App() {
	return (
		<div className='wrapper'>
			<div className='container'>
				<div>
					<SideBar />
					<ContentSection />
				</div>
			</div>
		</div>
	)
}

export default App
