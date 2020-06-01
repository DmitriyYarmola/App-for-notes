let db
let dbReq = indexedDB.open('myDB', 1)

dbReq.onupgradeneeded = (event) => {
	// Зададим переменной db ссылку на базу данных
	db = event.target.result
	// Создадим хранилище объектов с именем notes.
	let notes = db.createObjectStore('notes', { autoIncrement: true })
}
dbReq.onsuccess = (event) => {
	db = event.target.result

	getAndDisplayNotes(db)
}

dbReq.onerror = (event) => {
	alert('error opening database ' + event.target.errorCode)
}

export const getAndDisplayNotes = (db) => {
	let tx = db.transaction(['notes'], 'readonly')
	let store = tx.objectStore('notes')

	// Создать запрос курсора
	let req = store.openCursor()
	let allNotes = []

	req.onsuccess = (event) => {
		// Результатом req.onsuccess в запросах openCursor является
		// IDBCursor
		let cursor = event.target.result

		if (cursor != null) {
			allNotes.push(cursor.value)
			cursor.continue()
		} else {
			// Если у нас нулевой курсор, это означает, что мы получили
			// все данные, поэтому отображаем заметки, которые мы получили.
			console.log(allNotes)
		}
	}

	req.onerror = (event) => {
		alert('error in cursor request ' + event.target.errorCode)
	}
}

const addStickyNote = (db, title, content, id) => {
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

export const submitNote = (id, title, content) => {
	addStickyNote(db, id, title, content)
	getAndDisplayNotes(db)
}
