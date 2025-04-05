import type { Entity } from '$lib/abstraction/entity/entity';
`
Index can be undefined this means we are in the present
if index increases we are n steps back in history
`;
class HistoryManager {
	bypass = false;
	buffer: Entity[] = [];
	index? = 0;

	getNext() {
		if (!this.index) return;
		if (this.index - 1 < 0) return (this.index = undefined);
		this.index--;
		return this.buffer[this.index - this.buffer.length - 1];
	}

	getPrevious() {
		if (!this.index)
			this.index = 0; // cannot be undefined, so set to 0
		else this.index++; // increment index to get the next item
		if (this.index >= this.buffer.length) {
			this.index = this.buffer.length - 1; // set to last item if index exceeds buffer length
			return (this.index = undefined);
		}
		return this.buffer[this.index - this.buffer.length - 1];
	}

	watch(entity: Entity) {
		if (!entity) return;
		if (this.bypass || this.index !== undefined) return;
		const index = this.buffer.findIndex((e) => e.id == entity.id);
		if (index > -1) {
			this.buffer.splice(index, 1);
		}
		this.buffer.push(entity);
	}
}
export const historyManager = new HistoryManager();
