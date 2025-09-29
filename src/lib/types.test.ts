import { describe, test, expect } from 'vitest';
import { isIStatement, isIConnection, isIDuplication, ELoadingState } from './types';
import type { IStatement, IConnection, IDuplication } from './types';

describe('type guards', () => {
	describe('isIStatement', () => {
		test('should return true for valid IStatement object', () => {
			const validStatement: IStatement = {
				id: '1',
				type: 'statement',
				text: 'Test statement',
				lastSeasonTruth: 0.8,
				numberOfVotes: 100,
				voteRatio: 0.6,
				author: 'Test Author',
				tags: ['test', 'example']
			};

			expect(isIStatement(validStatement)).toBe(true);
		});

		test('should return false for non-statement object', () => {
			const nonStatement = {
				id: '1',
				type: 'connection',
				text: 'Test statement'
			};

			expect(isIStatement(nonStatement)).toBe(false);
		});

		test('should return false for null/undefined', () => {
			expect(isIStatement(null)).toBe(false);
			expect(isIStatement(undefined)).toBe(false);
		});

		test('should return false for object without type property', () => {
			const objectWithoutType = {
				id: '1',
				text: 'Test statement'
			};

			expect(isIStatement(objectWithoutType)).toBe(false);
		});
	});

	describe('isIConnection', () => {
		test('should return true for valid IConnection object', () => {
			const validStatement: IStatement = {
				id: '1',
				type: 'statement',
				text: 'Test statement',
				lastSeasonTruth: 0.8,
				numberOfVotes: 100,
				voteRatio: 0.6,
				author: 'Test Author'
			};

			const validConnection: IConnection = {
				id: '1',
				type: 'connection',
				thesis: validStatement,
				argument: validStatement,
				isProArgument: true,
				weight: 0.8,
				numberOfVotes: 100,
				isTrueVotes: 80,
				creator: 'Test Creator'
			};

			expect(isIConnection(validConnection)).toBe(true);
		});

		test('should return false for non-connection object', () => {
			const nonConnection = {
				id: '1',
				type: 'statement',
				text: 'Test statement'
			};

			expect(isIConnection(nonConnection)).toBe(false);
		});

		test('should return false for null/undefined', () => {
			expect(isIConnection(null)).toBe(false);
			expect(isIConnection(undefined)).toBe(false);
		});
	});

	describe('isIDuplication', () => {
		test('should return true for valid IDuplication object', () => {
			const validStatement: IStatement = {
				id: '1',
				type: 'statement',
				text: 'Test statement',
				lastSeasonTruth: 0.8,
				numberOfVotes: 100,
				voteRatio: 0.6,
				author: 'Test Author'
			};

			const validDuplication: IDuplication = {
				id: '1',
				type: 'duplication',
				statementA: validStatement,
				statementB: validStatement,
				numberOfVotes: 100,
				isDuplicateVotes: 75
			};

			expect(isIDuplication(validDuplication)).toBe(true);
		});

		test('should return false for non-duplication object', () => {
			const nonDuplication = {
				id: '1',
				type: 'statement',
				text: 'Test statement'
			};

			expect(isIDuplication(nonDuplication)).toBe(false);
		});

		test('should return false for null/undefined', () => {
			expect(isIDuplication(null)).toBe(false);
			expect(isIDuplication(undefined)).toBe(false);
		});
	});
});

describe('enums', () => {
	describe('ELoadingState', () => {
		test('should have correct values', () => {
			expect(ELoadingState.LOADING).toBe('loading');
			expect(ELoadingState.LOADED).toBe('loaded');
			expect(ELoadingState.FAILED).toBe('failed');
		});

		test('should have three values', () => {
			const values = Object.values(ELoadingState);
			expect(values).toHaveLength(3);
			expect(values).toContain('loading');
			expect(values).toContain('loaded');
			expect(values).toContain('failed');
		});
	});
});