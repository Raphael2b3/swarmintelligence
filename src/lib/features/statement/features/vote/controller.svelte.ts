import { votes, type IStatementVote } from '$lib/features/statement/features/vote/data';

// class Vote implements IStatementVote {
// 	id?: string;
// 	entityId?: string;
// 	userVote?: number;
// }

class StatementVoteController {
	public getStatementVote(id: string): IStatementVote {
		let vote = votes.find((vote) => vote.entityId === id);
		return vote ?? { entityId: id, userVote: 0, id: '' };
	}

	public updateVote(id: string, userVote: number) {
		var i = votes.findIndex((vote) => vote.entityId === id);
		if (i > -1) {
			votes[i].userVote = userVote;
		} else {
			this.createVote(id, userVote);
		}
	}

	public createVote(id: string, userVote: number) {
		votes.push({
			id: id + Math.random(),
			entityId: id,
			userVote: userVote
		});
	}

	public deleteVote(id: string) {
		var i = votes.findIndex((vote) => vote.entityId === id);
		if (i > -1) {
			votes.splice(i, 1);
		}
	}
}

export const statementVoteController = new StatementVoteController();
