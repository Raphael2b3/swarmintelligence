class Bookmark {
	static store: Bookmark[] = [];

	id?: string = $state();
	statementId?: string = $state();
	active?: boolean = $state();
	userId?: string = $state();

	static externalChange() {}

	constructor(statementId: string, userId: string) {
		this.statementId = statementId;
		this.active = false;
		this.userId = userId;

		Bookmark.store.push(this);
	}

	delete(id: string) {
		var i = Bookmark.store.findIndex((entity) => entity.id === id);
		if (i > -1) {
			Bookmark.store.splice(i, 1);
		}
	}

	static get(id: string) {
		return Bookmark.store.find((entity) => entity.id === id);
	}

	update(id: string, entity: Bookmark) {
		var i = Bookmark.store.findIndex((entity) => entity.id === id);
		if (i > -1) {
			Bookmark.store[i] = entity;
		}
	}

	find(predicate: (entity: Bookmark) => boolean) {
		return Bookmark.store.filter(predicate);
	}

	save() {
		console.log('saving to db');
	}
}
