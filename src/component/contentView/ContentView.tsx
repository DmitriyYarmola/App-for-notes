import React, { useState } from 'react'
import { Button } from 'antd'
import './contentView.sass'
import { ModalWindow } from '../common/modal/modal'

type PropsType = {
	title: string
	content: string
}

export const ContentView: React.FC<PropsType> = ({
	title,
	content,
}) => {
	const [visibleModal, setVisibleModal] = useState(false)
	const [titleModal, setTitleModal] = useState('')
	const [contentModal, setContentModal] = useState('')

	const onDeleteNote = () => {
		setTitleModal('Delete the note')
		setContentModal('You want to delete this note?')
		setVisibleModal(true)
	}

	const onEditNote = () => {}

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
			/>
		</div>
	)
}
