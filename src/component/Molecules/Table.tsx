import React from 'react'
import SimpleMDE from 'react-simplemde-editor'

type PropsType = {
	onChange: (value: string) => void
	value: string
}

export const Table: React.FC<PropsType> = ({
	onChange,
	value,
}) => {
	return (
		<SimpleMDE
			onChange={onChange}
			value={value}
			options={{
				autofocus: true,
				spellChecker: false,
			}}
		/>
	)
}
