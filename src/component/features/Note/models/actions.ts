import { InferAtionsType } from "./store";

export const ADD_NOTE = "ADD_NOTE";
export const SAVE_NOTE = "SAVE_NOTE";
export const DELETE_NOTE = "DELTE_NOTE";
export const GET_NOTES = "GET_NOTES";
export type ActionsType = InferAtionsType<typeof Actions>;

export type PayloadType = {
  title: string;
  content: string;
  id: string;
  search: string;
  before: string;
  after: string;
};

export const Actions = {
  addNote: (title: string, content: string, id: string) =>
    ({
      type: ADD_NOTE,
      payload: { title, content, id, search: "", before: "", after: "" },
    } as const),
  saveNote: (title: string, content: string, id: string) =>
    ({
      type: SAVE_NOTE,
      payload: { title, content, id, search: "", before: "", after: "" },
    } as const),
  deleteNote: (id: string) =>
    ({
      type: DELETE_NOTE,
      payload: { id },
    } as const),
  getNote: (notes: Array<PayloadType>) =>
    ({
      type: GET_NOTES,
      payload: notes,
    } as const),
};
