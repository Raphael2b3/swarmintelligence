export class Statement {
	static store: Statement[] = [];

	id?: string;
	text?: string = $state();

	static externalChange() {}

	constructor(text: string) {
		this.text = text;
		Statement.store.push(this);
	}

	delete(id: string) {
		var i = Statement.store.findIndex((entity) => entity.id === id);
		if (i > -1) {
			Statement.store.splice(i, 1);
		}
	}

	static get(id: string) {
		return Statement.store.find((entity) => entity.id === id);
	}

	update(id: string, entity: Statement) {
		var i = Statement.store.findIndex((entity) => entity.id === id);
		if (i > -1) {
			Statement.store[i] = entity;
		}
	}

	find(predicate: (entity: Statement) => boolean) {
		return Statement.store.filter(predicate);
	}

	save() {
		console.log('saving to db');
	}
}
