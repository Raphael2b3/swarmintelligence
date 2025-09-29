import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// required for svelte5 + jsdom as jsdom does not support matchMedia
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	enumerable: true,
	value: vi.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn()
	}))
});

// Mock IntersectionObserver
Object.defineProperty(window, 'IntersectionObserver', {
	writable: true,
	enumerable: true,
	value: vi.fn().mockImplementation((callback) => ({
		observe: vi.fn(),
		disconnect: vi.fn(),
		unobserve: vi.fn(),
		root: null,
		rootMargin: '0px',
		thresholds: [0]
	}))
});

// add more mocks here if you need them
