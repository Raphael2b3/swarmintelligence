import { describe, test, expect } from 'vitest';
import { statements } from './data';
import type { IStatement } from '$lib/types';

describe('statement data', () => {
	test('should export an array of statements', () => {
		expect(Array.isArray(statements)).toBe(true);
		expect(statements.length).toBeGreaterThan(0);
	});

	test('each statement should have required properties', () => {
		statements.forEach((statement, index) => {
			expect(statement, `Statement at index ${index}`).toHaveProperty('id');
			expect(statement, `Statement at index ${index}`).toHaveProperty('type');
			expect(statement, `Statement at index ${index}`).toHaveProperty('text');
			expect(statement, `Statement at index ${index}`).toHaveProperty('lastSeasonTruth');
			expect(statement, `Statement at index ${index}`).toHaveProperty('numberOfVotes');
			expect(statement, `Statement at index ${index}`).toHaveProperty('voteRatio');
			expect(statement, `Statement at index ${index}`).toHaveProperty('author');

			expect(typeof statement.id, `Statement at index ${index} id should be string`).toBe('string');
			expect(statement.type, `Statement at index ${index} type should be statement`).toBe('statement');
			expect(typeof statement.text, `Statement at index ${index} text should be string`).toBe('string');
			expect(typeof statement.lastSeasonTruth, `Statement at index ${index} lastSeasonTruth should be number`).toBe('number');
			expect(typeof statement.numberOfVotes, `Statement at index ${index} numberOfVotes should be number`).toBe('number');
			expect(typeof statement.voteRatio, `Statement at index ${index} voteRatio should be number`).toBe('number');
			expect(typeof statement.author, `Statement at index ${index} author should be string`).toBe('string');

			// Text should not be empty
			expect(statement.text.length, `Statement at index ${index} text should not be empty`).toBeGreaterThan(0);
			// Author should not be empty
			expect(statement.author.length, `Statement at index ${index} author should not be empty`).toBeGreaterThan(0);
		});
	});

	test('lastSeasonTruth should be between 0 and 1', () => {
		statements.forEach((statement, index) => {
			expect(statement.lastSeasonTruth, `Statement at index ${index} lastSeasonTruth should be >= 0`).toBeGreaterThanOrEqual(0);
			expect(statement.lastSeasonTruth, `Statement at index ${index} lastSeasonTruth should be <= 1`).toBeLessThanOrEqual(1);
		});
	});

	test('voteRatio should be between 0 and 1', () => {
		statements.forEach((statement, index) => {
			expect(statement.voteRatio, `Statement at index ${index} voteRatio should be >= 0`).toBeGreaterThanOrEqual(0);
			expect(statement.voteRatio, `Statement at index ${index} voteRatio should be <= 1`).toBeLessThanOrEqual(1);
		});
	});

	test('numberOfVotes should be non-negative', () => {
		statements.forEach((statement, index) => {
			expect(statement.numberOfVotes, `Statement at index ${index} numberOfVotes should be >= 0`).toBeGreaterThanOrEqual(0);
		});
	});

	test('should have diverse content', () => {
		const texts = statements.map(s => s.text);
		const uniqueTexts = new Set(texts);
		
		// Should have multiple unique statements
		expect(uniqueTexts.size).toBeGreaterThan(1);
		
		// Should have different authors
		const authors = statements.map(s => s.author);
		const uniqueAuthors = new Set(authors);
		expect(uniqueAuthors.size).toBeGreaterThan(1);
	});

	test('should include statements with varying truth values', () => {
		const truthValues = statements.map(s => s.lastSeasonTruth);
		const hasLowTruth = truthValues.some(t => t < 0.3);
		const hasHighTruth = truthValues.some(t => t > 0.7);
		
		expect(hasLowTruth).toBe(true);
		expect(hasHighTruth).toBe(true);
	});

	test('tags property should be optional array when present', () => {
		statements.forEach((statement, index) => {
			if (statement.tags) {
				expect(Array.isArray(statement.tags)).toBe(true);
				statement.tags.forEach(tag => {
					expect(typeof tag).toBe('string');
					expect(tag.length).toBeGreaterThan(0);
				});
			}
		});
	});
});