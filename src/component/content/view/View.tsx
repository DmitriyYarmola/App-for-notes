import React, { useState } from 'react'
import { Button } from 'antd'
import { ModalWindow } from '../../common/modal/modal'
import { useDispatch } from 'react-redux'
import { Actions } from '../../../store/actions'

type PropsType = {
	title: string
	content: string
	setEditMode: React.Dispatch<React.SetStateAction<boolean>>
	id: string
}

export const View: React.FC<PropsType> = ({
	title,
	content,
	setEditMode,
	id,
}) => {
	/* ===UseState=== */
	const [visibleModal, setVisibleModal] = useState(false)
	const [titleModal, setTitleModal] = useState('')
	const [contentModal, setContentModal] = useState('')

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
	}

	return (
		<div className=''>
			<div className='option-button'>
				<Button
					type='primary'
					danger
					onClick={onDeleteNote}
				>
					Delete
				</Button>
				<Button type='primary' onClick={onEditNote}>
					Edit
				</Button>
			</div>
			<div>
				<h1>{title}</h1>
				<div className=''>{content}</div>
			</div>
			<ModalWindow
				visibleModal={visibleModal}
				setVisibleModal={setVisibleModal}
				title={titleModal}
				contentModal={contentModal}
				accessDelete={accessDelete}
			/>
		</div>
	)
}
