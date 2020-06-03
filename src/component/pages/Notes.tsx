import React, { useEffect } from 'react'
import { SideBar } from '../features/SideBar/index'
import { NoteContent } from '../features/Note/Templates/Content/index'
import { useSelector, useDispatch } from 'react-redux'
import { AppStateType } from '../features/Note/models/store'
import { Actions } from '../features/Note/models/actions'
import './style.sass'

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
			{' '}
			<SideBar /> <NoteContent />{' '}
		</div>
	)
}
