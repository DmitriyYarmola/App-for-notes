import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Actions } from '../models/actions'
import { message } from 'antd'
import { useHistory } from 'react-router-dom'
import { Editor } from '../../../Ui/Organisms/Content/Editor/index'
import nextId from 'react-id-generator'
import 'easymde/dist/easymde.min.css'

type PropsType = {
	isCreate: boolean
	title: string
	content: string
	setEditMode?: React.Dispatch<React.SetStateAction<boolean>>
	id?: string
}
export const Edit: React.FC<PropsType> = ({
	isCreate,
	title,
	content,
	id,
	setEditMode,
}) => {
	/* ===UseState=== */
	let [inputContent, setInputContent] = useState<string>(title)
	let [simpleContent, setSimpleContent] = useState<string>(content)

	/* ===UseDispatch=== */
	const dispatch = useDispatch()

	/* ===UseHistory=== */
	const history = useHistory()

	const onInputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputContent(e.currentTarget.value)
	}

	const onSimpleContent = (value: string) => {
		setSimpleContent(value)
	}

	const createNewNote = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		let noteId = nextId()
		console.log(noteId)
		if (inputContent && simpleContent) {
			dispatch(Actions.addNote(inputContent, simpleContent, noteId))
			history.push(noteId)
			setInputContent('')
			setSimpleContent('')
			message.success('The note has been created')
		}
	}

	const saveNote = () => {
		setEditMode!(false)
		dispatch(Actions.saveNote(inputContent, simpleContent, id!))
	}

	return (
		<Editor
			isCreate={isCreate}
			inputContent={inputContent}
			inputContentChange={onInputContent}
			tableContentChange={onSimpleContent}
			tableContent={simpleContent}
			clickCreate={createNewNote}
			clickSave={saveNote}
			inputClassName={'title-editor'}
			inputPHolder={'Title your note'}
		/>
	)
}
