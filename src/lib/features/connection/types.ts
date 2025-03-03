import type { IEntityType, IStatement, IConnection } from '$lib/shared/types';

export interface IConnectionExtended extends IConnection {
	thesis: IStatement;
	argument: IStatement;
}
