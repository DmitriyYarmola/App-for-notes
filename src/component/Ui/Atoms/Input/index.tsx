import React from 'react'
import { Input as InputA } from 'antd'
import './style.sass'
type PropsType = {
	placeholder: string
	className: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	value: string
}

export const Input: React.FC<PropsType> = ({
	placeholder,
	className,
	onChange,
	value,
}) => {
	return (
		<InputA
			placeholder={placeholder}
			className={`input ${className}`}
			onChange={onChange}
			value={value}
			required
		/>
	)
}
