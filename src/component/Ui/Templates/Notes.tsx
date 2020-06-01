import React, { useEffect } from 'react'
import { SideBar } from '../Organisms/SideBar'
import { NoteContent } from '../Organisms/NoteContent'
import { useSelector, useDispatch } from 'react-redux'
import { AppStateType } from '../../../store/store'
import { Actions } from '../../../store/actions'

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
