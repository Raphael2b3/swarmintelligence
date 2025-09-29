import { describe, test, expect, vi } from 'vitest';
import { cn, flyAndScale } from './utils';

describe('utils', () => {
	describe('cn function', () => {
		test('should merge class names correctly', () => {
			const result = cn('class1', 'class2');
			expect(result).toBe('class1 class2');
		});

		test('should handle conditional classes', () => {
			const result = cn('base', true && 'conditional', false && 'not-included');
			expect(result).toBe('base conditional');
		});

		test('should handle empty and undefined values', () => {
			const result = cn('base', '', undefined, null, 'final');
			expect(result).toBe('base final');
		});

		test('should handle duplicate classes', () => {
			const result = cn('duplicate', 'other', 'duplicate');
			// clsx may not deduplicate, just ensure it includes all classes
			expect(result).toContain('duplicate');
			expect(result).toContain('other');
		});

		test('should handle arrays of classes', () => {
			const result = cn(['class1', 'class2'], 'class3');
			expect(result).toBe('class1 class2 class3');
		});
	});

	describe('flyAndScale transition', () => {
		// Skip flyAndScale tests in server environment
		test.skipIf(typeof window === 'undefined')('should return valid transition config with default parameters', () => {
			const mockElement = {
				style: { transform: 'none' }
			} as any;

			// Mock getComputedStyle if it's not available
			if (typeof window !== 'undefined' && !window.getComputedStyle) {
				Object.defineProperty(window, 'getComputedStyle', {
					writable: true,
					value: vi.fn().mockImplementation(() => ({
						transform: 'none'
					}))
				});
			}

			const result = flyAndScale(mockElement);

			expect(result).toHaveProperty('duration');
			expect(result).toHaveProperty('delay');
			expect(result).toHaveProperty('css');
			expect(result).toHaveProperty('easing');
			expect(typeof result.css).toBe('function');
			expect(result.duration).toBe(150); // default duration
			expect(result.delay).toBe(0);
		});

		test.skipIf(typeof window === 'undefined')('should accept custom parameters', () => {
			const mockElement = {
				style: { transform: 'none' }
			} as any;

			const customParams = {
				y: -10,
				x: 5,
				start: 0.9,
				duration: 200
			};

			const result = flyAndScale(mockElement, customParams);

			expect(result.duration).toBe(200);
		});

		test.skipIf(typeof window === 'undefined')('should generate correct CSS at different time values', () => {
			const mockElement = {
				style: { transform: 'none' }
			} as any;

			const transition = flyAndScale(mockElement, { y: -8, x: 0, start: 0.95 });

			// Test at different time values
			const cssAt0 = transition.css(0);
			const cssAt05 = transition.css(0.5);
			const cssAt1 = transition.css(1);

			expect(typeof cssAt0).toBe('string');
			expect(typeof cssAt05).toBe('string');
			expect(typeof cssAt1).toBe('string');

			// At t=1, opacity should be 1
			expect(cssAt1).toContain('opacity: 1');
			// At t=0, opacity should be 0
			expect(cssAt0).toContain('opacity: 0');
		});

		test.skipIf(typeof window === 'undefined')('should handle existing transforms', () => {
			const mockElement = {
				style: { transform: 'rotate(45deg)' }
			} as any;

			// Mock getComputedStyle to return a specific transform
			if (typeof window !== 'undefined') {
				Object.defineProperty(window, 'getComputedStyle', {
					writable: true,
					value: vi.fn().mockImplementation(() => ({ transform: 'rotate(45deg)' }))
				});

				const transition = flyAndScale(mockElement);
				const css = transition.css(1);

				expect(css).toContain('transform:');
				expect(css).toContain('rotate(45deg)');
			}
		});
	});
});