import { describe, test, expect, vi } from 'vitest';
import {
	getEntityDB,
	findConnectiveForDB,
	getRecommendationDB,
	getHistoryDB,
	searchForEntitiesDB,
	createDuplicationDB,
	createConnectionDB,
	createStatementDB,
	voteForEntityDB
} from './index';
import type { IEntityType } from '$lib/types';

// Mock data imports
vi.mock('../features/statement/data', () => ({
	statements: [
		{
			id: '1',
			type: 'statement',
			text: 'Test statement',
			lastSeasonTruth: 0.8,
			numberOfVotes: 100,
			voteRatio: 0.6,
			author: 'Test Author'
		}
	]
}));

vi.mock('../features/statement/features/connection/data', () => ({
	connections: [
		{
			id: '1',
			type: 'connection',
			thesis: { id: '1', type: 'statement', text: 'Test', lastSeasonTruth: 0.8, numberOfVotes: 100, voteRatio: 0.6, author: 'Test' },
			argument: { id: '2', type: 'statement', text: 'Test arg', lastSeasonTruth: 0.7, numberOfVotes: 50, voteRatio: 0.5, author: 'Test' },
			isProArgument: true,
			weight: 0.8,
			numberOfVotes: 100,
			isTrueVotes: 80,
			creator: 'Test Creator'
		}
	]
}));

vi.mock('../features/statement/features/duplication/data', () => ({
	duplictons: [
		{
			id: '1',
			type: 'duplication',
			statementA: { id: '1', type: 'statement', text: 'Test A', lastSeasonTruth: 0.8, numberOfVotes: 100, voteRatio: 0.6, author: 'Test' },
			statementB: { id: '2', type: 'statement', text: 'Test B', lastSeasonTruth: 0.7, numberOfVotes: 50, voteRatio: 0.5, author: 'Test' },
			numberOfVotes: 100,
			isDuplicateVotes: 75
		}
	]
}));

describe('database functions', () => {
	describe('getHistoryDB', () => {
		test('should return default history without parameters', () => {
			const result = getHistoryDB();
			expect(result).toHaveProperty('ids');
			expect(result).toHaveProperty('types');
			expect(Array.isArray(result.ids)).toBe(true);
			expect(Array.isArray(result.types)).toBe(true);
		});

		test('should handle skip and limit parameters', () => {
			const result = getHistoryDB(10, 20);
			expect(result).toHaveProperty('ids');
			expect(result).toHaveProperty('types');
		});
	});

	describe('searchForEntitiesDB', () => {
		test('should return search results for given term and filter', () => {
			const filterOptions = {
				entitytype: ['statement' as IEntityType]
			};
			
			const result = searchForEntitiesDB('test', filterOptions);
			expect(Array.isArray(result)).toBe(true);
		});

		test('should handle empty search term', () => {
			const filterOptions = {
				entitytype: ['statement' as IEntityType]
			};
			
			const result = searchForEntitiesDB('', filterOptions);
			expect(Array.isArray(result)).toBe(true);
		});
	});

	describe('createDuplicationDB', () => {
		test('should create duplication and return id', () => {
			const result = createDuplicationDB('statement1', 'statement2');
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});
	});

	describe('createConnectionDB', () => {
		test('should create connection and return id', () => {
			const result = createConnectionDB('thesis1', 'argument1', true);
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		test('should handle both pro and contra arguments', () => {
			const proResult = createConnectionDB('thesis1', 'argument1', true);
			const contraResult = createConnectionDB('thesis1', 'argument1', false);
			
			expect(typeof proResult).toBe('string');
			expect(typeof contraResult).toBe('string');
		});
	});

	describe('createStatementDB', () => {
		test('should create statement and return id', () => {
			const result = createStatementDB('Test statement text');
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		test('should handle optional tags parameter', () => {
			const resultWithoutTags = createStatementDB('Test statement');
			const resultWithTags = createStatementDB('Test statement', ['tag1', 'tag2']);
			
			expect(typeof resultWithoutTags).toBe('string');
			expect(typeof resultWithTags).toBe('string');
		});
	});

	describe('voteForEntityDB', () => {
		test('should handle voting for statement entities', () => {
			const result = voteForEntityDB('1', 'statement', 1);
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		test('should handle voting for connection entities', () => {
			const result = voteForEntityDB('1', 'connection', 0);
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		test('should handle voting for duplication entities', () => {
			const result = voteForEntityDB('1', 'duplication', -1);
			expect(typeof result).toBe('string');
			expect(result.length).toBeGreaterThan(0);
		});

		test('should handle different vote values', () => {
			const voteValues = [-1, 0, 1];
			
			voteValues.forEach(value => {
				const result = voteForEntityDB('1', 'statement', value);
				expect(typeof result).toBe('string');
			});
		});
	});

	describe('getRecommendationDB', () => {
		test('should return a valid entity', () => {
			const result = getRecommendationDB();
			expect(result).toBeDefined();
			expect(result).toHaveProperty('id');
			expect(result).toHaveProperty('type');
		});
	});
});