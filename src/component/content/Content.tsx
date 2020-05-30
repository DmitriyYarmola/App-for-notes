import React, { useState } from 'react'
import './contentView.sass'
import { View } from './view/View'
import { Redactor } from '../redactor/Redactor'

type PropsType = {
	title: string
	content: string
	id: string
}

export const ContentView: React.FC<PropsType> = ({
	title,
	content,
	id,
}) => {
	const [editMode, setEditMode] = useState(false)

	return (
		<>
			{editMode ? (
				<Redactor
					isCreate={false}
					title={title}
					content={content}
					id={id}
					setEditMode={setEditMode}
				/>
			) : (
				<View
					title={title}
					content={content}
					setEditMode={setEditMode}
					id={id}
				/>
			)}
		</>
	)
}
