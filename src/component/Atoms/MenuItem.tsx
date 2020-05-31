import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd'
import Item from 'antd/lib/list/Item'

type PropsType = {
	id: string
	title: string
	navTo: string
}

export const MenuItem: React.FC<PropsType> = ({
	id,
	title,
	navTo,
}) => {
	return (
		<Menu.Item key={id}>
			<NavLink to={navTo} className={title}>
				{title}
			</NavLink>
		</Menu.Item>
	)
}
