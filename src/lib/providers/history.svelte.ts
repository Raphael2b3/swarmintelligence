import type { Entity } from '$lib/abstraction/entity/entity';

class HistoryManager {
	bypass = false;
	buffer: Entity[] = [];
	index = 0;

	getNext() {
		if (this.index - 1 < 0) return;
		this.index--;
		return this.buffer[this.index - this.buffer.length - 1];
	}

	getPrevious() {
		if (this.index + 1 > this.buffer.length - 1) return;
		this.index++;
		return this.buffer[this.index - this.buffer.length - 1];
	}

	watch(entity: Entity) {
		if (!entity) return;
		if (this.bypass) return;
		const index = this.buffer.findIndex((e) => e.id == entity.id);
		if (index > -1) {
			this.buffer.splice(index, 1);
		}
		this.buffer.push(entity);
	}
}
export const historyManager = new HistoryManager();
