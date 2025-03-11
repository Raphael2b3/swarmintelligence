class baseEntity {
	id?: string;
}

class Entity extends baseEntity {
	static store: Entity[] = $state([]);

	static externalChange() {}

	static create(entity: Entity) {
		let reactiveEntity = $state(entity);
		this.store.push(reactiveEntity);
		return reactiveEntity;
	}

	delete(id: string) {
		var i = Entity.store.findIndex((entity) => entity.id === id);
		if (i > -1) {
			Entity.store.splice(i, 1);
		}
	}
	get(id: string) {
		return Entity.store.find((entity) => entity.id === id);
	}
	update(id: string, entity: T) {
		var i = Entity.store.findIndex((entity) => entity.id === id);
		if (i > -1) {
			Entity.store[i] = entity;
		}
	}
	find(predicate: (entity: T) => boolean) {
		return Entity.store.filter(predicate);
	}

	save() {
		console.log('saving to db');
	}
}
