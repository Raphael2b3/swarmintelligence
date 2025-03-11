import type { IEntityInteraction } from '$lib/types';
export interface IDuplicationVote {
	id: string;
	entityId: string;
	userVote: number;
}

export const votes: IDuplicationVote[] = [
	{
		id: '7',
		entityId: '7',
		userVote: 0
	},
	{
		id: '8',
		entityId: '8',
		userVote: 1
	}
];
