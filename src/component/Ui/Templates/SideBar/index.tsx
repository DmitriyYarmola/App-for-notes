import React from 'react'
import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../../features/Note/models/store'
import nextId from 'react-id-generator'
import 'antd/dist/antd.css'
import './style.sass'

const { Sider } = Layout

export const SideBar = () => {
	const notes = useSelector((state: AppStateType) => state.notesReducer.notes)

	const notesList = notes.map((note) => {
		return (
			<Menu.Item key={note.id}>
				<NavLink to={note.id} className={'note-item'} activeClassName='active'>
					{note.title}
				</NavLink>
			</Menu.Item>
		)
	})

	return (
		<Sider
			style={{
				overflow: 'auto',
				height: '100vh',
				position: 'fixed',
				left: 0,
			}}
		>
			<Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
				<Menu.Item key={nextId()}>
					<NavLink to={'/create'} className='create-note_item'>
						Create New Note
					</NavLink>
				</Menu.Item>
				{notesList}
			</Menu>
		</Sider>
	)
}