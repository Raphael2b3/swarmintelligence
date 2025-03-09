import type { IEntityInteraction } from '$lib/shared/types';

const interactions: IEntityInteraction[] = [
	{
		id: '1',
		entityId: '1',
		type: 'statement',
		userVote: 1,
		bookmarked: false
	},
	{
		id: '2',
		entityId: '2',
		type: 'statement',
		userVote: -1,
		bookmarked: false
	},
	{
		id: '3',
		entityId: '3',
		type: 'statement',
		userVote: 0,
		bookmarked: true
	},
	{
		id: '4',
		entityId: '4',
		type: 'connection',
		userVote: 0.3,
		bookmarked: false
	},
	{
		id: '5',
		entityId: '5',
		type: 'connection',
		userVote: 0.8,
		bookmarked: false
	},
	{
		id: '6',
		entityId: '6',
		type: 'connection',
		userVote: 1,
		bookmarked: false
	},
	{
		id: '7',
		entityId: '7',
		type: 'duplication',
		userVote: 0,
		bookmarked: false
	},
	{
		id: '8',
		entityId: '8',
		type: 'duplication',
		userVote: 1,
		bookmarked: false
	}
];
