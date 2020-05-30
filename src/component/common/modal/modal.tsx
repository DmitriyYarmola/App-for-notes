import React from 'react'
import { Modal } from 'antd'
import 'antd/dist/antd.css'

type PropsType = {
	visibleModal: boolean
	setVisibleModal: React.Dispatch<
		React.SetStateAction<boolean>
	>
	title: string
	contentModal: string
	accessDelete: () => void
}

export const ModalWindow: React.FC<PropsType> = ({
	visibleModal,
	setVisibleModal,
	title,
	contentModal,
	accessDelete,
}) => {
	return (
		<Modal
			title={title}
			visible={visibleModal}
			onOk={accessDelete}
			onCancel={() => setVisibleModal(false)}
		>
			<p>{contentModal}</p>
		</Modal>
	)
}
