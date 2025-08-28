export class Connection {
	static store: Connection[] = [];

	id?: string;
	thesisId?: string = $state();
	argumentId?: string = $state();
	pro?: boolean = $state();

	static externalChange() {}

	constructor(thesisId: string, argumentId: string, pro: boolean) {
		this.argumentId = argumentId;
		this.thesisId = thesisId;
		this.pro = pro;
		Connection.store.push(this);
	}

	delete(id: string) {
		var i = Connection.store.findIndex((entity) => entity.id === id);
		if (i > -1) {
			Connection.store.splice(i, 1);
		}
	}

	static get(id: string) {
		return Connection.store.find((entity) => entity.id === id);
	}

	update(id: string, entity: Connection) {
		var i = Connection.store.findIndex((entity) => entity.id === id);
		if (i > -1) {
			Connection.store[i] = entity;
		}
	}

	find(predicate: (entity: Connection) => boolean) {
		return Connection.store.filter(predicate);
	}

	save() {
		console.log('saving to db');
	}
}
