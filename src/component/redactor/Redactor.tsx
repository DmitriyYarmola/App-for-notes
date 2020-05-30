import React, { useState } from 'react'
import SimpleMDE from 'react-simplemde-editor'
import { Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { Actions } from '../../store/actions'
import nextId from 'react-id-generator'
import 'easymde/dist/easymde.min.css'
import './redactor.sass'

type PropsType = {
	isCreate: boolean
	title: string
	content: string
	setEditMode?: React.Dispatch<
		React.SetStateAction<boolean>
	>
	id?: string
}
export const Redactor: React.FC<PropsType> = ({
	isCreate,
	title,
	content,
	id,
	setEditMode,
}) => {
	let [inputContent, setInputContent] = useState<string>(
		title
	)
	let [simpleContent, setSimpleContent] = useState<string>(
		content
	)

	const dispatch = useDispatch()

	const onInputContent = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setInputContent(e.currentTarget.value)
	}

	const onSimpleContent = (value: string) => {
		setSimpleContent(value)
	}

	const createNewNote = (
		e: React.MouseEvent<HTMLElement, MouseEvent>
	) => {
		if (inputContent !== '' && simpleContent !== '') {
			dispatch(
				Actions.addNote(
					inputContent,
					simpleContent,
					nextId()
				)
			)
			setInputContent('')
			setSimpleContent('')
		}
	}

	const saveNote = () => {
		setEditMode!(false)
		dispatch(
			Actions.saveNote(inputContent, simpleContent, id!)
		)
	}

	return (
		<>
			<Input
				placeholder='Title of note'
				className='simple-input'
				onChange={onInputContent}
				required
				value={inputContent}
			/>
			<SimpleMDE
				id='simple-mde'
				onChange={onSimpleContent}
				value={simpleContent}
				options={{
					autofocus: true,
					spellChecker: false,
				}}
			/>
			{isCreate ? (
				<Button type='dashed' onClick={createNewNote}>
					Create
				</Button>
			) : (
				<Button type='dashed' onClick={saveNote}>
					Save
				</Button>
			)}
		</>
	)
}
