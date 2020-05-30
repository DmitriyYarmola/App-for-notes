import React, { useState } from 'react'
import SimpleMDE from 'react-simplemde-editor'
import { Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { Actions } from '../../store/actions'
import 'easymde/dist/easymde.min.css'
import './redactor.sass'
type PropsType = {}
export const Redactor: React.FC<PropsType> = () => {
	let [inputContent, setInputContent] = useState<string>('')
	let [simpleContent, setSimpleContent] = useState<string>('')

	const dispatch = useDispatch()

	const onInputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputContent(e.currentTarget.value)
	}

	const onSimpleContent = (value: string) => {
		setSimpleContent(value)
	}

	const createNewNote = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if (inputContent !== '' && simpleContent !== '')
			dispatch(Actions.addNote(inputContent, simpleContent))
		setInputContent('')
		setSimpleContent('')
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
			<Button type='dashed' onClick={createNewNote}>
				Create
			</Button>
		</>
	)
}
