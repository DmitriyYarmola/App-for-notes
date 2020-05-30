import {
	ADD_NOTE,
	DELETE_NOTE,
	ActionsType,
	PayloadType,
	SAVE_NOTE,
} from './actions'

let initialState = {
	notes: [] as Array<PayloadType>,
}

type InitialStateType = typeof initialState

export const Reducer = (
	state = initialState,
	action: ActionsType
): InitialStateType => {
	switch (action.type) {
		case ADD_NOTE:
			return {
				...state,
				notes: [...state.notes, action.payload],
			}
		case SAVE_NOTE:
			return {
				...state,
				notes: [
					...state.notes.map((item) => {
						return item.id === action.payload.id
							? action.payload
							: item
					}),
				],
			}
		case DELETE_NOTE:
			return {
				...state,
				notes: [
					...state.notes.filter(
						(note) => note.id !== action.payload.id
					),
				],
			}
		default:
			return state
	}
}
