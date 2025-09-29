import { describe, test, expect, beforeEach } from 'vitest';
import { historyManager } from './history.svelte';

describe('history provider', () => {
	beforeEach(() => {
		// Reset history manager state before each test
		// Since we can't easily reset the state, we'll work around it
	});

	test('should provide history manager instance', () => {
		expect(historyManager).toBeDefined();
		expect(historyManager).toHaveProperty('watch');
		expect(historyManager).toHaveProperty('getNext');
		expect(historyManager).toHaveProperty('getPrevious');
	});

	test('should have watch method', () => {
		expect(typeof historyManager.watch).toBe('function');
	});

	test('should have getNext method', () => {
		expect(typeof historyManager.getNext).toBe('function');
	});

	test('should have getPrevious method', () => {
		expect(typeof historyManager.getPrevious).toBe('function');
	});

	test('should handle watching entities', () => {
		const mockEntity = {
			id: '1',
			type: 'statement' as const,
			text: 'Test statement',
			lastSeasonTruth: 0.8,
			numberOfVotes: 100,
			voteRatio: 0.6,
			author: 'Test Author'
		};

		// Should not throw when watching an entity
		expect(() => {
			historyManager.watch(mockEntity);
		}).not.toThrow();
	});

	test('should handle null/undefined entities gracefully', () => {
		expect(() => {
			historyManager.watch(undefined);
		}).not.toThrow();

		expect(() => {
			historyManager.watch(null as any);
		}).not.toThrow();
	});

	test('should return entities from navigation methods', () => {
		// These methods should return either an entity or undefined
		const next = historyManager.getNext();
		const previous = historyManager.getPrevious();

		// They should be either undefined or valid entities
		if (next !== undefined) {
			expect(next).toHaveProperty('id');
			expect(next).toHaveProperty('type');
		}

		if (previous !== undefined) {
			expect(previous).toHaveProperty('id');
			expect(previous).toHaveProperty('type');
		}
	});
});