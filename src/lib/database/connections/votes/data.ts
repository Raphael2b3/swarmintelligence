export interface IConnectionVote {
	id: string;
	entityId: string;
	userVote: number;
}

export const votes: IConnectionVote[] = [
	{
		id: '4',
		entityId: '4',
		userVote: 0.3
	},
	{
		id: '5',
		entityId: '5',
		userVote: 0.8
	},
	{
		id: '6',
		entityId: '6',
		userVote: 1
	}
];
