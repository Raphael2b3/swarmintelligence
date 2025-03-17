import type { Connection } from '$lib/features/statement/features/connection/connection.svelte';
import type { Statement } from '$lib/features/statement/statement.svelte';

export type IEntity = Statement | Connection; //| Duplication;

export interface Entity {
	id: string;
	type: 'statement' | 'connection' | 'duplication';
}
