import React from 'react'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'
import { Redactor } from '../redactor/Redactor'
import { ContentView } from '../content/Content'
import { useSelector } from 'react-redux'
import { AppStateType } from '../../store/store'
const { Content } = Layout

export const ContentSection = () => {
	const notes = useSelector(
		(state: AppStateType) => state.notesReducer.notes
	)

	const notesRouterList = notes.map((note) => (
		<Route
			path={`/${note.id}`}
			exact
			key={note.id}
			render={() => (
				<ContentView
					title={note.title}
					content={note.content}
					id={note.id}
				/>
			)}
		/>
	))
	return (
		<Layout>
			<Layout
				className='site-layout'
				style={{ marginLeft: 200 }}
			>
				<Content
					style={{
						margin: '24px 16px 0',
						overflow: 'initial',
					}}
				>
					<div
						className='site-layout-background'
						style={{ padding: 24, textAlign: 'center' }}
					>
						<Switch>
							{notesRouterList}
							<Route
								path='/create'
								render={() => (
									<Redactor
										isCreate={true}
										title={''}
										content={''}
									/>
								)}
							/>
						</Switch>
					</div>
				</Content>
			</Layout>
		</Layout>
	)
}
