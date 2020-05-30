import { InferAtionsType } from './store';

export const ADD_NOTE = "ADD_NOTE"

export type ActionsType = InferAtionsType<typeof Actions>


export type PayloadType = {
    title: string,
    content: string
}

export const Actions = {
    addNote: (title: string, content: string) => {
        return {
            type: ADD_NOTE,
            payload: { title, content}
        } as const
    }
}
