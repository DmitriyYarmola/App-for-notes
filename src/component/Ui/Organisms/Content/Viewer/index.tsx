import React from 'react'
import { Modal } from '../../../Molecules/index'
import { Button } from '../../../Atoms/index'
import ReactMarkdown from 'react-markdown'
import './style.sass'

type PropsType = {
	title: string
	content: string
	onDelete: () => void
	onEdit: () => void
	visibleModal: boolean
	titleModal: string
	contentModal: string
	accessDelete: () => void
	setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Viewer: React.FC<PropsType> = ({
	title,
	content,
	onDelete,
	onEdit,
	visibleModal,
	setVisibleModal,
	titleModal,
	contentModal,
	accessDelete,
}) => {
	return (
		<>
			<div className='option-button'>
				<Button type={'primary'} onClick={onDelete} content={'Delete'} danger={true} />
				<Button type={'primary'} onClick={onEdit} content={'Edit'} danger={false} />
			</div>
			<div>
				<h1>{title}</h1>
				<ReactMarkdown source={content} />
			</div>
			<Modal
				visibleModal={visibleModal}
				setVisibleModal={setVisibleModal}
				title={titleModal}
				contentModal={contentModal}
				accessDelete={accessDelete}
			/>
		</>
	)
}
