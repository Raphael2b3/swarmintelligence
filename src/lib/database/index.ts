import type {
	IConnection,
	IConnectiveType,
	IDuplication,
	IEntityType,
	IFilterOptions
} from '$lib/shared/types';
import { connections } from './connections/data';
import { duplictons } from './duplications/data';
import { statements } from './statements/data';

export function getEntityDB(id: string, entityType: IEntityType) {
	switch (entityType) {
		case 'connection': {
			let i = Math.floor(Math.random() * connections.length);
			return connections[i];
		}
		case 'duplication': {
			let i = Math.floor(Math.random() * duplictons.length);
			return duplictons[i];
		}
		case 'statement': {
			const i = Math.floor(Math.random() * statements.length);
			return statements[0];
		}
	}
}
export function findConnectiveForDB(
	id: string,
	entity: IConnectiveType,
	except?: string[]
): IConnection[] | IDuplication[] {
	switch (entity) {
		case 'argument':
			return connections;

		case 'thesis':
			return connections;

		case 'duplication':
			return duplictons;
	}
}

export function getRecommendationDB(): Record<string, IEntityType> {
	return { '1': 'statement', '2': 'connection', '3': 'duplication' };
}

export function getHistoryDB(
	skip?: number,
	limit?: number
): { ids: string[]; types: IEntityType[] } {
	return { ids: ['1'], types: ['statement'] };
}

export function searchForEntitiesDB(searchTerm: string, filterOptions: IFilterOptions) {
	return statements.sort(() => Math.random() - 0.5);
}

export function createDuplicationDB(statementA: string, statementB: string) {
	return '1'; // id
}

export function createConnectionDB(
	statementThesis: string,
	statementArgument: string,
	isProArgument: boolean
) {
	return '1'; // id
}

export function createStatementDB(text: string, tags?: string[]) {
	return '1'; // id
}

export function voteForEntityDB(id: string, entityType: IEntityType, value: number) {
	if (entityType == 'duplication')
		return '1'; // id
	else if (entityType == 'connection')
		return '1'; // id
	else return '1'; // id
}
