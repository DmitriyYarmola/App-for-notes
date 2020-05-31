import React from 'react'
import { Button as ButtonA } from 'antd'

type PropsType = {
	type:
		| 'link'
		| 'ghost'
		| 'default'
		| 'primary'
		| 'dashed'
		| undefined
	onClick: (
		e: React.MouseEvent<HTMLElement, MouseEvent>
	) => void
	content: string
	danger: boolean
}

export const Button: React.FC<PropsType> = ({
	type,
	onClick,
	content,
	...props
}) => {
	return (
		<ButtonA type={type} onClick={onClick} {...props}>
			{content}
		</ButtonA>
	)
}
