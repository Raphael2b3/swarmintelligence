import type {
	IConnection,
	IConnectiveType,
	IDuplication,
	IEntity,
	IEntityType,
	IFilterOptions
} from '$lib/types';
import { get } from 'svelte/store';
import { connections } from '../features/statement/features/connection/data';
import { duplictons } from '../features/statement/features/duplication/data';
import { statements } from '../features/statement/data';

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
			return statements[i];
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

export function getRecommendationDB(): IEntity {
	const randomIndex = Math.floor(Math.random() * 3);
	const types: IEntityType[] = ['statement', 'connection', 'duplication'];
	const randomType = types[randomIndex];
	return getEntityDB('1', randomType);
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
