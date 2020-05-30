import { ADD_NOTE, ActionsType, PayloadType } from './actions';

let initialState = {
    notes: [] as Array<PayloadType>
}

type InitialStateType = typeof initialState

export const Reducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch(action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        default: 
            return state
    }
} 
