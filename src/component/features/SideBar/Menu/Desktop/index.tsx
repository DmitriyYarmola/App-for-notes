import React from 'react'
import { Layout, Input, Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import nextId from 'react-id-generator'

const { Header, Sider } = Layout

type PropsType = {
	value: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	notesList: JSX.Element[]
	searchItems: (false | JSX.Element)[]
}
export const DesktopMenu: React.FC<PropsType> = ({
	value,
	onChange,
	notesList,
	searchItems,
}) => {
	return (
		<>
			<Layout>
				<Sider
					style={{
						overflow: 'auto',
						height: '100%',
						position: 'fixed',
						left: 0,
					}}
				>
					<Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
						<Input
							value={value}
							onChange={onChange}
							placeholder={'input your note'}
							className={'input-search'}
						/>
						<Menu.Item key={nextId()}>
							<NavLink to={'/create'} className='create-note_item'>
								Create New Note
							</NavLink>
						</Menu.Item>
						{!value ? notesList : searchItems}
					</Menu>
				</Sider>
			</Layout>
		</>
	)
}
