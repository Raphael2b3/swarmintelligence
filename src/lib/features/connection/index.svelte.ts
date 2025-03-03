import Create from './components/Create.svelte';
import MoreOptions from './components/MoreOptions.svelte';
import Recommendation from './components/Recommendation.svelte';
import SearchResult from './components/SearchResult.svelte';
import type { IConnectionExtended } from './types.ts';

export type { IConnectionExtended };
export const Connection = { Create, MoreOptions, Recommendation, SearchResult };
