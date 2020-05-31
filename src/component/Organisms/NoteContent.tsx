import React from 'react'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'
import { Redactor } from '../Organisms/Content/Edit/Redactor'
import { List } from '../Organisms/Content/List'
const { Content } = Layout

export const NoteContent = () => {
	console.log('load')
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
							<List />
						</Switch>
					</div>
				</Content>
			</Layout>
		</Layout>
	)
}
