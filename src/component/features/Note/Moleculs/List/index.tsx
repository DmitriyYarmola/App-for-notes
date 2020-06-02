import React from 'react'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../models/store'
import { Route } from 'react-router-dom'
import { Case } from '../../Organisms/Case/index'

export const List = () => {
	const notes = useSelector((state: AppStateType) => state.notesReducer.notes)
	const notesContentList = notes.map((note) => (
		<Route
			path={`/${note.id}`}
			exact
			key={note.id}
			render={() => <Case title={note.title} content={note.content} id={note.id} />}
		/>
	))

	return <>{notesContentList}</>
}
