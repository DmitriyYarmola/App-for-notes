import React, { useState } from 'react'
import { Modal } from '../../../Molecules/Modal'
import { Button } from '../../../Atoms/Button'
import { useDispatch } from 'react-redux'
import { Actions } from '../../../../store/actions'
import './view.sass'

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
					type={'primary'}
					onClick={onDeleteNote}
					content={'Delete'}
					danger={true}
				/>
				<Button
					type={'primary'}
					onClick={onEditNote}
					content={'Edit'}
					danger={false}
				/>
			</div>
			<div>
				<h1>{title}</h1>
				<div className=''>{content}</div>
			</div>
			<Modal
				visibleModal={visibleModal}
				setVisibleModal={setVisibleModal}
				title={titleModal}
				contentModal={contentModal}
				accessDelete={accessDelete}
			/>
		</div>
	)
}
