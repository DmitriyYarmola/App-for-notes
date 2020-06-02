import React, { useEffect } from 'react'
import { SideBar } from '../features/SideBar/index'
import { NoteContent } from '../Ui/Templates/ContentNote/index'
import { useSelector, useDispatch } from 'react-redux'
import { AppStateType } from '../features/Note/models/store'
import { Actions } from '../features/Note/models/actions'

export const Notes = () => {
	const notes = useSelector((state: AppStateType) => state.notesReducer.notes)
	const dispatch = useDispatch()

	useEffect(() => {
		const items = localStorage.getItem('notes')
		if (items) dispatch(Actions.getNote(JSON.parse(items)))
	}, [dispatch])

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes))
	}, [notes])

	return (
		<div className=''>
			<SideBar />
			<NoteContent />
		</div>
	)
}
