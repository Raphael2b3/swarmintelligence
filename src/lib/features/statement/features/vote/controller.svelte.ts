export class Vote {
	static store: Vote[] = [];

	id?: string;
	statementId?: string = $state();
	userId?: string = $state();
	value: number = $state(0);

	static externalChange() {}

	constructor(statementId: string, userId: string, value: number) {
		this.statementId = statementId;
		this.userId = userId;
		this.value = value;

		Vote.store.push(this);
	}

	static get(statementId: string, userId: string) {
		let result = Vote.store.find(
			(entity) => entity.statementId === statementId && entity.userId === userId
		);
		if (!result) {
			result = new Vote(statementId, userId, 0);
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
