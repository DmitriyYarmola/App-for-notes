import React from 'react'
import { MenuItem } from '../Atoms/MenuItem'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../features/Note/models/store'

type PropsType = {}

export const MenuList: React.FC<PropsType> = () => {
	const notes = useSelector((state: AppStateType) => state.notesReducer.notes)

	const notesList = notes.map((note) => {
		return <MenuItem id={note.id} title={note.title} navTo={note.id} />
	})

	return <>{notesList}</>
}
