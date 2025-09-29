import { describe, test, expect } from 'vitest';
import { duplictons } from './data';

describe('duplication data', () => {
	test('should export an array of duplications', () => {
		expect(Array.isArray(duplictons)).toBe(true);
		expect(duplictons.length).toBeGreaterThan(0);
	});

	test('each duplication should have required properties', () => {
		duplictons.forEach((duplication, index) => {
			// Basic properties
			expect(duplication, `Duplication at index ${index}`).toHaveProperty('id');
			expect(duplication, `Duplication at index ${index}`).toHaveProperty('type');
			expect(duplication, `Duplication at index ${index}`).toHaveProperty('statementA');
			expect(duplication, `Duplication at index ${index}`).toHaveProperty('statementB');
			expect(duplication, `Duplication at index ${index}`).toHaveProperty('numberOfVotes');
			expect(duplication, `Duplication at index ${index}`).toHaveProperty('isDuplicateVotes');

			// Type checks
			expect(typeof duplication.id, `Duplication at index ${index} id should be string`).toBe('string');
			expect(duplication.type, `Duplication at index ${index} type should be duplication`).toBe('duplication');
			expect(typeof duplication.statementA, `Duplication at index ${index} statementA should be object`).toBe('object');
			expect(typeof duplication.statementB, `Duplication at index ${index} statementB should be object`).toBe('object');
			expect(typeof duplication.numberOfVotes, `Duplication at index ${index} numberOfVotes should be number`).toBe('number');
			expect(typeof duplication.isDuplicateVotes, `Duplication at index ${index} isDuplicateVotes should be number`).toBe('number');

			// Non-empty ID
			expect(duplication.id.length, `Duplication at index ${index} id should not be empty`).toBeGreaterThan(0);
		});
	});

	test('statementA and statementB should be valid statements', () => {
		duplictons.forEach((duplication, index) => {
			// Check statementA
			expect(duplication.statementA, `Duplication at index ${index} statementA`).toHaveProperty('id');
			expect(duplication.statementA, `Duplication at index ${index} statementA`).toHaveProperty('type');
			expect(duplication.statementA, `Duplication at index ${index} statementA`).toHaveProperty('text');
			expect(duplication.statementA, `Duplication at index ${index} statementA`).toHaveProperty('author');
			expect(duplication.statementA.type, `Duplication at index ${index} statementA type should be statement`).toBe('statement');

			// Check statementB
			expect(duplication.statementB, `Duplication at index ${index} statementB`).toHaveProperty('id');
			expect(duplication.statementB, `Duplication at index ${index} statementB`).toHaveProperty('type');
			expect(duplication.statementB, `Duplication at index ${index} statementB`).toHaveProperty('text');
			expect(duplication.statementB, `Duplication at index ${index} statementB`).toHaveProperty('author');
			expect(duplication.statementB.type, `Duplication at index ${index} statementB type should be statement`).toBe('statement');
		});
	});

	test('vote counts should be valid', () => {
		duplictons.forEach((duplication, index) => {
			expect(duplication.numberOfVotes, `Duplication at index ${index} numberOfVotes should be >= 0`).toBeGreaterThanOrEqual(0);
			expect(duplication.isDuplicateVotes, `Duplication at index ${index} isDuplicateVotes should be >= 0`).toBeGreaterThanOrEqual(0);
			expect(duplication.isDuplicateVotes, `Duplication at index ${index} isDuplicateVotes should be <= numberOfVotes`).toBeLessThanOrEqual(duplication.numberOfVotes);
		});
	});

	test('should have meaningful duplication ratios', () => {
		duplictons.forEach((duplication, index) => {
			const ratio = duplication.isDuplicateVotes / duplication.numberOfVotes;
			expect(ratio, `Duplication at index ${index} ratio should be >= 0`).toBeGreaterThanOrEqual(0);
			expect(ratio, `Duplication at index ${index} ratio should be <= 1`).toBeLessThanOrEqual(1);
		});
	});

	test('statements should have meaningful content', () => {
		duplictons.forEach((duplication, index) => {
			expect(duplication.statementA.text.length, `Duplication at index ${index} statementA text should be meaningful`).toBeGreaterThan(5);
			expect(duplication.statementB.text.length, `Duplication at index ${index} statementB text should be meaningful`).toBeGreaterThan(5);
			expect(duplication.statementA.author.length, `Duplication at index ${index} statementA author should not be empty`).toBeGreaterThan(0);
			expect(duplication.statementB.author.length, `Duplication at index ${index} statementB author should not be empty`).toBeGreaterThan(0);
		});
	});

	test('should have variety in duplication votes', () => {
		const ratios = duplictons.map(d => d.isDuplicateVotes / d.numberOfVotes);
		const hasLowRatio = ratios.some(r => r < 0.5);
		const hasHighRatio = ratios.some(r => r > 0.7);
		
		expect(hasLowRatio || hasHighRatio).toBe(true); // Should have some variation
	});

	test('should have statements with proper structure', () => {
		duplictons.forEach((duplication, index) => {
			// Statement A structure
			expect(duplication.statementA, `Duplication at index ${index} statementA`).toHaveProperty('lastSeasonTruth');
			expect(duplication.statementA, `Duplication at index ${index} statementA`).toHaveProperty('numberOfVotes');
			expect(duplication.statementA, `Duplication at index ${index} statementA`).toHaveProperty('voteRatio');
			expect(typeof duplication.statementA.lastSeasonTruth, `Duplication at index ${index} statementA lastSeasonTruth should be number`).toBe('number');
			expect(typeof duplication.statementA.numberOfVotes, `Duplication at index ${index} statementA numberOfVotes should be number`).toBe('number');
			expect(typeof duplication.statementA.voteRatio, `Duplication at index ${index} statementA voteRatio should be number`).toBe('number');

			// Statement B structure
			expect(duplication.statementB, `Duplication at index ${index} statementB`).toHaveProperty('lastSeasonTruth');
			expect(duplication.statementB, `Duplication at index ${index} statementB`).toHaveProperty('numberOfVotes');
			expect(duplication.statementB, `Duplication at index ${index} statementB`).toHaveProperty('voteRatio');
			expect(typeof duplication.statementB.lastSeasonTruth, `Duplication at index ${index} statementB lastSeasonTruth should be number`).toBe('number');
			expect(typeof duplication.statementB.numberOfVotes, `Duplication at index ${index} statementB numberOfVotes should be number`).toBe('number');
			expect(typeof duplication.statementB.voteRatio, `Duplication at index ${index} statementB voteRatio should be number`).toBe('number');
		});
	});
});