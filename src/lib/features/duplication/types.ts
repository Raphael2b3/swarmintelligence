import type { IStatement, IDuplication } from '$lib/shared/types';

export interface IDuplicationExtended extends IDuplication {
	statementA: IStatement;
	statementB: IStatement;
}
