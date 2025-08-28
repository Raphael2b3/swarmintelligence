import type { Entity } from '$lib/types/entity';
`
Index can be undefined this means we are in the present
if index increases we are n steps back in history
`;
class HistoryManager {
	bypass = false;
	buffer: Entity[] = [];
	index? = 0;

	getNext() {
		if (this.index === undefined) return;
		this.index--;
		console.log("History Manager index=",this.index,"bufferlength=", this.buffer.length);
		if (this.index< 0) return (this.index = undefined);
		const i =  this.buffer.length - this.index - 1;
		return this.buffer[this.buffer.length - this.index - 1];
	}

	getPrevious() {
		if (this.index===undefined) this.index = 0; // cannot be undefined, so set to 0
		else this.index++; // increment index to get the next item
		console.log("History Manager index=",this.index,"bufferlength=", this.buffer.length);
		if (this.index >= this.buffer.length) {
			this.index = this.buffer.length - 1; // set to last item if index exceeds buffer length
			console.log("History Manager index out of bounds, set to last item",this.index);
			return (this.index = undefined);
		}
		const i = this.buffer.length - this.index - 1; // calculate the index in the buffer
		console.log("i",i);
		return this.buffer[i];
	}

	watch(entity: Entity) {
		if (!entity || this.bypass) return; // if entity is undefined, do nothing
		const index = this.buffer.findIndex((e) => e.id == entity.id);
		if (index > -1) {
			this.buffer.splice(index, 1);
		}
		this.buffer.push(entity);
	}
}
export const historyManager = new HistoryManager();
