import { combineReducers, createStore   } from 'redux'
import { Reducer } from './reducer'

const rootReducer = combineReducers({
    notesReducer: Reducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

export type InferAtionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>

export const store = createStore(rootReducer)

