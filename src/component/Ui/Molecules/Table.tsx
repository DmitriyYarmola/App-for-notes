import React from 'react'
import SimpleMDE from 'react-simplemde-editor'
import SimpleMDEEditor from 'react-simplemde-editor'
import {
	toggleBlockquote,
	toggleBold,
	toggleItalic,
	toggleHeading1,
	drawImage,
	drawTable,
	drawHorizontalRule,
	toggleOrderedList,
	cleanBlock,
	togglePreview,
	drawLink,
	toggleSideBySide,
	toggleHeadingSmaller,
} from 'easymde'

type PropsType = {
	onChange: (value: string) => void
	value: string
}

export const Table: React.FC<PropsType> = ({ onChange, value }) => {
	return (
		<SimpleMDE
			onChange={onChange}
			value={value}
			options={{
				autofocus: true,
				spellChecker: false,
				uploadImage: true,
				autoDownloadFontAwesome: true,
				blockStyles: {
					bold: '__',
					italic: '_',
				},
				toolbar: [
					{
						name: 'bold',
						action: toggleBold,
						className: 'fa fa-bold',
						title: 'Bold text',
					},
					{
						name: 'italic',
						action: toggleItalic,
						className: 'fa fa-italic',
						title: 'Italic text',
					},
					{
						name: 'heading',
						action: toggleHeadingSmaller,
						className: 'fa fa-header',
						title: 'Heading',
					},
					{
						name: 'heading-1',
						action: toggleHeading1,
						className: 'fa fa-header fa-header-x fa-header-1',
						title: 'Big Heading',
					},
					'|',
					{
						name: 'quote',
						action: toggleBlockquote,
						className: 'fa fa-quote-left',
						title: 'Custom text',
					},
					{
						name: 'table',
						action: drawTable,
						className: 'fa fa-table',
						title: 'Insert Table',
					},
					{
						name: 'horizontal-rule',
						action: drawHorizontalRule,
						className: 'fa fa-minus',
						title: 'Insert Horizontal Line',
					},
					{
						name: 'ordered-list',
						action: toggleOrderedList,
						className: 'fa fa-list-ol',
						title: 'Numbered List',
					},
					'|',
					{
						name: 'preview',
						action: togglePreview,
						className: 'fa fa-eye no-disable',
						title: 'Toggle Preview',
					},
					'|',
					{
						name: 'link',
						action: drawLink,
						className: 'fa fa-link',
						title: 'Create Link',
					},
					{
						name: 'image',
						action: drawImage,
						className: 'fa fa-picture-o',
						title: 'Insert Image',
					},
				],
			}}
		/>
	)
}
