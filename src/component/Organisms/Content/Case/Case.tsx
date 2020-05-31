import React, { useState } from 'react'
import './contentView.sass'
import { View } from '../View/View'
import { Redactor } from '../Edit/Redactor'

type PropsType = {
	title: string
	content: string
	id: string
}

export const Case: React.FC<PropsType> = ({
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
