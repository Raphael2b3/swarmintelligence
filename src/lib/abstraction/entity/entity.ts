import type { Connection } from '$lib/features/statement/features/connection/connection.svelte';
import type { Statement } from '$lib/features/statement/statement.svelte';

export type Entity = Statement | Connection; //| Duplication;
