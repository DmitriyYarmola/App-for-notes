import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Actions } from '../models/actions'
import { message } from 'antd'
import { useHistory } from 'react-router-dom'
import { Viewer } from '../../../Ui/Organisms/Content/Viewer/index'
type PropsType = {
	title: string
	content: string
	setEditMode: React.Dispatch<React.SetStateAction<boolean>>
	id: string
}

export const View: React.FC<PropsType> = ({ title, content, setEditMode, id }) => {
	/* ===UseState=== */
	const [visibleModal, setVisibleModal] = useState(false)
	const [titleModal, setTitleModal] = useState('')
	const [contentModal, setContentModal] = useState('')

	/* ===UseHistory=== */
	const history = useHistory()

	/* ===UseDispatch=== */
	const dispatch = useDispatch()

	const onDeleteNote = () => {
		setTitleModal('Delete the note')
		setContentModal('You want to delete this note?')
		setVisibleModal(true)
	}

	const onEditNote = () => {
		setEditMode(true)
	}

	const accessDelete = () => {
		dispatch(Actions.deleteNote(id))
		setVisibleModal(false)
		message.error('The note has been deleted')
		history.goBack()
	}

	return (
		<Viewer
			title={title}
			content={content}
			onDelete={onDeleteNote}
			onEdit={onEditNote}
			visibleModal={visibleModal}
			setVisibleModal={setVisibleModal}
			titleModal={titleModal}
			contentModal={contentModal}
			accessDelete={accessDelete}
		/>
	)
}
