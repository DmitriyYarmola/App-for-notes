import React from 'react'
import { Modal as ModalA } from 'antd'
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

export const Modal: React.FC<PropsType> = ({
	visibleModal,
	setVisibleModal,
	title,
	contentModal,
	accessDelete,
}) => {
	return (
		<ModalA
			title={title}
			visible={visibleModal}
			onOk={accessDelete}
			onCancel={() => setVisibleModal(false)}
		>
			<p>{contentModal}</p>
		</ModalA>
	)
}
