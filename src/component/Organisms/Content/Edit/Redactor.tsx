import React, { useState } from 'react'
import { Input } from '../../../Atoms/Input'
import { Button } from '../../../Atoms/Button'
import { useDispatch } from 'react-redux'
import { Actions } from '../../../../store/actions'
import nextId from 'react-id-generator'
import { Table } from '../../../Molecules/Table'
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
		if (inputContent && simpleContent) {
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
				placeholder={'Title of note'}
				className={'simple-input'}
				onChange={onInputContent}
				value={inputContent}
			/>
			<Table
				onChange={onSimpleContent}
				value={simpleContent}
			/>
			{isCreate ? (
				<Button
					type='dashed'
					onClick={createNewNote}
					content={'Create'}
					danger={false}
				/>
			) : (
				<Button
					type='dashed'
					onClick={saveNote}
					content={'Save'}
					danger={false}
				/>
			)}
		</>
	)
}
