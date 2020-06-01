// import { db } from './index'

export const addStickyNote = (db, title, content, id) => {
	// Запустим транзакцию базы данных и получите хранилище объектов Notes
	let tx = db.transaction(['notes'], 'readwrite')
	let store = tx.objectStore('notes')
	// Добаляем заметку в хранилище объектов
	let note = { title, content, id, timestamp: Date.now() }
	store.add(note)
	// Ожидаем завершения транзакции базы данных
	tx.oncomplete = () => {
		console.log('stored note!')
	}
	tx.onerror = (event) => {
		alert('error storing note ' + event.target.errorCode)
	}
}
