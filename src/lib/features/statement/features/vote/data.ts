import type { IEntityInteraction } from '$lib/types';

export interface IStatementVote {
	id: string;
	entityId: string;
	userVote: number;
}

export const votes: IStatementVote[] = [
	{
		id: '1',
		entityId: '1',
		userVote: 1
	},
	{
		id: '2',
		entityId: '2',
		userVote: -1
	},
	{
		id: '3',
		entityId: '3',
		userVote: 0
	}
];
