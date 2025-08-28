import type { Connection } from '$lib/providers/connection-provider.svelte';
import type { Statement } from '$lib/providers/statement-provider.svelte';

export type IEntity = Statement | Connection; //| Duplication;

export interface Entity {
	id: string;
	type: 'statement' | 'connection' | 'duplication';
}
