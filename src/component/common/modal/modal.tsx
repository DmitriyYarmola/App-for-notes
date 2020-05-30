import React, { useState } from 'react'
import { Modal } from 'antd'
import 'antd/dist/antd.css'

type PropsType = {
	visibleModal: boolean
	setVisibleModal: React.Dispatch<
		React.SetStateAction<boolean>
	>
	title: string
	contentModal: string
}

export const ModalWindow: React.FC<PropsType> = ({
	visibleModal,
	setVisibleModal,
	title,
	contentModal,
}) => {
	return (
		<Modal
			title={title}
			visible={visibleModal}
			// onOk={console.log('da')}
			onCancel={() => setVisibleModal(false)}
		>
			<p>{contentModal}</p>
		</Modal>
	)
}
