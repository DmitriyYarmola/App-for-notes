import React from 'react'
import { Layout, Input, Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import nextId from 'react-id-generator'

const { Header } = Layout

type PropsType = {
	value: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	notesList: JSX.Element[]
	searchItems: (false | JSX.Element)[]
}
export const MobileMenu: React.FC<PropsType> = ({
	value,
	onChange,
	notesList,
	searchItems,
}) => {
	return (
		<Layout>
			<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
				<Input
					value={value}
					onChange={onChange}
					placeholder={'input your note'}
					className={'input-search'}
				/>
				<Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
					<Menu.Item key={nextId()}>
						<NavLink to={'/create'} className='create-note_item'>
							Create New Note
						</NavLink>
					</Menu.Item>
					{!value ? notesList : searchItems}
				</Menu>
			</Header>
		</Layout>
	)
}
