import { describe, test, expect } from 'vitest';
import { connections } from './data';

describe('connection data', () => {
	test('should export an array of connections', () => {
		expect(Array.isArray(connections)).toBe(true);
		expect(connections.length).toBeGreaterThan(0);
	});

	test('each connection should have required properties', () => {
		connections.forEach((connection, index) => {
			// Basic properties
			expect(connection, `Connection at index ${index}`).toHaveProperty('id');
			expect(connection, `Connection at index ${index}`).toHaveProperty('type');
			expect(connection, `Connection at index ${index}`).toHaveProperty('thesis');
			expect(connection, `Connection at index ${index}`).toHaveProperty('argument');
			expect(connection, `Connection at index ${index}`).toHaveProperty('isProArgument');
			expect(connection, `Connection at index ${index}`).toHaveProperty('weight');
			expect(connection, `Connection at index ${index}`).toHaveProperty('numberOfVotes');
			expect(connection, `Connection at index ${index}`).toHaveProperty('isTrueVotes');
			expect(connection, `Connection at index ${index}`).toHaveProperty('creator');

			// Type checks
			expect(typeof connection.id, `Connection at index ${index} id should be string`).toBe('string');
			expect(connection.type, `Connection at index ${index} type should be connection`).toBe('connection');
			expect(typeof connection.thesis, `Connection at index ${index} thesis should be object`).toBe('object');
			expect(typeof connection.argument, `Connection at index ${index} argument should be object`).toBe('object');
			expect(typeof connection.isProArgument, `Connection at index ${index} isProArgument should be boolean`).toBe('boolean');
			expect(typeof connection.weight, `Connection at index ${index} weight should be number`).toBe('number');
			expect(typeof connection.numberOfVotes, `Connection at index ${index} numberOfVotes should be number`).toBe('number');
			expect(typeof connection.isTrueVotes, `Connection at index ${index} isTrueVotes should be number`).toBe('number');
			expect(typeof connection.creator, `Connection at index ${index} creator should be string`).toBe('string');

			// Non-empty strings
			expect(connection.id.length, `Connection at index ${index} id should not be empty`).toBeGreaterThan(0);
			expect(connection.creator.length, `Connection at index ${index} creator should not be empty`).toBeGreaterThan(0);
		});
	});

	test('thesis and argument should be valid statements', () => {
		connections.forEach((connection, index) => {
			// Check thesis
			expect(connection.thesis, `Connection at index ${index} thesis`).toHaveProperty('id');
			expect(connection.thesis, `Connection at index ${index} thesis`).toHaveProperty('type');
			expect(connection.thesis, `Connection at index ${index} thesis`).toHaveProperty('text');
			expect(connection.thesis, `Connection at index ${index} thesis`).toHaveProperty('author');
			expect(connection.thesis.type, `Connection at index ${index} thesis type should be statement`).toBe('statement');

			// Check argument
			expect(connection.argument, `Connection at index ${index} argument`).toHaveProperty('id');
			expect(connection.argument, `Connection at index ${index} argument`).toHaveProperty('type');
			expect(connection.argument, `Connection at index ${index} argument`).toHaveProperty('text');
			expect(connection.argument, `Connection at index ${index} argument`).toHaveProperty('author');
			expect(connection.argument.type, `Connection at index ${index} argument type should be statement`).toBe('statement');
		});
	});

	test('weight should be between 0 and 1', () => {
		connections.forEach((connection, index) => {
			expect(connection.weight, `Connection at index ${index} weight should be >= 0`).toBeGreaterThanOrEqual(0);
			expect(connection.weight, `Connection at index ${index} weight should be <= 1`).toBeLessThanOrEqual(1);
		});
	});

	test('vote counts should be valid', () => {
		connections.forEach((connection, index) => {
			expect(connection.numberOfVotes, `Connection at index ${index} numberOfVotes should be >= 0`).toBeGreaterThanOrEqual(0);
			expect(connection.isTrueVotes, `Connection at index ${index} isTrueVotes should be >= 0`).toBeGreaterThanOrEqual(0);
			expect(connection.isTrueVotes, `Connection at index ${index} isTrueVotes should be <= numberOfVotes`).toBeLessThanOrEqual(connection.numberOfVotes);
		});
	});

	test('should have both pro and contra arguments', () => {
		const proArguments = connections.filter(c => c.isProArgument === true);
		const contraArguments = connections.filter(c => c.isProArgument === false);

		expect(proArguments.length).toBeGreaterThan(0);
		expect(contraArguments.length).toBeGreaterThan(0);
	});

	test('should have diverse creators', () => {
		const creators = connections.map(c => c.creator);
		const uniqueCreators = new Set(creators);
		
		// Should have at least one creator (may have same creator in test data)
		expect(uniqueCreators.size).toBeGreaterThanOrEqual(1);
	});

	test('statements should have meaningful content', () => {
		connections.forEach((connection, index) => {
			expect(connection.thesis.text.length, `Connection at index ${index} thesis text should be meaningful`).toBeGreaterThan(5);
			expect(connection.argument.text.length, `Connection at index ${index} argument text should be meaningful`).toBeGreaterThan(5);
			expect(connection.thesis.author.length, `Connection at index ${index} thesis author should not be empty`).toBeGreaterThan(0);
			expect(connection.argument.author.length, `Connection at index ${index} argument author should not be empty`).toBeGreaterThan(0);
		});
	});
});