import React, { ChangeEvent } from 'react'
import { Input } from '../../../Atoms/index'
import { Button } from '../../../Atoms/index'
import { Table } from '../../../Molecules/index'
import 'easymde/dist/easymde.min.css'
import './style.sass'

type PropsType = {
	isCreate: boolean
	inputContent: string
	tableContent: string
	clickSave: () => void
	clickCreate: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
	inputContentChange: (e: ChangeEvent<HTMLInputElement>) => void
	tableContentChange: (value: string) => void
	inputClassName: string
	inputPHolder: string
}
export const Editor: React.FC<PropsType> = ({
	isCreate,
	inputContent,
	inputContentChange,
	tableContentChange,
	tableContent,
	clickCreate,
	clickSave,
	inputPHolder,
	inputClassName,
}) => {
	return (
		<>
			<Input
				placeholder={inputPHolder}
				className={inputClassName}
				onChange={inputContentChange}
				value={inputContent}
			/>
			<Table onChange={tableContentChange} value={tableContent} />
			{isCreate ? (
				<Button type='dashed' onClick={clickCreate} content={'Create'} danger={false} />
			) : (
				<Button type='dashed' onClick={clickSave} content={'Save'} danger={false} />
			)}
		</>
	)
}
