export class Vote {
	static store: Vote[] = [];

	id?: string;
	connectionId?: string = $state();
	userId?: string = $state();
	value: number = $state(0);

	static externalChange() {}

	constructor(connectionId: string, userId: string, value: number) {
		this.connectionId = connectionId;
		this.userId = userId;
		this.value = value;

		Vote.store.push(this);
	}

	static get(connectionId: string, userId: string) {
		let result = Vote.store.find(
			(entity) => entity.connectionId === connectionId && entity.userId === userId
		);
		if (!result) {
			result = new Vote(connectionId, userId, 0);
		}
		return result;
	}

	positiveToggle() {
		this.value = this.value === 1 ? 0 : 1;
	}

	negativeToggle() {
		this.value = this.value === -1 ? 0 : -1;
	}
}
