import React from 'react'
import { SideBar } from './component/Organisms/SideBar'
import './App.sass'
import { NoteContent } from './component/Organisms/NoteContent'

function App() {
	return (
		<div className='wrapper'>
			<div className='container'>
				<div>
					<SideBar />
					<NoteContent />
				</div>
			</div>
		</div>
	)
}

export default App
