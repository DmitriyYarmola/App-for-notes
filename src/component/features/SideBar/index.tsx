import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppStateType } from '../Note/models/store'
import { Input } from '../../Ui/Atoms/index'
import { MenuUnfoldOutlined, MenuFoldOutlined, FileOutlined } from '@ant-design/icons'
import nextId from 'react-id-generator'
import 'antd/dist/antd.css'
import './style.sass'

const { Sider, Header } = Layout

export const SideBar = () => {
	const notes = useSelector((state: AppStateType) => state.notesReducer.notes)

	const [inputContent, setInputContent] = useState('')
	const [collapsed, setCollapsed] = useState(false)

	const notesList = notes.map((note) => {
		return (
			<Menu.Item key={note.id}>
				<NavLink to={note.id} className={'note-item'} activeClassName='active'>
					{note.title}
				</NavLink>
			</Menu.Item>
		)
	})

	const onChangeInputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputContent(e.currentTarget.value)
		let value = e.currentTarget.value.toUpperCase()
		for (let note of notes) {
			let i = note.title.toUpperCase().indexOf(value)
			if (i >= 0) {
				note.before = note.title.substring(0, i)
				note.search = note.title.substring(i, i + value.length)
				note.after = note.title.substring(i + value.length)
			} else note.search = ''
		}
	}

	let searchItems = notes.map((note) => {
		return (
			note.search !== '' && (
				<Menu.Item key={note.id}>
					<NavLink to={note.id} className={'note-item'} activeClassName='active'>
						<span>
							{note.before}
							<span style={{ color: 'white' }}>{note.search}</span>
							{note.after}
						</span>
					</NavLink>
				</Menu.Item>
			)
		)
	})

	const onCollapse = () => {
		setCollapsed(!collapsed)
	}

	return (
		<>
			{/* Here must be MenuComponent with SideBar/Menu/Desktop or Mobile. But it create few problmes*/}

			<div className='desktop-menu'>
				<Layout>
					<Sider
						trigger={null}
						collapsible
						collapsed={collapsed}
						style={{
							overflow: 'auto',
							height: '100%',
							position: 'fixed',
							left: 0,
						}}
					>
						<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
							<Input
								value={inputContent}
								onChange={onChangeInputContent}
								placeholder={'input your note'}
								className={'input-search'}
							/>
							<Menu.Item key={nextId()}>
								<NavLink to={'/create'} className='create-note_item'>
									Create New Note
								</NavLink>
							</Menu.Item>
							{!inputContent ? notesList : searchItems}
						</Menu>
					</Sider>
				</Layout>
			</div>

			<div className='mobile-menu'>
				<Layout>
					<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
						<Input
							value={inputContent}
							onChange={onChangeInputContent}
							placeholder={'input your note'}
							className={'input-search'}
						/>
						<Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
							<Menu.Item key={nextId()}>
								<NavLink to={'/create'} className='create-note_item'>
									Create New Note
								</NavLink>
							</Menu.Item>
							{!inputContent ? notesList : searchItems}
						</Menu>
					</Header>
				</Layout>
			</div>
		</>
	)
}
