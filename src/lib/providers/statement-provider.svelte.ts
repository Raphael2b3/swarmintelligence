export class Statement {
	static store: Statement[] = [];

	id?: string;
	text?: string = $state();

	static externalChange() {}

	constructor(text: string, id?: string) {
		this.id = id;
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
		console.log('get', id);

		const out = Statement.store.find((entity) => entity.id === id);
		console.log('out', out);
		return out;
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

new Statement('The world is bad', '0');
new Statement('The earth is flat', '1');
new Statement('The earth is round', '2');
new Statement('The earth is a cube', '3');
new Statement('The earth is a sphere', '4');
new Statement('The earth is a pyramid', '5');
new Statement('The earth is a triangle', '6');
new Statement('The earth is a square', '7');
new Statement('The earth is a rectangle', '8');
