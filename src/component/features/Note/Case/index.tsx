import React, { useState } from 'react'
import { View } from '../View'
import { Edit } from './../Edit/index'
import './style.sass'

type PropsType = {
	title: string
	content: string
	id: string
}

export const Case: React.FC<PropsType> = ({ title, content, id }) => {
	const [editMode, setEditMode] = useState(false)
	return (
		<>
			{editMode ? (
				<Edit
					isCreate={false}
					title={title}
					content={content}
					id={id}
					setEditMode={setEditMode}
				/>
			) : (
				<View title={title} content={content} setEditMode={setEditMode} id={id} />
			)}
		</>
	)
}
